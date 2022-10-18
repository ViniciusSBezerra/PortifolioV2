import { Card } from "../../../Interfaces/Interfaces";
export const CardTecnologies = ({name, description, image }: Card) => {
  return (
    <>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
    </>
  );
};
