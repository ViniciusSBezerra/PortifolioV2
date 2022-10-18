import { AboutMe } from "../components/About-me/AboutMe";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/header";
import { Projects } from "../components/Projects/Projects";
import { Tecnologies } from "../components/Tecnologies/Tecnologies";

export const Homepage = () => {
  return (
    <>
      <Header />

      <AboutMe />

      <Tecnologies />

      <Projects />

      <Footer />
    </>
  );
};
