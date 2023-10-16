const calculator = require('../src/service/calculator.js');


describe('add', () => {
    test('adds two positive numbers correctly', () => {
        expect(calculator.add(2, 3)).toBe(5);
    });

    test('adds a positive and a negative number correctly', () => {
        expect(calculator.add(5, -3)).toBe(2);
    });

    test('adds two negative numbers correctly', () => {
        expect(calculator.add(-7, -3)).toBe(-10);
    });
    test('adds a poisitive numbers and whole number correctly', () => {
        expect(calculator.add(5, 0)).toBe(5);
    });
    test('adds two float number correctly', () => {
        expect(calculator.add(2.25625, 523.2365222)).toBe(525.4927722);
    });
});

describe('divide', () => {
    test('divides two positive numbers correctly', () => {
        expect(calculator.divide(10, 2)).toBe(5);
    });

    test('divides a positive number by zero, expecting Infinity', () => {
        expect(calculator.divide(5, 0)).toBe(Infinity);
    });

    test('divides a positive number by a negative number correctly', () => {
        expect(calculator.divide(10, -2)).toBe(-5);
    });
    test('divides a negative number by a negative number correctly', () => {
        expect(calculator.divide(-5, -2)).toBe(2.5);
    });
    test('divides a positive number to get float result correctly', () => {
        expect(calculator.divide(5, 3)).toBe(1.6666666666666667);
    });
    test('divides a float number correctly', () => {
        expect(calculator.divide(1.5, 0.5)).toBe(3);
    });
});
