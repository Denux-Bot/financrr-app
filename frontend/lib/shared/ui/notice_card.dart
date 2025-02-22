import 'package:financrr_frontend/modules/settings/providers/theme.provider.dart';
import 'package:flutter/material.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

class NoticeCard extends ConsumerWidget {
  final IconData iconData;
  final String title;
  final String description;
  final Function()? onTap;

  const NoticeCard({
    super.key,
    this.iconData = Icons.info_outline_rounded,
    required this.title,
    required this.description,
    this.onTap,
  });

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Card.outlined(
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Row(
          children: [
            Icon(iconData),
            const SizedBox(width: 16),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(title, style: const TextStyle(fontSize: 18)),
                  onTap == null
                      ? Text(description)
                      : GestureDetector(
                          onTap: onTap,
                          child: Text.rich(TextSpan(
                              children: [
                                TextSpan(text: description),
                                WidgetSpan(
                                    child: Padding(
                                  padding: const EdgeInsets.only(left: 5),
                                  child: Icon(Icons.arrow_forward_rounded, size: 17, color: ref.themeData.primaryColor),
                                ))
                              ],
                              style: ref.textTheme.bodyMedium
                                  ?.copyWith(color: ref.themeData.primaryColor, fontWeight: FontWeight.w500))),
                        ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
