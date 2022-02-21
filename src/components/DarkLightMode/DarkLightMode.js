import { useContext } from "react";
import { ModeButton, ModeDarkLightBox } from "./Styles";
import { FaSun } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { DarkLightContext } from "../../context/DarkLightMode";

const DarkLightMode = () => {
  const { theme, setTheme } = useContext(DarkLightContext);
  return (
    <ModeDarkLightBox>
      <ModeButton
        state={theme}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <div className="buttonCircle"></div>
      </ModeButton>
      {theme === "dark" ? (
        <MdDarkMode size="2rem" color="#fbfbfe" />
      ) : (
        <FaSun size="2rem" color="#2c3337" />
      )}
    </ModeDarkLightBox>
  );
};

export default DarkLightMode;
