import 'package:equatable/equatable.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:restrr/restrr.dart';

import '../../../data/host_repository.dart';
import '../../../data/repositories.dart';
import '../../../data/session_repository.dart';

part 'authentication_event.dart';
part 'authentication_state.dart';

extension AuthenticationBlocExtension on BuildContext {
  Restrr? get api => BlocProvider.of<AuthenticationBloc>(this).state.api;
}

class AuthenticationBloc extends Bloc<AuthenticationEvent, AuthenticationState> {
  AuthenticationBloc() : super(const AuthenticationState.unknown()) {
    on<AuthenticationLoginRequested>(_onAuthenticationLoginRequested);
    on<AuthenticationRecoveryRequested>(_onAuthenticationRecoveryRequested);
    on<AuthenticationLogoutRequested>(_onAuthenticationLogoutRequested);
  }

  void _onAuthenticationLoginRequested(AuthenticationLoginRequested event, Emitter<AuthenticationState> emit) async {
    try {
      final Restrr api = await _getRestrrBuilder(event.uri).login(username: event.username, password: event.password);
      await Repositories.sessionRepository.write(api.session.token);
      emit(AuthenticationState.authenticated(api));
    } catch (e) {
      emit(const AuthenticationState.unauthenticated());
    }
  }

  void _onAuthenticationRecoveryRequested(AuthenticationRecoveryRequested event, Emitter<AuthenticationState> emit) async {
    final HostPreferences hostPrefs = HostService.get();
    if (!(await SessionService.hasSession()) || hostPrefs.hostUrl.isEmpty) {
      emit(const AuthenticationState.unauthenticated());
      return;
    }
    final String token = (await Repositories.sessionRepository.read())!;
    try {
      final Restrr api = await _getRestrrBuilder(Uri.parse(hostPrefs.hostUrl)).refresh(sessionToken: token);
      await Repositories.sessionRepository.write(api.session.token);
      emit(AuthenticationState.authenticated(api));
    } on RestrrException catch (_) {
      emit(const AuthenticationState.unauthenticated());
    }
  }

  void _onAuthenticationLogoutRequested(AuthenticationLogoutRequested event, Emitter<AuthenticationState> emit) async {
    try {
      final bool success = await event.api.session.delete();
      if (success) {
        await Repositories.sessionRepository.delete();
        emit(const AuthenticationState.unauthenticated());
        return;
      }
    } on RestrrException catch (_) {}
    emit(AuthenticationState.authenticated(event.api));
  }

  RestrrBuilder _getRestrrBuilder(Uri uri) => RestrrBuilder(uri: uri, options: const RestrrOptions(isWeb: kIsWeb));
}
