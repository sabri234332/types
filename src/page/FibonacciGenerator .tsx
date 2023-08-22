import { useState } from 'react';

const FibonacciGenerator = () => {
    const [n, setN] = useState<number>(0);
    const [fibonacciSequence, setFibonacciSequence] = useState<number[]>([]);

    const generarFibonacci = (cantidad: number): number[] => {
        const fibonacci: number[] = [];

        for (let i = 0; i < cantidad; i++) {
            if (i <= 1) {
                fibonacci.push(i);
            } else {
                const nuevoNumero = fibonacci[i - 1] + fibonacci[i - 2];
                fibonacci.push(nuevoNumero);
            }
        }

        return fibonacci;
    };

    const handleGenerate = () => {
        const secuenciaGenerada = generarFibonacci(n);
        setFibonacciSequence(secuenciaGenerada);
    };

    return (
        <div>
            <h1>Generador de Secuencia de Fibonacci</h1>
            <label htmlFor="cantidad">Ingrese la cantidad de números:</label><br />
            <input type="number" id="cantidad" value={n} onChange={(e) => setN(parseInt(e.target.value))} />
            <br />
            <button onClick={handleGenerate}>Generar</button>
            
            {fibonacciSequence.length > 0 && (
                <div>
                    <h2>Secuencia de Fibonacci generada:</h2>
                    <ul>
                        {fibonacciSequence.map((numero, index) => (
                            <li key={index}>F({index}) = {numero}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default FibonacciGenerator;
