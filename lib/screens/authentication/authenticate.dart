import 'package:flutter/material.dart';
import 'package:flutter_auth/screens/authentication/register.dart';
import 'package:flutter_auth/screens/authentication/sign_in.dart';

class Authenticate extends StatefulWidget {
  const Authenticate({super.key});

  @override
  State<Authenticate> createState() => _AuthenticateState();
}

class _AuthenticateState extends State<Authenticate> {
  bool singinPage = true;

  //toggle pages
  void switchPages() {
    setState(() {
      singinPage = !singinPage;
    });
  }

  @override
  Widget build(BuildContext context) {
    if (singinPage == true) {
      return SignIn(toggle: switchPages);
    } else {
      return Register(toggle: switchPages);
    }
  }
}
