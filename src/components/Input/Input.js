import React from "react";
import { InputElement, LabelInput } from "./Styles";

const Input = ({
  label,
  type,
  valueFormElement,
  onChangeForm,
  onBlurForm,
  nameForm,
}) => {
  return (
    <>
      <LabelInput>
        <span>{label}</span>
        <InputElement
          type={type}
          name={nameForm}
          value={valueFormElement}
          onChange={onChangeForm}
          onBlur={onBlurForm}
        />
      </LabelInput>
    </>
  );
};

export default Input;
