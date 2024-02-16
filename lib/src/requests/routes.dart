import 'package:dio/dio.dart';

import '../../restrr.dart';

enum RouteMethod {
  get,
  post,
  put,
  delete,
  patch;

  @override
  String toString() => name.toUpperCase();
}

class Route {
  final RouteMethod method;
  final String path;
  final int paramCount;

  Route(this.method, this.path)
      : assert(StringUtils.count(path, '{') == StringUtils.count(path, '}')),
        paramCount = StringUtils.count(path, '{');

  CompiledRoute compile({List<String> params = const []}) {
    if (params.length != paramCount) {
      throw ArgumentError(
          'Error compiling route [$method $path}]: Incorrect amount of parameters! Expected: $paramCount, Provided: ${params.length}');
    }
    final Map<String, String> values = {};
    String compiledRoute = path;
    for (String param in params) {
      int paramStart = compiledRoute.indexOf('{');
      int paramEnd = compiledRoute.indexOf('}');
      values[compiledRoute.substring(paramStart + 1, paramEnd)] = param;
      compiledRoute = compiledRoute.replaceRange(paramStart, paramEnd + 1, param);
    }
    return CompiledRoute(this, compiledRoute, values);
  }
}

class CompiledRoute {
  final Route baseRoute;
  final String compiledRoute;
  final Map<String, String> parameters;
  Map<String, String>? queryParameters;

  CompiledRoute(this.baseRoute, this.compiledRoute, this.parameters, {this.queryParameters});

  CompiledRoute withQueryParams(Map<String, String> params) {
    String newRoute = compiledRoute;
    params.forEach((key, value) {
      newRoute = '$newRoute${queryParameters == null || queryParameters!.isEmpty ? '?' : '&'}$key=$value';
      queryParameters ??= {};
      queryParameters![key] = value;
    });
    return CompiledRoute(baseRoute, newRoute, parameters, queryParameters: queryParameters);
  }

  Future<Response> submit({String? bearerToken, String? mfaCode, dynamic body, String contentType = 'application/json'}) {
    if (!Restrr.hostInformation.hasHostUrl) {
      throw StateError('Host URL is not set!');
    }
    Dio dio = Dio();
    Map<String, dynamic> headers = {};
    if (bearerToken != null) {
      headers['Authorization'] = 'Bearer $bearerToken';
    }
    if (mfaCode != null) {
      headers['X-MFA-Code'] = mfaCode;
    }
    headers['Content-Type'] = contentType;
    return dio.fetch(RequestOptions(
        path: compiledRoute,
        headers: headers,
        data: body,
        method: baseRoute.method.toString(),
        baseUrl: _buildBaseUrl(Restrr.hostInformation)));
  }

  String _buildBaseUrl(HostInformation hostInformation) {
    String effectiveHostUrl = hostInformation.hostUrl!;
    if (effectiveHostUrl.endsWith('/')) {
      effectiveHostUrl = effectiveHostUrl.substring(0, effectiveHostUrl.length - 1);
    }
    return '$effectiveHostUrl/api/v${hostInformation.apiVersion}';
  }
}

class StatusRoutes {
  static final Route health = Route(RouteMethod.get, '/status/health');
  static final Route coffee = Route(RouteMethod.get, '/status/coffee');
}
