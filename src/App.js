import "./App.css";
import logoJimena from "./imagenes/jim-logo.png";
import Logo from "./components/Logo";
import Boton from "./components/Boton";
import Pantalla from "./components/Pantalla";
import BotonClear from "./components/BotonClear";
import { useState } from "react";
import { evaluate } from "mathjs";

/*
useState
creamos un ESTADO para la aplicación llamado INPUT, y tenemos una FUNCIÓN (setInput) para actualizar el estado de ese componente.
1° asignar input (1er parámetro) como el valor de la pantalla, para q cdo lo actualicemos se actualice su valor tb.
<Pantalla input={input}/>
en este caso coincide el nombre de la variable(estado) y del prop.
ver en componente Pantalla que el prop es input
*/
/*EVALUATE ES UN MÉTODO IMPORTADO o función? 
mathjs > librería de operaciones matemáticas p js y nodejs. se instala a través de npm install mathjs */

/*
if en calcularResultado:
si el input no es una cadena vacía, entonces realiza esta operación setInput.
!!! en programación existen valores TRUTHY Y FALSY
valores que POR SÍ SOLOS SON V O F. Las cadenas de caracteres vacías SON FALSAS y si no son vacías son VERDADERAS.
Si la cadena INPUT está vacía va a ser FALSA

*/

function App() {
  const [input, setInput] = useState("");

  const agregarInput = (val) => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if (input) {
      parseFloat(setInput(evaluate(input))).toFixed(5);
    } else {
      alert("Por favor ingrese valores para realizar cálculos.");
    }
  };

  return (
    <div className="App">
      <Logo logo="jim-logo" company="jimena-s" />

      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={() => setInput("")}>CLEAR</BotonClear>
        </div>
      </div>
    </div>
  );
}

/* lo que queremos con el botón clear es REINICIAR EL ESTADO DEL INPUT, VOLVER A LA CADENA VACÍA QUE ESTABA INICIALMENTE (useState(''))
PARA ESO SE DEFINE UNA FUNCIÓN */
export default App;

/*
RETOS:
1) Crear un componente para el logo.
2) Implementar correcciones, ejp: operadores se repiten
*/

// 5:26:44 / 8:10:25
