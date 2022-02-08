import React from "react";
import { SectionBox } from "../../css/styled-components-general/Styles";
import { ButtonForm, ContactBox, EmailSent } from "./Styles";
import { GrMail, GrLinkedin, GrGithub } from "react-icons/gr";
import { FaPhoneSquare } from "react-icons/fa";
import Textarea from "../Textarea/Textarea";
import Input from "../Input/Input";
import { useState } from "react";
import emailjs from "emailjs-com";
import { Formik } from "formik";
import formSchema from "../../formValidation/validate";

const {
  REACT_APP_EMAILJS_SERVICE_ID,
  REACT_APP_EMAILJS_TEMPLATE_ID,
  REACT_APP_EMAILJS_USER_ID,
} = process.env;

emailjs.init(REACT_APP_EMAILJS_SERVICE_ID);

const ContactSection = () => {
  const [successEmail, setSuccessEmail] = useState(false);

  const sendEmail = (data) => {
    emailjs
      .send(
        REACT_APP_EMAILJS_SERVICE_ID,
        REACT_APP_EMAILJS_TEMPLATE_ID,
        data,
        REACT_APP_EMAILJS_USER_ID
      )
      .then((res) => {
        console.log("SUCCESS", res.status);
        res.status === 200 ? setSuccessEmail(true) : setSuccessEmail(false);
        setTimeout(() => {
          setSuccessEmail(false);
        }, 6000);
      })
      .catch((error) => console.log("FAILED...", error));
  };

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
          <Formik
            initialValues={{
              name: "",
              email: "",
              subject: "",
              message: "",
            }}
            validationSchema={formSchema}
            onSubmit={(values, actions) => {
              sendEmail(values);
              actions.setSubmitting(false);
            }}
          >
            {({ values, errors, handleChange, handleSubmit, handleBlur }) => (
              <>
                <form className="contactForm" onSubmit={handleSubmit}>
                  <div className="inputElement">
                    <Input
                      label="Nombre"
                      type="text"
                      nameForm="name"
                      valueFormElement={values.name}
                      onChangeForm={handleChange}
                      onBlurForm={handleBlur}
                    />
                    {errors.name ? (
                      <p className="errorMessage">{errors.name}</p>
                    ) : null}
                  </div>
                  <div className="inputElement">
                    <Input
                      label="E-mail"
                      type="mail"
                      nameForm="email"
                      valueFormElement={values.email}
                      onChangeForm={handleChange}
                      onBlurForm={handleBlur}
                    />
                    {errors.email ? (
                      <p className="errorMessage">{errors.email}</p>
                    ) : null}
                  </div>
                  <div className="inputElement">
                    <Input
                      label="Asunto"
                      type="text"
                      nameForm="subject"
                      valueFormElement={values.subject}
                      onChangeForm={handleChange}
                      onBlurForm={handleBlur}
                    />
                    {errors.subject ? (
                      <p className="errorMessage">{errors.subject}</p>
                    ) : null}
                  </div>
                  <div className="inputElement">
                    <Textarea
                      label="Mensaje"
                      nameForm="message"
                      valueFormElement={values.message}
                      onChangeForm={handleChange}
                      onBlurForm={handleBlur}
                    />
                    {errors.message ? (
                      <p className="errorMessage">{errors.message}</p>
                    ) : null}
                  </div>
                  <ButtonForm type="submit" value="Enviar" />
                  {successEmail && (
                    <EmailSent>
                      Gracias por contactar conmigo, te responderé en cuanto
                      revise el email
                    </EmailSent>
                  )}
                </form>
              </>
            )}
          </Formik>
        </ContactBox>
      </div>
    </SectionBox>
  );
};

export default ContactSection;
