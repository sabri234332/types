import {useState} from 'react';

const Multiplicar = () => {


const  [numero, setNumero] = useState<number>(1);
const  [tabla, setTabla] = useState<number[]>([]);


const tablita = () =>{
    const newTabla:number[] = [];
    for (let i = 1; i <= 10; i++) {
        newTabla.push(numero*i)
        
    }
    setTabla(newTabla)
    console.log(tabla)

}

const manejarValor = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setNumero(parseInt(e.target.value))
}

     return (
         <div>
             <h1>TABLAS DE MULTIPLICAR</h1>
             <label htmlFor="nro">Ingrese un número para multiplicar</label><br />
             <input type="number" value={numero} onChange={manejarValor}/><br />
             <button onClick={tablita}>Multiplicar</button>

            {
                tabla.map((indice,valor) => (
                    <div>
                       {numero} * {valor + 1} = {indice}
                    </div>
                ))
            }

         </div>
    ); 
}

export default Multiplicar;
