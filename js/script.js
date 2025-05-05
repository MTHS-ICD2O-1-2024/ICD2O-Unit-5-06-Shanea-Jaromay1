// Copyright (c) 2025 Ain Jeong All rights reserved
//
// Created by: Shanea Jaromay
// Created on: May 2025

// This file contains the JS functions for index.html

"use-strict"

/**
* This function calculate, doing multiplication
*/
// eslint-disable-next-line no-unused-vars
function calculateNumber () {
  //input 
  let counter = 0
  let answer = 0 
  const numberOne = parseFloat(document.getElementById('number-one').value)
  const numberTwo = parseFloat(document.getElementById('number-two').value)

  //process
  while (counter < numberTwo ) {
    counter = counter + 1
    answer = answer + numberOne 
  }

  // output
  document.getElementById('answer').innerHTML = 'Your answer is:' + answer + '.'
}
