export class SerieCalculator {

    /**
     * Calculates the nth triangular number, which is the sum of the first n natural numbers.
     *
     * @param {number} n - The position of the triangular number to calculate. Must be a non-negative integer.
     * @return {number} The nth triangular number.
     */

    triangular(n: number): number {
        // Implementación de la función triangular
        return (n * (n + 1)) / 2;
    }

    /**
     * Checks if a given number is a prime number.
     *
     * @param {number} n - The number to check for primality.
     * @return {boolean} Returns true if the number is prime, false otherwise.
     */
    primo(n: number): boolean {
        // Implementación de la función primo
        if (n <= 1) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    /**
     * Calculates the Fibonacci number at the given position using recursion.
     *
     * @param {number} n - The position in the Fibonacci sequence (zero-based index).
     *                      Must be a non-negative integer.
     * @return {number} The Fibonacci number at the given position.
     */
    fibonacci(n: number): number {
        if (n <= 0) return 0; // Caso base
        if (n === 1) return 1; // Caso base detach the value of condition
        return this.fibonacci(n - 1) + this.fibonacci(n - 2); // Llamada recursiva
    }


    /**
     * Calculates a term using a specific formula involving triangular, prime, and Fibonacci sequence calculations.
     *
     * @param {number} n - The input number used to calculate the term. It must be a positive integer greater than 0.
     * @return {number} The result of the calculation based on the provided formula.
     */
    calculateTerm(n: number): number {
        return 4 * this.triangular(n - 1) - 2 * (this.primo(n - 1) ? 1 : 0) + this.fibonacci(n + 2);
    }
}