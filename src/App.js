import "./css/App.css";
import MainHeader from "./components/MainHeader/MainHeader";
import FrontSection from "./components/FrontSection/FrontSection";
import AboutSection from "./components/AboutSection/AboutSection";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import ContactSection from "./components/ContactSection/ContactSection";
import FooterSection from "./components/FooterSection/FooterSection";
import { DarkLightContext } from "./context/DarkLightMode";
import { useContext } from "react";

const App = () => {
  const { theme } = useContext(DarkLightContext);
  return (
    <>
      <MainHeader theme={theme} />
      <FrontSection />
      <AboutSection />
      <SkillsSection theme={theme} />
      <ProjectsSection />
      <ContactSection theme={theme} />
      <FooterSection />
    </>
  );
};

export default App;
