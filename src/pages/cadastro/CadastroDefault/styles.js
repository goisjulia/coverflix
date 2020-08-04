import styled from 'styled-components';

export const FormContainer = styled.div`
width: 50%;
margin-left: auto;
margin-right:auto;
@media(max-width: 800px){
  width: 100%;
}
`;

export const Button = styled.button`
  color: var(--black);
  border: 1px solid var(--black);
  box-sizing: border-box;
  cursor: pointer;
  padding: 5px 10px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity .3s;

  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export const SpanInfo = styled.span`
  display: block;
  font-size: 10pt;
  color: var(--blackLighter);
`;

export const RightContainer = styled.div`
  text-align: right;
  margin-bottom: 20px;
`;

export const Table = styled.table`
  width: 100%;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
  border-collapse: collapse;

  td, th {
    border:none;
    border-bottom: 1px solid var(--grayMedium);
  }

  tbody tr:hover {
    background-color: var(--grayMedium);
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
