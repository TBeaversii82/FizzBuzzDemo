﻿

document.getElementById("btnFizzBuzz").addEventListener("click", function () {

    let fizz = Number(document.getElementById("FizzBuzz1").value);
    let buzz = Number(document.getElementById("FizzBuzz2").value);

    let output = DoFizzBuzzFoundation(fizz, buzz);

    document.getElementById("FbOut").innerHTML = output;

});

function DoFizzBuzzFoundation(fizz, buzz) {
    let output = "";

    for (let loop = 1; loop <= 100; loop++) {
        let fizzRemainder = loop % fizz;
        let buzzRemainder = loop % buzz;

        //output += `loop value:v${loop} <br /> Fizz:${loop} % ${fizz} = ${fizzRemainder} <br /> Buzz: ${loop} % ${buzz} = ${buzzRemainder} <br /> `;

        if (fizzRemainder == 0 && buzzRemainder == 0) {
            output += "FIZZBUZZ ";
        }

        else if (fizzRemainder == 0) {
            output += "Fizz ";
        }
        else if (buzzRemainder == 0) {
            output += "Buzz ";
        }
        else {
            output += `${loop} `;
        }
    }

    return output;
}


