import "./css/App.css";
import MainHeader from "./components/MainHeader/MainHeader";
import FrontSection from "./components/FrontSection/FrontSection";
import AboutSection from "./components/AboutSection/AboutSection";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import ContactSection from "./components/ContactSection/ContactSection";
import FooterSection from "./components/FooterSection/FooterSection";

const App = () => {
  return (
    <>
      <MainHeader />
      <FrontSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </>
  );
};

export default App;
