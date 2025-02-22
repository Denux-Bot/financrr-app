import 'dart:math';

import 'package:easy_localization/easy_localization.dart';
import 'package:financrr_frontend/modules/settings/models/theme.state.dart';
import 'package:financrr_frontend/modules/settings/providers/theme.provider.dart';
import 'package:financrr_frontend/routing/router_extensions.dart';
import 'package:financrr_frontend/utils/extensions.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

import '../../modules/auth/pages/server_config_page.dart';
import 'adaptive_scaffold.dart';

class AuthPageTemplate extends StatefulHookConsumerWidget {
  final bool showBackButton;
  final bool registerWelcomeMessages;
  final Widget child;

  const AuthPageTemplate({super.key, required this.child, this.showBackButton = false, this.registerWelcomeMessages = false});

  @override
  ConsumerState<AuthPageTemplate> createState() => AuthPageTemplateState();
}

class AuthPageTemplateState extends ConsumerState<AuthPageTemplate> {
  final int _random = Random().nextInt(4) + 1;

  @override
  Widget build(BuildContext context) {
    var theme = ref.watch(themeProvider);

    return AdaptiveScaffold(
      resizeToAvoidBottomInset: false,
      verticalBuilder: (_, __, size) => SafeArea(child: _buildVerticalLayout(size, theme)),
    );
  }

  Widget _buildVerticalLayout(Size size, ThemeState theme) {
    return SingleChildScrollView(
        physics: const BouncingScrollPhysics(),
        child: Center(
            child: SizedBox(
          width: MediaQuery.of(context).size.width / 1.2,
          child: Column(children: [
            Padding(
              padding: const EdgeInsets.only(top: 20),
              child: Row(
                mainAxisAlignment: widget.showBackButton ? MainAxisAlignment.spaceBetween : MainAxisAlignment.end,
                children: [
                  if (widget.showBackButton)
                    IconButton(
                        tooltip: 'Change Server Configuration',
                        onPressed: () => context.goPath(ServerConfigPage.pagePath.build()),
                        icon: Icon(Icons.arrow_back, color: Colors.grey[400])),
                  IconButton(
                      tooltip: 'Toggle theme',
                      onPressed: () => ref
                          .read(themeProvider.notifier)
                          .setMode(theme.mode == ThemeMode.light ? ThemeMode.dark : ThemeMode.light),
                      icon: Icon(context.lightMode ? Icons.nightlight_round : Icons.wb_sunny, color: Colors.grey[400])),
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(bottom: 10),
              child: SvgPicture.asset(ref.currentTheme.logoPath,
                  width: 100, colorFilter: ColorFilter.mode(ref.themeData.primaryColor, BlendMode.srcIn)),
            ),
            Text('${widget.registerWelcomeMessages ? 'sign_up' : 'sign_in'}_message_$_random',
                    style: ref.textTheme.titleLarge?.copyWith(color: ref.themeData.primaryColor))
                .tr(),
            widget.child
          ]),
        )));
  }
}
