import React from "react";
import { Label, GrupoInput, Input, Error, DivIcon } from "./FormActStyled";

const InputForm = ({
  label,
  name,
  placeholder,
  error,
  type,
  state,
  changeState,
  regularExpresion,
}) => {
  const handleChange = (e) => {
    changeState({
      ...state,
      field: e.target.value,
    });
  };

  const validate = () => {
    if (regularExpresion) {
      if (regularExpresion.test(state.field)) {
        changeState({ ...state, validate: "true" });
      } else {
        changeState({ ...state, validate: "false" });
      }
    }
  };

  return (
    <div>
      <Label htmlFor={name} valid={state.validate}>
        {label}
      </Label>
      <GrupoInput>
        <Input
          placeholder={placeholder}
          type={type}
          id={name}
          value={state.field}
          onChange={handleChange}
          onKeyUp={validate}
          onBlur={validate}
          valid={state.validate}
        />
        <DivIcon valid={state.validate}>
          <ion-icon
            name={
              state.validate === "true"
                ? "checkmark-circle-outline"
                : "close-circle-outline"
            }
          ></ion-icon>
        </DivIcon>
      </GrupoInput>
      <Error valid={state.validate}>{error}</Error>
    </div>
  );
};

export default InputForm;
