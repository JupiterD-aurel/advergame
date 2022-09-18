import "./button.css";

function Buttons() {
  return (
    <div className="container button-container">
      <a href="#about" className="btn pri">
        Voir plus
      </a>
      <a href="#contact" className="btn sec">
        Me contacter
      </a>
    </div>
  );
}

export default Buttons;
