import React, { useState } from 'react';

const Temperatura = () => {
    const [numero, setNumero] = useState<number | undefined>();
    const [resultado, setResultado] = useState<number | undefined>();

    const manejarValor = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumero(parseInt(e.target.value));
    };

    const celsiusAFahrenheit = () => {
        if (numero !== undefined) {
            const convertido = numero * 1.8 + 32;
            setResultado(convertido);
        }
    };

    const fahrenheitACelsius = () => {
        if (numero !== undefined) {
            const convertido = (numero - 32) / 1.8;
            setResultado(convertido);
        }
    };

    return (
        <div>
            <h1>CONVERTIDOR GRADOS CELSIUS / FAHRENHEIT</h1>
            <label htmlFor="">Ingrese un número</label><br />
            <input type="number" value={numero} onChange={manejarValor} /><br /><br />
            <button onClick={celsiusAFahrenheit}>Convertir a Fahrenheit</button>
            <button onClick={fahrenheitACelsius}>Convertir a Celsius</button>
            <p>Resultado: {resultado}</p>
        </div>
    );
};

export default Temperatura;

