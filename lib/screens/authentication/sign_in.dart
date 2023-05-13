import 'package:flutter/material.dart';
import 'package:flutter_auth/constants/colors.dart';
import 'package:flutter_auth/constants/description.dart';
import '../../constants/styles.dart';
import '../../services/auth.dart';

class SignIn extends StatefulWidget {
  const SignIn({Key? key}) : super(key: key);

  @override
  State<SignIn> createState() => _SignInState();
}

class _SignInState extends State<SignIn> {
  //ref for the AuthServices class
  final AuthServices _auth = AuthServices();

  //from key
  final _formKey = GlobalKey<FormState>();
  //email password states
  String email = "";
  String password = "";
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: bgBlack,
      appBar: AppBar(
        title: const Text("SIGN IN"),
        elevation: 0,
        backgroundColor: bgBlack,
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.only(left: 15, right: 10),
          child: Column(
            children: [
              //descrption
              const Text(
                description,
                style: descriptionStyle,
              ),

              Center(
                child: Image.asset(
                  'assets/images/man.png',
                  height: 200,
                ),
              ),
              Form(
                key: _formKey,
                child: Column(
                  children: [
                    //email
                    TextFormField(
                      validator: (val) =>
                          val!.isEmpty ? "Enter a valid email" : null,
                      onChanged: (val) {
                        setState(() {
                          email = val;
                        });
                      },
                    ),
                    //password
                    TextFormField(
                      validator: (val) => val!.length < 6
                          ? "Password must be at least 6 characters"
                          : null,
                      onChanged: (val) {
                        setState(() {
                          password = val;
                        });
                      },
                    ),
                    //google
                    const SizedBox(height: 20),
                    const Text(
                      "Login with social accounts",
                      style: descriptionStyle,
                    ),
                    const SizedBox(height: 20),
                    Center(
                      child: Image.asset(
                        'assets/images/google.png',
                        height: 50,
                      ),
                    ),

                    //register
                    //button
                    //anon
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
