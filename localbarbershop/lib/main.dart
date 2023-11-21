import 'package:flutter/material.dart';
import 'package:localbarbershop/Pages/home_page.dart';
import 'package:localbarbershop/Pages/landing_page.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      routes: {
        "/homepage":(context) => HomePage()
      },
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.indigo,
        // primaryColor: Color.fromARGB(255, 12, 43, 80),
      ),
      home: LandingPage(),
    );
  }
}
