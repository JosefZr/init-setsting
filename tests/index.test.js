// index.test.js

const { default: test } = require("node:test")
import { capitalize, reverseString, calculator, ceasarCipher, analyzeArray } from "../src/index";

describe("capitalize", () => {
    it('capitalizes the first character of a string', () => {
        expect(capitalize("hello world")).toBe("Hello world");
    });

    it("capitalizes a single character", () => {
        expect(capitalize("a")).toBe("A");
    });

    it("does not modify already capitalized string", () => {
        expect(capitalize("Hello")).toBe("Hello");
    });
});

describe("reverseString", () => {
    it('reverses a common string', () => {
        expect(reverseString("hello")).toBe("olleh");
    });

    it("capitalizes a single character", () => {
        expect(reverseString("a")).toBe("a");
    });

    it("words with empty strings", () => {
        expect(reverseString("")).toBe("");
    });

    it("reverse correctly a string with ponctuation", () => {
        expect(reverseString("hello!")).toBe("!olleh");
    });
});

describe("calculator", () => {
    it('test adding', () => {
        expect(calculator.add(2,3)).toBe(5);
    });

    it("test subtraction", () => {
        expect(calculator.subtract(5,3)).toBe(2);
    });

    it("test multupliying", () => {
        expect(calculator.multupliying(2,3)).toBe(6);
    });

    it("test deviding", () => {
        expect(calculator.devide(6,3)).toBe(2);
    });
});

describe("ceasarCipher", () => {
    it('shift each caracters by the shift factor', () => {
        expect(ceasarCipher('hello world',3)).toBe('khoor zruog');
    });

    it("wraps from z to a", () => {
        expect(ceasarCipher('z',1)).toBe('a');
    });

    it("keeps the same case ", () => {
        expect(ceasarCipher('hello world',3)).toBe("khoor zruog");
    });

    it("keeps the ponctuations ", () => {
        expect(ceasarCipher('hello world!',3)).toBe("khoor zruog!");
    });
});

describe("analyzeArray", () => {
    it('return an empty object for empty array', () => {
        expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
            sum: 24,
            average: 4.0,
            max: 8,
            min: 1,
            length: 6
        });
    });

    it("calculate average, min, max, length of array", () => {
        expect(analyzeArray([-1, 0, 1])).toEqual({
            sum: 0,
            average: 0,
            min: -1,
            max: 1,
            length: 3
        });
    });

    it("calculate average, min, max, length of empty array", () => {
        expect(analyzeArray([])).toEqual({
            sum: 0,
            average: NaN,
            min: Infinity,
            max: -Infinity,
            length: 0
        });
    });
});

