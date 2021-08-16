import React from 'react';
import './itemCount.css';

export const ItemCount = ({stock}) =>{

    const  [counter, setCounter] = React.useState(1);

    const handleIncrement = () =>{
        setCounter (counter + 1);
    }

    const handleDecrement = () =>{
        setCounter (counter - 1);
    }

    if (counter <= stock){
        return (
            <div className="ItemCount">
                <p>{counter}</p>
                <button onClick={handleIncrement}>+</button>
                <button onClick={handleDecrement}>-</button>
            </div>
        )
    } else if (counter > stock) {
        return(
            <div className="ItemCount">
                <p>No hay stock</p>
                <button onClick={handleIncrement}>+</button>
                <button onClick={handleDecrement}>-</button> 
            </div>
        )
    }
};