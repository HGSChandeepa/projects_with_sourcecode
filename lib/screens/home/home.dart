import 'package:flutter/material.dart';
import 'package:flutter_auth/constants/colors.dart';
import 'package:flutter_auth/constants/description.dart';
import 'package:flutter_auth/services/auth.dart';

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  //caeate a obj from AuthService
  final AuthServices _auth = AuthServices();
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        backgroundColor: bgBlack,
        appBar: AppBar(
          elevation: 0,
          backgroundColor: bgBlack,
          actions: [
            ElevatedButton(
              style: const ButtonStyle(
                backgroundColor: MaterialStatePropertyAll(bgBlack),
              ),
              onPressed: () async {
                await _auth.signOut();
              },
              child: const Icon(Icons.logout),
            )
          ],
        ),
        body: Padding(
          padding: EdgeInsets.all(20.0),
          child: Center(
            child: Column(
              children: [
                const Text(
                  "HOME",
                  style: TextStyle(
                      color: Colors.white,
                      fontSize: 20,
                      fontWeight: FontWeight.w800),
                ),
                const SizedBox(
                  height: 30,
                ),
                const Text(
                  description,
                  textAlign: TextAlign.center,
                  style: TextStyle(
                      color: textLight,
                      fontSize: 10,
                      fontWeight: FontWeight.w300),
                ),
                const SizedBox(
                  height: 60,
                ),
                Center(
                  child: Image.asset(
                    'assets/images/man.png',
                    height: 200,
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
