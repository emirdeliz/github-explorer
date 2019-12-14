import React from 'react';
import Logo from '@framework/logo/logo';
import NavStyle from './nav.style';

interface INav {
  children?: any;
  title?: any;
}

const Nav = (props: INav) => (
  <NavStyle>
    <Logo />
    <h1>{props.title}</h1>
    {props.children}
  </NavStyle>
)

export default React.memo(Nav);
