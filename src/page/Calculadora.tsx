import React, { useState } from 'react';

const Calculadora = () => {
    const [resultado, setResultado] = useState<string | number>('');

    const operar = (x: number, y: number, operacion: string): string | number => {
        switch (operacion) {
            case '+':
                return x + y;
            case '-':
                return x - y;
            case '*':
                return x * y;
            case '/':
                return x / y;
            default:
                return 'XD';
        }
    };

    const handleClick = (operacion: string) => {
        // Obtener los valores de los campos de entrada
        const primerNumero = parseFloat((document.getElementById("valoruno") as HTMLInputElement).value);
        const segundoNumero = parseFloat((document.getElementById("valordos") as HTMLInputElement).value);

        // Validar si los valores son números
        if (isNaN(primerNumero) || isNaN(segundoNumero)) {
            setResultado('Error: Ingrese números válidos');
            return;
        }

        const resultadoCalculado = operar(primerNumero, segundoNumero, operacion);
        setResultado(resultadoCalculado);
    };

    return (
        <>
        <h1>
            CALCULADORA 
        </h1>
            <label htmlFor="valoruno">Ingrese el primer número</label><br />
            <input type="text" id="valoruno" /><br />
            <label htmlFor="valordos">Ingrese el segundo número</label><br />
            <input type="text" id="valordos" /><br /><br />
            <button onClick={() => handleClick('+')}>Suma</button>
            <button onClick={() => handleClick('-')}>Resta</button>
            <button onClick={() => handleClick('*')}>Multiplicación</button>
            <button onClick={() => handleClick('/')}>División</button>
            <p>Resultado: {resultado}</p>
        </>
    );
};

export default Calculadora;
