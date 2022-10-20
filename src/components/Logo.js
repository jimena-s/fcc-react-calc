import "../stylesheets/Logo.css";

const Logo = (props) => (
  <div className="logo-contenedor">
    <img
      className="logo-imagen"
      src={require(`../imagenes/${props.logo}.png`)}
      alt={`Logo of ${props.company}`}
    />
  </div>
);

export default Logo;
