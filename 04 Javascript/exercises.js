// Exercise 1


// Exercise 2 - PASS
function test() {
    var a = "3";
    var b = "8";

    var t = a;
    a = b;
    b = t;

    console.log("a is " + a);
    console.log("b is " + b);
}


// Exercise 3 - PASS
function lifeInWeeks(age) {
    var years = 90 - age;
    var months = years * 12;
    var weeks = years * 52;
    var days = years * 365;
    console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.")
}

// Exercise 4 - PASS
function bmiCalculatorSimple(weightKg, heightM) {
    return weightKg / Math.pow(heightM, 2)
}

// Exercise 5 - PASS
function bmiCalculator(weight, height) {
    var bmi = weight / Math.pow(height, 2);
    var interpretation = "Your BMI is " + bmi + ", so you ";

    if (bmi >= 18.5 && bmi <= 24.9) {
        interpretation += "have a normal weight."
    }
    else if (bmi > 24.9) {
        interpretation += "are overweight."
    }
    else {
        interpretation += "are underweight."
    }
 
    return interpretation;
}

// Exercise 6 - PASS
function isLeap(year) {

    if (year % 4 !== 0) {
        return 'Not leap year.';
    }

    if (year % 100 !== 0) {
        return 'Leap year.';
    }

    if (year % 400 === 0) {
        return 'Leap year.';
    }

    return 'Not leap year.';

}

// Exercise 7 - PASS
function whosPaying(names) {
    var n = Math.random() * names.length;
    n = Math.floor(n);
    var name = names[n]
    return name + " is going to buy lunch today!";
}

// Exercise 8 - PASS
function fibonacciGenerator(n) {
    if (n === 1) {
        return [0]
    }

    if (n === 2) {
        return [0, 1]
    }

    var output = [0, 1]
    while (output.length < n) {
        var one_back = output[output.length - 1]
        var two_back = output[output.length - 2]
        output.push(one_back + two_back)
    }

    return output
}
