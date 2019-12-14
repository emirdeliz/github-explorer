import React from 'react';
import { EColors } from  '@system/theme';
import SearchIconStyle from './search-icon.style';

const SearchIcon = () => (
  <SearchIconStyle>
    <svg viewBox="0 0 1000 1000" aria-hidden="true" fill={EColors.searchIcon}>
      <path d="M977,890.6L780.2,693.9c53.5-71.4,85.2-160.1,85.2-256.2C865.4,201.5,673.9,10,437.7,10C201.5,10,10,201.5,10,437.7c0,236.2,191.5,427.7,427.7,427.7c96,0,184.7-31.7,256.1-85.1L890.6,977c19.9,19.9,55.2,16.5,79.1-7.3C993.6,945.8,996.9,910.5,977,890.6z M437.7,743.2c-168.4,0-305.5-137.1-305.5-305.5c0-168.4,137.1-305.5,305.5-305.5c168.4,0,305.5,137.1,305.5,305.5C743.2,606.1,606.1,743.2,437.7,743.2z"/>
    </svg>
  </SearchIconStyle>
);

export default React.memo(SearchIcon);
