import AboutMePhoto from "../../assets/my-photo/eu.jpg";

import "./stylesAboutMe.css"

export const aboutMe = {
  myImage: AboutMePhoto,
  description:
    "Meu nome é Vinicius Souza, tenho 22 anos, sou programador web, minha principal tecnologia é o Javascript. Nas minhas aplicações web utilizo node.js para construir o backend e react.js e bootstrap para construir o frontend. Atualmente sou estagiario em desenvolvimento web na acct global empresa que trabalha com diversos e-commerces do brasil e do mundo",
};

export const AboutMe = () => {
  return (

      <div className="containerAboutme">
        <div >
          <img src={AboutMePhoto} alt="A bright blue sky" className="containerPhoto" />
        </div>
        <div className="">
          <p className="aboutMeText">{aboutMe.description}</p>
        </div>
      </div>

  );
};
