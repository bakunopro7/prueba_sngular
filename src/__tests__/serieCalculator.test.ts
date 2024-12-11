import {SerieCalculator} from "../core/SerieCalculator";

describe('SerieCalculator Tests', () => {
    let calculator: SerieCalculator;

    beforeAll(() => {
        calculator = new SerieCalculator();
    });

    test('calculateTerm for n=1', () => {
        expect(calculator.calculateTerm(1)).toBe(2);
    });

    test('calculateTerm for n=2', () => {
        expect(calculator.calculateTerm(2)).toBe(7);
    });

    test('calculateTerm for n=3', () => {
        expect(calculator.calculateTerm(3)).toBe(15);
    });

    test('calculateTerm for n=4', () => {
        expect(calculator.calculateTerm(4)).toBe(30);
    });

    test('calculateTerm for n=5', () => {
        expect(calculator.calculateTerm(5)).toBe(53);
    });

    test('calculateTerm for n=6', () => {
        expect(calculator.calculateTerm(6)).toBe(79);
    });

    test('calculateTerm for n=7', () => {
        expect(calculator.calculateTerm(7)).toBe(118);
    });

    test('calculateTerm for n=8', () => {
        expect(calculator.calculateTerm(8)).toBe(165);
    });

    test('calculateTerm for n=9', () => {
        expect(calculator.calculateTerm(9)).toBe(233);
    });

    test('calculateTerm for n=10', () => {
        expect(calculator.calculateTerm(10)).toBe(324);
    });
});
