import React from "react";
import { SectionBox } from "../../css/styled-components-general/Styles";
import { ContactBox } from "./Styles";
import { GrMail, GrLinkedin, GrGithub } from "react-icons/gr";
import { FaPhoneSquare } from "react-icons/fa";
import Textarea from "../Textarea/Textarea";
import Input from "../Input/Input";

const ContactSection = () => {
  return (
    <SectionBox light id="contact">
      <div className="centerBox">
        <h2>CONTACTO</h2>
        <ContactBox>
          <ul className="contactList">
            <li>
              <a href="mailto:alejandromf_199@hotmail.com">
                <GrMail size="2rem" color="#1fc1c3" />
                <span>alejandromf_199@hotmail.com</span>
              </a>
            </li>
            <li>
              <a href="tel:+34627749798">
                <FaPhoneSquare size="2rem" color="#1fc1c3" />
                <span>+34 627 74 97 98</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/alejandromari%C3%B1o-fullstackdeveloper/">
                <GrLinkedin size="2rem" color="#1fc1c3" />
                <span>Mi LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/hatashi199">
                <GrGithub size="2rem" color="#1fc1c3" />
                <span>Mi GitHub</span>
              </a>
            </li>
          </ul>
          <form className="contactForm">
            <Input label="Nombre" type="text" />
            <Input label="E-mail" type="mail" />
            <Input label="Asunto" type="text" />
            <Textarea label="Mensaje" />
          </form>
        </ContactBox>
      </div>
    </SectionBox>
  );
};

export default ContactSection;
