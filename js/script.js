// Copyright (c) 2025 Ain Jeong All rights reserved
//
// Created by: Shanea Jaromay
// Created on: May 2025

// This file contains the JS functions for index.html


/**
* This function check the type of triangle
*/
// eslint-disable-next-line no-unused-vars
function checkTypeOfTriangle () {
 // input
const sideA = parseFloat(document.getElementById('side-a').value)
const sideB = parseFloat(document.getElementById('side-b').value)
const sideC = parseFloat(document.getElementById('side-c').value)


 // using the cosine law
const angleA =
  Math.acos((sideB ** 2 + sideC ** 2 - sideA ** 2) / (2 * sideB * sideC)) *
  (180 / Math.PI)
const angleB =
  Math.acos((sideC ** 2 + sideA ** 2 - sideB ** 2) / (2 * sideC * sideA)) *
  (180 / Math.PI)
const angleC =
  Math.acos((sideA ** 2 + sideB ** 2 - sideC ** 2) / (2 * sideA * sideB)) *
  (180 / Math.PI)


const sumOfAngles =
  Number(angleA.toFixed(2)) +
  Number(angleB.toFixed(2)) +
  Number(angleC.toFixed(2))


if (sumOfAngles === 180) {
   // process
  if (sideA === sideB && sideA === sideC && sideB === sideC) {
    // output
    document.getElementById('answer').innerHTML =
      'This is an Equilateral Triangle.'
  } else if (sideA === sideC || sideA === sideB || sideB === sideC) {
    // output
    document.getElementById('answer').innerHTML =
      'This is an Isosceles Triangle.'
  } else {
    // output
    document.getElementById('answer').innerHTML =
      'This is a Scalene Triangle.'
  }
} else {
  // output
  document.getElementById('answer').innerHTML = 'This is not a triangle.'

  }
}
