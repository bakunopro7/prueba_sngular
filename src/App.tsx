import InputComponent from "./components/InputComponent.tsx";
import {useState} from "react";
import CalculatorComponent from "./components/CalculatorComponent.tsx";
import {Toaster, toast} from "sonner";

function App() {
    const [n, setN] = useState(0); // initial state

    /**
     * Handles the submission of a value by updating the state.
     *
     * @param {number} value - The value to be set in the state.
     * This function is used to update the state with the given numerical value.
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
