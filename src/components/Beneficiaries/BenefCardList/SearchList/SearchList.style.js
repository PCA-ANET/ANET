import styled from 'styled-components';
import { css } from 'styled-components';
export const StyledListItem = styled.li.attrs(props => ({
  className: `row compte mx-auto ${props.active ? 'active':''}`,
}))``;
