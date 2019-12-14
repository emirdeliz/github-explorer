import { css } from 'styled-components';
import { EFontSize } from '@system/theme';

/**
 * Container of the input.
 */

const FormControl = css`
  outline-style: none;
  box-shadow: none;
  width: 100%;
  max-width: 274px;
  display: block;
  padding: 8px 12px;
  line-height: 1.25;
  margin: 0;
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  font-size: ${EFontSize.normal};
`;

export default FormControl;