import 'package:flutter/material.dart';
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
      home: Scaffold(
        appBar: AppBar(
          title: const Text("HOME"),
          actions: [
            ElevatedButton(
              onPressed: () async {
                await _auth.signOut();
              },
              child: const Icon(Icons.logout),
            )
          ],
        ),
      ),
    );
  }
}
