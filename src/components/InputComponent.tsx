import React, {memo, useState} from 'react';

type InputComponentProps = {
    onSubmit: (n: number) => void;
    onReset: () => void;

};

const InputComponent: React.FC<InputComponentProps> = memo(({onSubmit, onReset}: InputComponentProps) => {
    // useState hook para manejar el input
    const [n, setN] = useState<string>('');


    /**
     * Manage send value to form.
     * @param {React.FormEvent} e - Evento del formulario
     */
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent value predetermined
        if (n.trim() !== '') { // check in value not null
            onSubmit(parseInt(n));

        }
    };

    /**
     * Reset value to input form.
     * @param {React.MouseEvent} e - Evento del botón
     */
    const resetForm = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent value predetermined
        setN(''); // clean input
        onReset();
    };

    return (
        <form
            id="form"
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md"
        >
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="n">
                    Ingrese el valor de n:
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="n"
                    type="number"
                    placeholder="Ingrese un número"
                    value={n} // Vincula el input al estado
                    onChange={(e) => setN(e.target.value)}
                />
            </div>
            <div className="flex items-center justify-between">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Calcular
                </button>
                <button
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline"
                    type="button" // Evita el envío del formulario
                    onClick={resetForm} // Llama a resetForm
                >
                    Reset
                </button>
            </div>
        </form>
    );
});

export default InputComponent;
