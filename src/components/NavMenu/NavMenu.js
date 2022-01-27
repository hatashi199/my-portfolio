import { MenuList } from "./Styles";

const NavMenu = () => {
  return (
    <MenuList>
      <li>
        <a href="#home">Inicio</a>
      </li>
      <li>
        <a href="#aboutMe">Sobre mi</a>
      </li>
      <li>
        <a href="#skills">Habilidades</a>
      </li>
      <li>
        <a href="#projects">Proyectos</a>
      </li>
      <li>
        <a href="#contact">Contacto</a>
      </li>
    </MenuList>
  );
};

export default NavMenu;
