import { directive } from '@babel/types';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'




export const CartWidget = () =>{

    return(
            <FontAwesomeIcon icon={faShoppingCart} />
    )
}