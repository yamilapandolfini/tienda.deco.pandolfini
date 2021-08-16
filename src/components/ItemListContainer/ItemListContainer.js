import React from 'react';
import myFunc from './funcion';


export const ItemListContainer = (props) =>{

    return (
        <button onClick={myFunc}>{props.greeting}</button>
    )
}