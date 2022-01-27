import React from "react";
import { LabelInput } from "../Input/Styles";
import { TextareaElement } from "./Styles";

const Textarea = ({ label }) => {
  return (
    <LabelInput>
      <span>{label}</span>
      <TextareaElement />
    </LabelInput>
  );
};

export default Textarea;
