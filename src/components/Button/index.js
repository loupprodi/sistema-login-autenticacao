import React from "react";
import { ButtonCustom } from "./styles";

export const Button = ({ type, text, onClick, disabled }) => {
  return (
    <ButtonCustom type={type} text={text} onClick={onClick} disabled={disabled}>
      {text}
    </ButtonCustom>
  );
};
