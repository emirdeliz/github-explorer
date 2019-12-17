import React from "react";
import ErrorStyle from "./error.style";

interface IError {
  children?: string;
}

const Error = (props: IError) => (
  <ErrorStyle>
    {props.children}
  </ErrorStyle>
);

export default React.memo(Error);
