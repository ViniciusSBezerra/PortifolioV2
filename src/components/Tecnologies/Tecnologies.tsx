import { CardTecnologies } from "./Card-Tecnologies/Card-Tenologies";

import JavaScript from "../../assets/tecnologies/javascript.png";
import ReactJs from "../../assets/tecnologies/reactjs.png";
import Node from "../../assets/tecnologies/nodejs.png";
import TypeScript from "../../assets/tecnologies/typeScript.png";
import StyledComponents from "../../assets/tecnologies/styledComponents.png";
import GraphQl from "../../assets/tecnologies/graphql.png";

import "../../pages/container.css";
export const MyTecnologies = [
  {
    image: JavaScript,
    name: "Javascript",
    description:
      "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.",
  },
  {
    image: ReactJs,
    name: "ReactJs",
    description:
      "React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais.",
  },

  {
    image: Node,
    name: "NodeJs",
    description:
      "Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.",
  },

  {
    image: StyledComponents,
    name: "Styled-components",
    description:
      "Utilizando literais de modelo com tags (uma adição recente ao JavaScript) e o poder do CSS, styled-components permite que você escreva código CSS real para estilizar seus componentes",
  },

  {
    image: GraphQl,
    name: "GraphQl",
    description:
      "GraphQL é uma linguagem de consulta criada pelo Facebook em 2012 e lançada publicamente em 2015. É considerada uma alternativa para arquiteturas REST, além de oferecer um serviço runtime para rodar comandos e consumir uma API",
  },

  {
    image: TypeScript,
    name: "TypeScript",
    description:
      "TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.",
  },
];

export const Tecnologies = () => {
  return (
    <>
      <h1 style={{ "textAlign": "center"}}>Tecnologias</h1>
      <div className="container">
        {MyTecnologies.map(({ description, name, image }) => {
          return (
            <>
              <CardTecnologies
                image={image}
                name={name}
                description={description}
              />
            </>
          );
        })}
      </div>
    </>
  );
};
