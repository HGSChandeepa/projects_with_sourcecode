import 'package:flutter/material.dart';

import 'colors.dart';

const TextStyle descriptionStyle = TextStyle(
  fontSize: 12,
  color: textLight,
  fontWeight: FontWeight.w200,
);

const textInputDecoration = InputDecoration(
  hintText: "email",
  hintStyle: TextStyle(color: textLight, fontSize: 15),
  fillColor: bgBlack,
  filled: true,
  enabledBorder: OutlineInputBorder(
    borderSide: BorderSide(color: mainYellow, width: 1),
    borderRadius: BorderRadius.all(
      Radius.circular(100),
    ),
  ),
  focusedBorder: OutlineInputBorder(
    borderSide: BorderSide(color: mainYellow, width: 1),
    borderRadius: BorderRadius.all(
      Radius.circular(100),
    ),
  ),
  // set text color to white
  labelStyle: TextStyle(color: Colors.white),
);
