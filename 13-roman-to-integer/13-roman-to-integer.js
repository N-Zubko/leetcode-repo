/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let integer = 0;
    let romanNumberString = s.split("");
    let I = 1;
    let V = 5;
    let L = 50;
    let C = 100;
    let D = 500;
    let M = 1000;
    romanNumberString.map((element, index) => {
            if (element === "I") {
                integer += 1;
            }
            if (element === "V" && romanNumberString[index-1] === "I") {
                integer += 3;
            }
            if (element === "V" && romanNumberString[index-1] !== "I") {
                integer += 5;
            }
            if (element === "X" && romanNumberString[index-1] === "I") {
                integer += 8;
            }
           if (element === "X" && romanNumberString[index-1] !== "I") {
                integer += 10;
            }
            if (element === "L" && romanNumberString[index-1] !== "X") {
                integer += 50;
            }
            if (element === "L" && romanNumberString[index-1] === "X") {
                integer += 30;
            }
            if (element === "C"  && romanNumberString[index-1] !== "X") {
                integer += 100;
            }
            if (element === "C"  && romanNumberString[index-1] === "X") {
                integer += 80;
            }
            if (element === "D" && romanNumberString[index-1] !== "C") {
                integer += 500;
            }
            if (element === "D" && romanNumberString[index-1] === "C") {
                integer += 300;
            }
            if (element === "M" && romanNumberString[index-1] !== "C") {
                integer += 1000;
            }
            if (element === "M" && romanNumberString[index-1] === "C") {
                integer += 800;
            }
        })
    return integer;
};