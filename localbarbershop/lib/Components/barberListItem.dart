import 'package:flutter/material.dart';
import 'package:localbarbershop/data/barberList.dart';

class BarberListItem extends StatelessWidget {
  BarberList barberList;
   BarberListItem({super.key, required this.barberList});

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Stack(children: [Image.asset(barberList.name)]),
    );
  }
}
