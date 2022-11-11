import { Card } from "../../../Interfaces/Interfaces";

import "./Card.css";

export const CardTecnologies = ({ name, description, image }: Card) => {
  return (
    <div className="card">
      <div className="tc">
        <img src={image} className="br-100 h3 w3 dib" title={name} alt={name} />
        <h1 className="f4">{name}</h1>
        <hr className="mw3 bb bw1 b--black-10" />
      </div>
      <p className="lh-copy measure center f6 black-70">{description}</p>
    </div>
  );
};
