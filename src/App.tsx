import InputComponent from "./components/InputComponent.tsx";
import {useState} from "react";
import CalculatorComponent from "./components/CalculatorComponent.tsx";
import {Toaster, toast} from "sonner";

function App() {
    const [n, setN] = useState(0); // initial state

    /**
     * Handles the submission of a numeric value by performing validation and updating the state.
     *
     * The function checks if the provided value is non-negative. If the value is valid
     * (i.e., zero or greater), it updates the state using the `setN` function. If the value
     * is invalid (i.e., less than zero), an error message is displayed using a toast notification.
     *
     * @param {number} value - The numeric value to be validated and processed.
     */
    const handleSubmit = (value: number) => {
        if (value >= 0) {
            setN(value);
        } else {
            toast.error('Value must be positive.');
        }
    };

    /**
     * handleReset is a function that resets the state variable 'n' to 0.
     * It is typically used to reinitialize or clear a numeric state back to its default value.
     */
    const handleReset = () => {
        setN(0); // Resetea el estado 'n' a 0
    };

    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="w-full max-w-md">
                    <Toaster position="top-right"/>
                    <InputComponent onSubmit={handleSubmit} onReset={handleReset}/>
                    <CalculatorComponent n={n}/>
                </div>
            </div>
        </>
    )
}

export default App
