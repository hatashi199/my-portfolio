import React from "react";
import { LabelInput } from "../Input/Styles";
import { TextareaElement } from "./Styles";

const Textarea = ({
  label,
  valueFormElement,
  onChangeForm,
  onBlurForm,
  nameForm,
}) => {
  return (
    <>
      <LabelInput>
        <span>{label}</span>
        <TextareaElement
          name={nameForm}
          value={valueFormElement}
          onChange={onChangeForm}
          onblur={onBlurForm}
        />
      </LabelInput>
    </>
  );
};

export default Textarea;
