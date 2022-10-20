import '../stylesheets/Pantalla.css';

const Pantalla = ({ input }) => (
  <div className='input'>
    {input}
  </div>
);

export default Pantalla;

/* importante! Primera vez que se crea un componente como una función flecha declarada en una constante + sintaxis de desestructuración.
input = valor ingresado por el USUARIO
constante > para que no se pueda reasignar otro valor */

// seguir 4:36:42 / 8:10:25