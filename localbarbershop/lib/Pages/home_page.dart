// ignore_for_file: prefer_const_constructors

import 'package:flutter/material.dart';
import 'package:localbarbershop/Components/barberListItem.dart';
import 'package:localbarbershop/data/barberList.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color.fromARGB(255, 255, 255, 255),
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0,
        title: Text(
          "BarberHub",
          style: TextStyle(color: Colors.black),
        ),
        leading: Builder(
            builder: (context) => IconButton(
                  onPressed: () {
                    Scaffold.of(context).openDrawer();
                  },
                  icon: Icon(Icons.menu),
                  color: Colors.black,
                )),
        centerTitle: true,
      ),
      drawer: Drawer(
        child: Container(
          color: Color.fromARGB(
              255, 177, 184, 190), // Set the menu bar color to black
          child: ListView(
            padding: EdgeInsets.zero,
            children: <Widget>[
              DrawerHeader(
                  decoration: BoxDecoration(
                      // color: Colors.black, // Set the menu bar color to black
                      ),
                  child: Image.asset("lib/Images/cutandshave.png")),
              ListTile(
                leading: Icon(Icons.settings),
                title: Text(
                  'Setting',
                  style: TextStyle(
                    color: Colors.black,
                  ),
                ),
              ),
              ListTile(
                leading: Icon(Icons.info),
                title: Text(
                  'info',
                  style: TextStyle(
                    color: Colors.black,
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
      body: ListView(
        BarberList barberList = barberList([]),
        children: [BarberListItem(barberList: ,)],
      ),
    );
  }
}
