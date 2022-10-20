import '../stylesheets/BotonClear.css';

const BotonClear = (props) => (
  <div
  className='boton-clear'
  onClick={props.manejarClear}>
    {props.children}
  </div>
);
/* lo que queremos con el botón clear es REINICIAR EL ESTADO DEL INPUT, VOLVER A LA CADENA VACÍA QUE ESTABA INICIALMENTE (useState(''))
PARA ESO SE DEFINE UNA FUNCIÓN > manejarClear en app.js
y acá se agrega el event listener para que se ejecute esa función al hacer clic */
export default BotonClear;