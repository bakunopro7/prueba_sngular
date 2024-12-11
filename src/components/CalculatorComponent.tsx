import {SerieCalculator} from "../core/SerieCalculator.ts";
import React from "react";

type CalculatorComponentProps = {
    n: number;
}
const CalculatorComponent: React.FC<CalculatorComponentProps> = ({n}: CalculatorComponentProps) => {
    const calculator = new SerieCalculator();
    const result = calculator.calculateTerm(n);

    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-lg font-bold mb-4">Resultado del cálculo</h2>
            <img className="mb-4" src="/ecuacion.png" alt=""/>
            <p className="text-center uppercase">El término {n} de la serie es: {result}</p>
        </div>
    );
};

export default CalculatorComponent;