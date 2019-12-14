// import { font } from '@System/Colors/Theme';
import styled from 'styled-components';
import { EColors } from '@system/theme';

/**
 * Container of the nav.
 */
const Nav = styled.div`
  display: flex;
  align-items: center;
  color: ${EColors.navColor};
  background-color: ${EColors.navbarBackgroundColor};
  width: 100%;
  padding: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  h1 {
    margin: 0;
    margin-right: 15px;
  }
`;

export default Nav;