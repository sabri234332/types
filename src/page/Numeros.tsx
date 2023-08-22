import React from 'react'


const Numeros = () => {

    // const {par, setPar} = useState<number[]>([])
    // const {impar, setImpar} = useState<number[]>([])

const array: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];

const par: number[] = [];
const impar: number[] = []
    for (let i = 0; i < array.length; i++) {
        if (array[i]%2 === 0) {
          par.push(array[i])
        }
        else {
            impar.push(array[i])
        }   
    }
    console.log(par)
    console.log(impar)
    

  return (

    <div>
        <h1>NÚMEROS PARES E IMPARES</h1>
        <h3>Array: {array + ""} </h3>
        <p>Los números pares son: {par + ""}</p>
        <p>Los números impares son: {impar + ""}</p>
    </div>

   
  )
}

export default Numeros