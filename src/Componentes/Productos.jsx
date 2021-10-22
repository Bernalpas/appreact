import React, { useEffect, useState } from 'react';
import "../style.css"


export function Productos() {

    /* Ejemplo de arrays / vectores */
    /* let colores = ["rojo", "verde", "azul", "amarillo", "rosa", "naranja", "morado"]; */

    const[data, setData] = useState([]);
    const[loading, setLoading] = useState([]);


    useEffect(() =>{
    fetch('https://api.mercadolibre.com/items/MLA841413632')
    .then(response => {
        return response.json();
    })
    .then(res =>{
        setData(res);
        setLoading(false);
    })
    }, []);

   /*  useEffect(() =>{
        console.log(data);
    }, [data]);  */

    if(loading){
        return <div>Leyendo....</div>
    }
        
    return(
        <div className="producto">
            <hr></hr>
            <h1>Productos de React</h1>
            <hr></hr>
            <h2>{data.title}</h2>
            <img src={data.secure_thumbnail} alt="Imagen del Producto" style={{width:"300px"}}></img>
            <p>Precio: ${data.price}</p>
            <h3>{data.warranty}</h3>
            <a target="...blank" href={data.permalink}>Comprar Ahora</a>
            <hr></hr>
        </div>
    );
    
}



