import FormControl from "@framework/form-control/form-control.style";
import { EColors, EFontSize } from "@system/theme";
import styled from "styled-components";

/**
 * Container of the dropdown-search.
 */
const DropdownSearch = styled.div<{ showMenu: boolean }>`
  ${FormControl}
  padding: 0;
  background-color: ${EColors.dropdownSearchBackground};
  position: relative;

  ${(props) => props.showMenu ? `
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
` : ""}

  input {
    width: calc(100% - 45px);
    border: 0;
  }
`;

const Menu = styled.div`
  position: absolute;
  z-index: 2002;
  left: -2px;
  right: -2px;
  top: 34px;
  border: solid 1px ${EColors.dropdownSearchBorder};
  background-color: ${EColors.dropdownSearchBackground};
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
`;

const MenuItem = styled.div`
  padding: 8px 12px;
  color: 	${EColors.dropdownSearchMenuColor};
  cursor: pointer;

  &:hover {
    background-color: ${EColors.dropdownSearchMenuHover};
  }
`;

const Loading = styled.div`
  position: absolute;
  right: 0;
  transform: translateY(-50%);
  top: 50%;
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

const SearchIcon = styled(Loading)`
`;

const MenuLabel = styled.div`
  font-weight: bold;
  font-size: ${EFontSize.normal};
  color: ${EColors.dropdownSearchMenuLabel};
`;

const MenuDescription = styled.div`
  font-size: ${EFontSize.small};
  color: ${EColors.dropdownSearchMenuDesc};
`;

export {
  DropdownSearch, Menu, MenuItem, MenuLabel, MenuDescription, Loading, SearchIcon,
};
