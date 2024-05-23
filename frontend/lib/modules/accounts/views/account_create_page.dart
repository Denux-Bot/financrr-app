import 'package:financrr_frontend/modules/auth/providers/authentication.provider.dart';
import 'package:financrr_frontend/utils/extensions.dart';
import 'package:financrr_frontend/utils/l10n_utils.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';
import 'package:restrr/restrr.dart';

import '../../../shared/ui/adaptive_scaffold.dart';
import '../../../routing/page_path.dart';
import '../../../shared/ui/cards/account_card.dart';
import '../../../shared/ui/custom_replacements/custom_button.dart';
import '../../../utils/form_fields.dart';
import '../../../utils/text_utils.dart';
import '../../settings/providers/theme.provider.dart';
import 'accounts_overview_page.dart';

class AccountCreatePage extends StatefulHookConsumerWidget {
  static const PagePathBuilder pagePath = PagePathBuilder.child(parent: AccountsOverviewPage.pagePath, path: 'create');

  const AccountCreatePage({super.key});

  @override
  ConsumerState<AccountCreatePage> createState() => _AccountCreatePageState();
}

class _AccountCreatePageState extends ConsumerState<AccountCreatePage> {
  final GlobalKey<FormState> _formKey = GlobalKey();

  late final Restrr _api = api;

  late final TextEditingController _nameController = TextEditingController();
  late final TextEditingController _descriptionController = TextEditingController();
  late final TextEditingController _ibanController = TextEditingController();
  late final TextEditingController _originalBalanceController = TextEditingController();

  Currency? _currency;

  bool _isValid = false;

  @override
  void initState() {
    super.initState();
    _isValid = _formKey.currentState?.validate() ?? false;
  }

  @override
  void dispose() {
    _nameController.dispose();
    _descriptionController.dispose();
    _ibanController.dispose();
    _originalBalanceController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    var theme = ref.watch(themeProvider);

    buildVerticalLayout(Size size) {
      return Padding(
        padding: const EdgeInsets.only(top: 10, bottom: 20),
        child: Align(
          alignment: Alignment.topCenter,
          child: SizedBox(
            width: size.width / 1.1,
            child: SingleChildScrollView(
                child: Form(
              key: _formKey,
              onChanged: () => setState(() => _isValid = _formKey.currentState?.validate() ?? false),
              child: Column(
                children: [
                  AccountCard.fromData(
                    id: 0,
                    name: _nameController.text,
                    iban: _ibanController.text,
                    description: _descriptionController.text,
                    balance: int.tryParse(_originalBalanceController.text) ?? 0,
                    currency: _currency ?? _api.getCurrencies().first,
                  ),
                  const SizedBox(height: 20),
                  ...FormFields.account(ref, theme,
                      api: _api,
                      nameController: _nameController,
                      descriptionController: _descriptionController,
                      ibanController: _ibanController,
                      originalBalanceController: _originalBalanceController,
                      onCurrencyChanged: (currency) => _currency = currency!),
                  const SizedBox(height: 20),
                  FinancrrButton(
                    onPressed: _isValid ? () => _createAccount() : null,
                    text: _nameController.text.isEmpty
                        ? L10nKey.accountCreate.toString()
                        : L10nKey.commonCreateObject.toString(namedArgs: {'object': _nameController.text}),
                  ),
                ],
              ),
            )),
          ),
        ),
      );
    }

    return AdaptiveScaffold(
      resizeToAvoidBottomInset: false,
      verticalBuilder: (_, __, size) => buildVerticalLayout(size),
    );
  }

  Future<void> _createAccount() async {
    if (!_isValid || _currency == null) return;
    try {
      await _api.createAccount(
        name: _nameController.text,
        description: _descriptionController.text.isEmpty ? null : _descriptionController.text,
        iban: _ibanController.text.isEmpty ? null : TextUtils.formatIBAN(_ibanController.text),
        originalBalance: int.tryParse(_originalBalanceController.text) ?? 0,
        currencyId: _currency!.id.value,
      );
      if (!mounted) return;
      L10nKey.commonCreateObjectSuccess.showSnack(context, namedArgs: {'object': _nameController.text});
      context.pop();
    } on RestrrException catch (e) {
      context.showSnackBar(e.message!);
    }
  }
}
