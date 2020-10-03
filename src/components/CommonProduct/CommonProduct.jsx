import React, { useState } from 'react';
// import logo from '../../img'

function CommonProduct(props) {
    const [ contador, setContador ] = useState(0)

    const clickHandler = ()=> setContador(contador + 1)

    const counter = props.counter ? (
        <>
            <button onClick={clickHandler}>Soy un contador</button>
            <p>{contador}</p>
        </>
    ) : null;

    return (
        <div>
            <div>
                <img src={`../../img/${props.img.src}`} alt={props.img.alt}/>
            </div>
            <div>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                {counter}
            </div>
        </div>
    )
}

export default CommonProduct;