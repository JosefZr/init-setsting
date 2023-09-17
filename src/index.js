//index.js

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1); // Fix the slice index to 1
}

function reverseString(str) {
    return str.split("").reverse().join(""); // This function correctly reverses the string
}

const calculator= {
    add:(a,b) => a + b,
    subtract: (a , b ) => a - b,
    multupliying:(a , b) => a * b,
    devide : (a , b) => a / b,
}
function ceasarCipher(str, shf) {
    const transformedChars = [];

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const code = str.charCodeAt(i);

        if (char.match(/[A-Z]/i)) {
            let transformedCode;

            if (code >= 65 && code <= 90) {
                transformedCode = ((code - 65 + shf) % 26) + 65;
            } else if (code >= 97 && code <= 122) {
                transformedCode = ((code - 97 + shf) % 26) + 97;
            }

            transformedChars.push(String.fromCharCode(transformedCode));
        } else {
            transformedChars.push(char);
        }
    }

    return transformedChars.join('');
}
function analyzeArray(array) {
    if (array.length === 0) {
        return {
            sum: 0,
            average: NaN,
            min: Infinity,
            max: -Infinity,
            length: 0,
        };
    }

    const sum = array.reduce((acc, val) => acc + val, 0);
    const average = sum / array.length; // Ensure average is a floating-point number
    const min = Math.min(...array);
    const max = Math.max(...array);
    const length = array.length;
    return { sum, average, min, max, length };
}

module.exports = { capitalize, reverseString,analyzeArray, calculator, ceasarCipher };
