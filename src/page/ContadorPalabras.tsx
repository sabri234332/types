import { useState } from 'react';

const ContadorPalabras = () => {
    const [oracion, setOracion] = useState<string>('');
    const [cantidadPalabras, setCantidadPalabras] = useState<number | null>(null);

    const contarPalabras = (oracion: string): number => {
        const palabras = oracion.trim().split(/\s+/);
        return palabras.length;
    };

    const manejarClic = () => {
        const cantidad = contarPalabras(oracion);
        setCantidadPalabras(cantidad);
    };

    return (
        <div>
            <h1>Contador de Palabras</h1><br />
            <label>Ingresa una oración:</label> <br />
            <input type="text" value={oracion} onChange={(e) => setOracion(e.target.value)} />
            <br />
            <button onClick={manejarClic}>Contar Palabras</button>
            {cantidadPalabras !== null && <p>Cantidad de palabras: {cantidadPalabras}</p>}
        </div>
    );
};

export default ContadorPalabras;
