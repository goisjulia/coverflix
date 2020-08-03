import styled from 'styled-components';

const DropdownBase = styled.div`
  float: left;
  overflow: hidden;
  /* padding-bottom: 22px; */

  &:hover{
    & .dropdown-content {
      display: block;
    }
  }
`;

DropdownBase.Button = styled.button`
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  background-color: inherit;
  font-family: inherit; /* Important for vertical align on mobile phones */
  margin: 0; /* Important for vertical align on mobile phones */
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
`;

DropdownBase.ListItens = styled.div`
  display: none;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  min-width: 100px;
  z-index: 1;
  /* box-shadow: 0px 1px 3px 0px var(--white); */

  & a:hover{
    color: var(--primary);
    border-bottom: 1px solid var(--primary);
}
`;

DropdownBase.Item = styled.a`
  float: none;
  color: var(--white);
  padding-left: 10px;
  text-decoration: none;
  display: block;
  text-align: left;
`;

export default DropdownBase;
