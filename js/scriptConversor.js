
function calculeLenght() {
  var input = parseFloat(document.getElementById("input").value, 100);
  var output = document.getElementById("output");
  var inputStateFirst = document.getElementById("inputStateFirst").selectedIndex;
  var inputStateSecond = document.getElementById("inputStateSecond").selectedIndex;

  var conversionFactor = 10 ** (inputStateFirst - inputStateSecond);
  var result = input * conversionFactor;
  output.value = result.toPrecision(3);
}

function calculeArea() {
  var input = parseFloat(document.getElementById("input").value);
  var output = document.getElementById("output");
  var inputStateFirst = document.getElementById("inputStateFirst").selectedIndex;
  var inputStateSecond = document.getElementById("inputStateSecond").selectedIndex;

  var conversionFactor = 100 ** (inputStateFirst - inputStateSecond);
  var result = input * conversionFactor;
  output.value = result.toPrecision(3);
}

function calculeVolume() {
  var input = parseFloat(document.getElementById("input").value);
  var output = document.getElementById("output");
  var inputStateFirst = document.getElementById("inputStateFirst").selectedIndex;
  var inputStateSecond = document.getElementById("inputStateSecond").selectedIndex;

  var conversionFactor = 1000 ** (inputStateFirst - inputStateSecond);
  var result = input * conversionFactor;
  output.value = result.toPrecision(3);
}

function calculeTime() {
  var input = parseFloat(document.getElementById("input").value);
  var output = document.getElementById("output");
  var inputStateFirst = parseFloat(document.getElementById("inputStateFirst").selectedIndex);
  var inputStateSecond = document.getElementById("inputStateSecond").selectedIndex;

  var conversionFactor = [1000, 60, 60, 24, 365/12, 12, 10, 10];


  var result = input;

  if ((inputStateSecond - inputStateFirst) > 0) {
    var i = inputStateFirst;
    for (i; i < inputStateSecond; i++) {
      var result = result / conversionFactor[i];
    }
    output.value = result.toPrecision(5);
  } else if ((inputStateSecond - inputStateFirst) < 0) {
    var i = inputStateFirst - 1;
    for (i; i >= inputStateSecond ; i--) {
      var result = result * conversionFactor[i];
    }
    output.value = result.toPrecision(5);
  } else {
    output.value = input;
  }

}

function calculeData() {
  var input = parseFloat(document.getElementById("input").value);
  var output = document.getElementById("output");
  var inputStateFirst = document.getElementById("inputStateFirst").selectedIndex;
  var inputStateSecond = document.getElementById("inputStateSecond").selectedIndex;

  if (inputStateFirst == 0 && inputStateSecond == 0) {
    output.value = input;
  } else if (inputStateFirst == 0) {
    var conversionFactor = 1024 ** (inputStateSecond - 1) * 1/8;
    var result = input * conversionFactor;
    output.value = result.toPrecision(3);
  } else if (inputStateSecond == 0) {
    var conversionFactor = 1024 ** (inputStateFirst - 1) * 8;
    var result = input * conversionFactor;
    output.value = result.toPrecision(3);
  } else {
    var conversionFactor = 1024 ** (inputStateFirst - inputStateSecond);
    var result = input * conversionFactor;
    output.value = result.toPrecision(3);
  }
}

function calculeTemperature() {
  var input = parseFloat(document.getElementById("input").value);
  var output = document.getElementById("output");
  var inputStateFirst = document.getElementById("inputStateFirst").selectedIndex;
  var inputStateSecond = document.getElementById("inputStateSecond").selectedIndex;

  if (inputStateFirst == 0) {
    if(inputStateSecond == 0) {
      output.value = input;
    } else if (inputStateSecond == 1) {
      var result = input - 273.15
      output.value = result.toPrecision(5);
    } else {
      var result = 9/5 * (input - 273.15) + 32
      output.value = result.toPrecision(5);
    }
  } else if (inputStateFirst == 1) {
    if (inputStateSecond == 0) {
      var result = input + 273.15
      output.value = result.toPrecision(5);
    } else if (inputStateSecond == 1) {
      output.value = input;
    } else {
      var result = 9/5 * input + 32
      output.value = result.toPrecision(5);
    }
  } else {
    if (inputStateSecond == 0) {
      var result = 5/9 * (input - 32) + 273.15
      output.value = result.toPrecision(5);
    } else if (inputStateSecond == 1) {
      var result = 5/9 * (input - 32)
      output.value = result.toPrecision(5);
    } else {
      output.value = input;
    }
  }
}

function change() {
  var inputStateFirst = document.getElementById('inputStateFirst');
  var inputStateSecond = document.getElementById('inputStateSecond');
  var pivot = inputStateFirst.selectedIndex;

  inputStateFirst.selectedIndex = inputStateSecond.selectedIndex;
  inputStateSecond.selectedIndex = pivot;

  document.getElementById('calcule').onclick();
}