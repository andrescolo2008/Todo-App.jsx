
import { Hijo } from './Hijo'
import { useCallback, useState } from 'react';

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    const PadreIncrementar = useCallback( ( num ) => {
        setValor((valor)=> valor + num )
    },[]
    )
//  si se colo ca [setValor] o [2,4,6,8,10] va hacer que solose muestre en  total el número al que se le hace click  y  no suma 
    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ PadreIncrementar }
                    />
                ))
            }
            { <Hijo />}
        </div>
    )
}
