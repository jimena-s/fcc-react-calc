// import React from "react";
import "../stylesheets/Boton.css";

function Boton(props) {
  const esOperador = (valor) => {
    return isNaN(valor) && valor !== "." && valor !== "=";
  };

  if (esOperador(props.children)) {
    return (
      <div
        className='boton-contenedor operador'
        onClick={() => props.manejarClic(props.children)}
      >
        {props.children}
      </div>
    );
  } else {
    return (
      <div
        className='boton-contenedor'
        onClick={() => props.manejarClic(props.children)}
      >
        {props.children}
      </div>
    );
  }
}

// buscar documentación "props.children"
export default Boton;

/*
`` comillas invertidas en JS sirven para TEMPLATE LITERALS
básicamente permiten crear cadena de caracteres que puede contener cierto código de js para definir el resultado.
*/

/*
OTRA FORMA (1RA QUE USA EN EL CURSO DP CAMBIA):
return (
      <div
        className={`boton-contenedor ${ esOperador(props.children) ? 'operador' : '' }`.trimEnd()} onClick={() => props.manejarClic(props.children)}>
        {props.children}
      </div>      
    );
boton-contenedor es una clase FIJA, pero necesitamos saber si ESE botón lleva UNA CLASE ADICIONAL llamada OPERADOR. Esa clase operador la vamos a agregar solamente si el valor de CHILDREN (ese valor que está entre las etiquetas del componente en App.js <Boton></Boton>) representa un operador de suma, resta, mult o div.
PERMITE CREAR CLASES MÁS DINÁMICAS Y COMPLEJAS.
null = valor nulo en JS
ternario en la clase: 
si el resultado retornado por la función esOperador es TRUE, asignar la clase operador, de lo contrario no hacer nada (agregar cadena de texto vacía).
*/

/*
función esOPerador:
funcion flecha, si se cumplen las 3 condiciones para valor (NaN-no es un num, no es un . ni un =, entonces lo consideramos como un Operador y retornamos el valor verdadero (esOperador: true) )
*/

/*
MÉTODO TRIM .trim() permite remover espacios al principio o final de la cadena de caracteres.
*/

/* 
onClick={() => props.manejarClic(props.children)}
¿POR QUÉ NO SE ESCRIBE UNA LLAMADA EN LUGAR DE LA FUNCIÓN ANÓNIMA? (sin '() =>')
() => le dice a REACT QUE QUEREMOS QUE SE LLAME A UNA FUNCIÓN. NUESTRO OYENTE DE EVENTOS (event listener) CUANDO OCURRA UN CLIC ES UNA FUNCIÓN QUE VA A LLAMAR A OTRA FUNCIÓN, de otra manera retornaría solo un valor.

 */
