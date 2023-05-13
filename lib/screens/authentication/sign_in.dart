import 'package:flutter/material.dart';
import '../../services/auth.dart';

class SignIn extends StatefulWidget {
  const SignIn({super.key});

  @override
  State<SignIn> createState() => _SignInState();
}

class _SignInState extends State<SignIn> {
  //ref for the AuthServices class
  final AuthServices _auth = AuthServices();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("SIGN IN"),
        backgroundColor: const Color(0xff121212),
        elevation: 0,
      ),
      body: ElevatedButton(
        child: const Text("Sign in Anonymously"),
        onPressed: () async {
          dynamic resulut = await _auth.signInAnonymously();
          if (resulut == Null) {
            print("error in sign in anon");
          } else {
            print("signed in anon");
            print(resulut.uid);
          }
        },
      ),
    );
  }
}
