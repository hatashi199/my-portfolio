import React from "react";
import { InputElement, LabelInput } from "./Styles";

const Input = ({ label, type }) => {
  return (
    <LabelInput>
      <span>{label}</span>
      <InputElement type={type} />
    </LabelInput>
  );
};

export default Input;
