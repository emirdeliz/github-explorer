import React from "react";
import RepositoryStyle from "./respository.style";

interface IRepository {
  name?: string;
  full_name?: string;
}

const Repository = (props: IRepository) => (
  <RepositoryStyle>
    <h1>{props.name}</h1>
    <h3>{props.full_name}</h3>
  </RepositoryStyle>
);

export default React.memo(Repository);
