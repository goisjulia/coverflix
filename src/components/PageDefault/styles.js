import styled, { css } from 'styled-components';

export default styled.main`
  flex:1;
  padding-top: 50px;
  padding-left:5%;
  padding-right:5%;
  ${({ paddingMain }) => css`
    padding: ${paddingMain};
  `}
  ${({ color }) => css`
    background: ${color};
  `}
`;
