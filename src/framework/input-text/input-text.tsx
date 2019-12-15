import React from "react";
import InputTextStyle from "./input-text.style";

interface IInputText {
  value?: string|number;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const InputText = (props: IInputText) => (
  <InputTextStyle {...props} />
);

export default React.memo(InputText);
