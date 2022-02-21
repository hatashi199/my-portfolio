import { createContext, useState } from "react";

export const DarkLightContext = createContext();

export const DarkLightProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    <DarkLightContext.Provider value={{ theme, setTheme }}>
      {children}
    </DarkLightContext.Provider>
  );
};
