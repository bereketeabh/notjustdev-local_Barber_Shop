// ignore_for_file: prefer_const_constructors

import 'package:flutter/material.dart';

class LandingPage extends StatelessWidget {
  const LandingPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color.fromARGB(255, 255, 255, 255),
      body: Center(
        child: Column(crossAxisAlignment: CrossAxisAlignment.center, children: [
          Container(
            margin: EdgeInsets.only(top: 50),
            child: Image.asset(
              "lib/Images/cutandshave.png",
              width: 200,
            ),
          ),
          Container(
              margin: EdgeInsets.only(top: 30),
              child: Text(
                "B A R B E R   H U B",
                style: TextStyle(
                    fontSize: 17,
                    fontFamily: "monospace",
                    fontWeight: FontWeight.bold),
              )),
          Container(
              margin: EdgeInsets.only(top: 30),
              child: Text(
                "Stay Fresh, Stay Sharp",
                style: TextStyle(
                  fontSize: 15,
                  fontFamily: "monospace",
                ),
              )),
          Padding(
            padding: const EdgeInsets.all(20.0),
            child: GestureDetector(
              onTap: () {
                Navigator.pushNamed(context, "/homepage");
              },
              child: Container(
                decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(10),
                    color: Colors.indigo),
                height: 40,
                width: double.infinity,
                child: Center(
                    child: Text(
                  "Get Started",
                  style: TextStyle(color: Colors.white),
                )),
              ),
            ),
          )
        ]),
      ),
    );
  }
}
