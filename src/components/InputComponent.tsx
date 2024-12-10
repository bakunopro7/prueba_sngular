import {useState} from 'react';

const InputComponent = ({}) => {

    const [n, setN] = useState('');

    const handleSubmit = () => {
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="n">
                    Ingrese el valor de n:
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="n"
                    type="number"
                    placeholder="Ingrese un número"
                    value={n}
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
            </div>
        </form>
    );
};

export default InputComponent;