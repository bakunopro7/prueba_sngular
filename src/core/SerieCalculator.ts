export class SerieCalculator {

    /**
     * Calculates the nth triangular number, which is the sum of the first n natural numbers.
     *
     * @param {number} n - The position of the triangular number to calculate. Must be a non-negative integer.
     * @return {number} The nth triangular number.
     */
    triangular(n: number): number {
        // Implement tringular number
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
        return n > 1;
    }

    /**
     * Computes the nth Fibonacci number iteratively.
     *
     * @param {number} n - The index (0-based) of the Fibonacci sequence to compute.
     * @return {number} The nth Fibonacci number.
     */
    fibonacci(n: number): number {
        if (n <= 1) return n; // Caso base
        let prev1 = 0, prev2 = 1;
        for (let i = 2; i <= n; i++) {
            const temp = prev1 + prev2;
            prev1 = prev2;
            prev2 = temp;
        }
        return prev2;
    }

    /**
     * Calculates a term based on triangular, prime, and Fibonacci number computations.
     *
     * @param {number} n - The input number used to calculate the term.
     * @return {number} The computed term based on the provided number.
     */
    calculateTerm(n: number): number {
        return 4 * this.triangular(n - 1) - 2 * (this.primo(n - 1) ? 1 : 0) + this.fibonacci(n + 2);
    }
}