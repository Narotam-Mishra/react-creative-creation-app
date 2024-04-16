/* eslint-disable react/prop-types */
import "../styles/cardcom.css"

const CardCom = (props) => {
  return (
    <div className="container" style={{ backgroundColor: props.dataFromChild.color }}>
      <h2 className="titletext">{props.dataFromChild.title}</h2>
      <h3 className="subtitletext">{props.dataFromChild.subtitle}</h3>
    </div>
  );
};

export default CardCom