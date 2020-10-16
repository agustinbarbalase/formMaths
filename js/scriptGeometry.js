
// Circle

function calculeAreaCircle () {
    var radius = document.getElementById('inputFirst').value;
    var output = document.getElementById('outputFirst');
    var inputStateFirst = document.getElementById('inputStateFirst').selectedIndex;
    var inputStateSecond = document.getElementById('inputStateSecond').selectedIndex;

    var conversionFactor = 100 ** (inputStateFirst - inputStateSecond);
    var result = (radius ** 2 * Math.PI) * conversionFactor;
    output.value = result.toPrecision(5);
}

function calculePerimeterCircle() {
    var radius = document.getElementById('inputSecond').value;
    var output = document.getElementById('outputSecond');
    var inputStateThird = document.getElementById('inputStateThird').selectedIndex;
    var inputStateFourth = document.getElementById('inputStateFourth').selectedIndex;

    var conversionFactor = 10 ** (inputStateThird - inputStateFourth);
    var result = (2 * Math.PI * radius) * conversionFactor;
    output.value = result.toPrecision(5); 
}

// Squard

function calculeAreaSquard() {
    var side = document.getElementById('inputFirst').value;
    var output = document.getElementById('outputFirst');
    var inputStateFirst = document.getElementById('inputStateFirst').selectedIndex;
    var inputStateSecond = document.getElementById('inputStateSecond').selectedIndex;

    var conversionFactor = 100 ** (inputStateFirst - inputStateSecond);
    var result = (side ** 2) * conversionFactor;
    output.value = result.toPrecision(5);
}

function calculePerimeterSquard() {
    var side = document.getElementById('inputSecond').value;
    var output = document.getElementById('outputSecond');
    var inputStateThird = document.getElementById('inputStateThird').selectedIndex;
    var inputStateFourth = document.getElementById('inputStateFourth').selectedIndex;
    
    var conversionFactor = 10 ** (inputStateThird - inputStateFourth);
    var result = (4 * side) * conversionFactor;
    output.value = result.toPrecision(5);
}

// Rectangle

function calculeAreaRectangle() {
    var base = document.getElementById('inputFirst').value;
    var height = document.getElementById('inputSecond').value;
    var inputStateFirst = document.getElementById('inputStateFirst').selectedIndex;
    var inputStateSecond = document.getElementById('inputStateSecond').selectedIndex;
    var inputStateThird = document.getElementById('inputStateThird').selectedIndex;
    var output = document.getElementById('outputFirst');

    var conversionFactorOne = 10 ** (inputStateFirst - inputStateSecond);
    var conversionFactorTwo = 100 ** (inputStateSecond - inputStateThird);

    var base = base * conversionFactorOne;
    var result = (base * height) * conversionFactorTwo;
    output.value = result.toPrecision(5);
}

function calculePerimeterRectangle() {
    var base = document.getElementById('inputThird').value;
    var height = document.getElementById('inputFourth').value;
    var inputStateFourth = document.getElementById('inputStateFourth').selectedIndex;
    var inputStateFifth = document.getElementById('inputStateFifth').selectedIndex;
    var inputStateSixth = document.getElementById('inputStateSixth').selectedIndex;
    var output = document.getElementById('outputSecond');

    var conversionFactorOne = 10 ** (inputStateFourth - inputStateFifth);
    var conversionFactorTwo = 10 ** (inputStateFifth - inputStateSixth);

    var base = base * conversionFactorOne;
    var result = (2 * base + 2 * height) * conversionFactorTwo;
    output.value = result.toPrecision(5);
}

// Triangle

function calculeAreaTriangle() {
    var base = document.getElementById('inputFirst').value;
    var height = document.getElementById('inputSecond').value;
    var inputStateFirst = document.getElementById('inputStateFirst').selectedIndex;
    var inputStateSecond = document.getElementById('inputStateSecond').selectedIndex;
    var inputStateThird = document.getElementById('inputStateThird').selectedIndex;
    var output = document.getElementById('outputFirst');

    var conversionFactorOne = 10 ** (inputStateFirst - inputStateSecond);
    var conversionFactorTwo = 100 ** (inputStateSecond - inputStateThird);

    var base = base * conversionFactorOne;
    var result = ((base * height)/2) * conversionFactorTwo;
    output.value = result.toPrecision(5);
}

function calculePerimeterTriangle() {
    var a = document.getElementById('inputThird').value;
    var b = document.getElementById('inputFourth').value;
    var c = document.getElementById('inputFifth').value;
    var inputStateFourth = document.getElementById('inputStateFourth').selectedIndex;
    var inputStateFifth = document.getElementById('inputStateFifth').selectedIndex;
    var inputStateSixth = document.getElementById('inputStateSixth').selectedIndex;
    var inputStateSeventh = document.getElementById('inputStateSeventh').selectedIndex;
    var output = document.getElementById('outputSecond');

    var conversionFactorOne = 10 ** (inputStateFourth - inputStateSixth);
    var conversionFactorTwo = 10 ** (inputStateFifth - inputStateSixth);
    var conversionFactorThird = 10 ** (inputStateSixth - inputStateSeventh);

    var a = a * conversionFactorOne;
    var b = b * conversionFactorTwo;
    var result = (a + b + parseFloat(c)) * conversionFactorThird;
    output.value = result.toPrecision(5);
}

// Polygon

function calculeAreaPolygon() {
    var n = document.getElementById('inputFirst').value;
    var a = document.getElementById('inputSecond').value;
    var apothem = document.getElementById('inputThird').value;
    var inputStateFirst = document.getElementById('inputStateFirst').selectedIndex;
    var inputStateSecond = document.getElementById('inputStateSecond').selectedIndex;
    var inputStateThird = document.getElementById('inputStateThird').selectedIndex;
    var output = document.getElementById('outputFirst');

    var conversionFactorOne = 10 ** (inputStateFirst - inputStateSecond);
    var conversionFactorTwo = 100 ** (inputStateSecond - inputStateThird);

    var a = a * conversionFactorOne;
    var result = ((n * a) * (apothem))/2 * conversionFactorTwo;
    output.value = result.toPrecision(5);
}

function calculePerimeterPolygon() {
    var n = document.getElementById('inputFourth').value;
    var a = document.getElementById('inputFifth').value;
    var inputStateFourth = document.getElementById('inputStateFourth').selectedIndex;
    var inputStateFifth = document.getElementById('inputStateFifth').selectedIndex;
    var output = document.getElementById('outputSecond');
    
    var conversionFactor = 10 ** (inputStateFourth - inputStateFifth);

    var result = (n * a) * conversionFactor;
    output.value = result.toPrecision(5);
}

// Parallelogram 

function calculeAreaParallelogram() {
    var base = document.getElementById('inputFirst').value;
    var height = document.getElementById('inputSecond').value;
    var inputStateFirst = document.getElementById('inputStateFirst').selectedIndex;
    var inputStateSecond = document.getElementById('inputStateSecond').selectedIndex;
    var inputStateThird = document.getElementById('inputStateThird').selectedIndex;
    var output = document.getElementById('outputFirst');

    var conversionFactorOne = 10 ** (inputStateFirst - inputStateSecond);
    var conversionFactorTwo = 100 ** (inputStateSecond - inputStateThird);

    var base = base * conversionFactorOne;
    var result = (base * height) * conversionFactorTwo;
    output.value = result.toPrecision(5);
}

function calculePerimeterParallelogram() {
    var a = document.getElementById('inputThird').value;
    var b = document.getElementById('inputFourth').value;
    var inputStateFourth = document.getElementById('inputStateFourth').selectedIndex;
    var inputStateFifth = document.getElementById('inputStateFifth').selectedIndex;
    var inputStateSixth = document.getElementById('inputStateSixth').selectedIndex;
    var output = document.getElementById('outputSecond');

    var conversionFactorOne = 10 ** (inputStateFourth - inputStateFifth);
    var conversionFactorTwo = 10 ** (inputStateFifth - inputStateSixth);

    var a = a * conversionFactorOne;
    var result = (2 * a + 2 * b) * conversionFactorTwo;
    output.value = result.toPrecision(5);
}

// Rhombus 

function calculeAreaRhombus() { 
    var firstDiagonal = document.getElementById('inputFirst').value;
    var secondDiagonal = document.getElementById('inputSecond').value;
    var inputStateFirst = document.getElementById('inputStateFirst').selectedIndex;
    var inputStateSecond = document.getElementById('inputStateSecond').selectedIndex;
    var inputStateThird = document.getElementById('inputStateThird').selectedIndex;
    var output = document.getElementById('outputFirst');

    var conversionFactorOne = 10 ** (inputStateFirst - inputStateSecond);
    var conversionFactorTwo = 100 ** (inputStateSecond - inputStateThird);

    var firstDiagonal = firstDiagonal * conversionFactorOne;
    var result = ((firstDiagonal * secondDiagonal)/2) * conversionFactorTwo;
    output.value = result.toPrecision(5);
}

function calculePerimeterRhombus() {
    var a = document.getElementById('inputThird').value;
    var inputStateFourth = document.getElementById('inputStateFourth').selectedIndex;
    var inputStateFifth = document.getElementById('inputStateFifth').selectedIndex;
    var output = document.getElementById('outputSecond');

    var conversionFactor = 10 ** (inputStateFourth - inputStateFifth);
    var result = (4 * a) * conversionFactor;
    output.value = result.toPrecision(5);
}

// Trapezium

function calculeAreaTrapezium() {
    var a = document.getElementById('inputFirst').value;
    var b = document.getElementById('inputSecond').value;
    var h = document.getElementById('inputThird').value;
    var inputStateFirst = document.getElementById('inputStateFirst').selectedIndex;
    var inputStateSecond = document.getElementById('inputStateSecond').selectedIndex;
    var inputStateThird = document.getElementById('inputStateThird').selectedIndex;
    var inputStateFourth = document.getElementById('inputStateFourth').selectedIndex;
    var output = document.getElementById('outputFirst');

    var conversionFactorOne = 10 ** (inputStateFirst - inputStateThird);
    var conversionFactorTwo = 10 ** (inputStateSecond - inputStateThird);
    var conversionFactorThird = 100 ** (inputStateThird - inputStateFourth);

    var a = a * conversionFactorOne;
    var b = b * conversionFactorTwo;
    var result = (((a + b) / 2) * h) * conversionFactorThird;
    output.value = result.toPrecision(5);
}

function calculePerimeterTrapezium() {
    var a = document.getElementById('inputFourth').value;
    var b = document.getElementById('inputFifth').value;
    var c = document.getElementById('inputSixth').value;
    var d = document.getElementById('inputSeventh').value;
    var inputStateFifth = document.getElementById('inputStateFifth').selectedIndex;
    var inputStateSixth = document.getElementById('inputStateSixth').selectedIndex;
    var inputStateSeventh = document.getElementById('inputStateSeventh').selectedIndex;
    var inputStateEighth = document.getElementById('inputStateEighth').selectedIndex;
    var inputStateNinth = document.getElementById('inputStateNinth').selectedIndex;
    var output = document.getElementById('outputSecond');

    var conversionFactorOne = 10 ** (inputStateFifth - inputStateEighth);
    var conversionFactorTwo = 10 ** (inputStateSixth - inputStateEighth);
    var conversionFactorThird = 10 ** (inputStateSeventh - inputStateEighth);
    var conversionFactorFourth = 10 ** (inputStateEighth - inputStateNinth);

    var a = a * conversionFactorOne;
    var b = b * conversionFactorTwo;
    var c = c * conversionFactorThird;
    var result = (a + b + c + parseFloat(d)) * conversionFactorFourth;
    output.value = result.toPrecision(5);
}