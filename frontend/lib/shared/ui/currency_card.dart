import 'package:financrr_frontend/modules/settings/providers/theme.provider.dart';
import 'package:financrr_frontend/routing/router_extensions.dart';
import 'package:financrr_frontend/shared/ui/text_circle_avatar.dart';
import 'package:flutter/material.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';
import 'package:restrr/restrr.dart';

import '../../modules/settings/views/currency_edit_page.dart';

class CurrencyCard extends ConsumerWidget {
  final Id id;
  final String name;
  final String symbol;
  final int decimalPlaces;
  final String? isoCode;
  final bool isCustom;
  final bool interactive;
  final Function()? onDelete;

  CurrencyCard({super.key, required Currency currency, this.interactive = true, this.onDelete})
      : id = currency.id.value,
        name = currency.name,
        symbol = currency.symbol,
        decimalPlaces = currency.decimalPlaces,
        isoCode = currency.isoCode,
        isCustom = currency is CustomCurrency;

  const CurrencyCard.fromData(
      {super.key,
      required this.id,
      required this.name,
      required this.symbol,
      required this.decimalPlaces,
      this.isoCode,
      required this.isCustom,
      this.interactive = true,
      this.onDelete});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Card.outlined(
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
        child: Row(
          children: [
            TextCircleAvatar(text: symbol, radius: 25),
            const SizedBox(width: 20),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(name, style: ref.textTheme.titleSmall),
                  if (isoCode != null) Text(isoCode!),
                ],
              ),
            ),
            PopupMenuButton(
              enabled: interactive && isCustom,
              itemBuilder: (context) {
                return [
                  PopupMenuItem(
                    onTap: () => context.goPath(CurrencyEditPage.pagePath.build(params: {'currencyId': id.toString()})),
                    child: const Text('Edit'),
                  ),
                  if (onDelete != null)
                    PopupMenuItem(
                      onTap: onDelete,
                      child: const Text('Delete'),
                    ),
                ];
              },
            )
          ],
        ),
      ),
    );
  }
}
