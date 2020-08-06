import styled from 'styled-components';

const Button = styled.a`
  color: var(--white);
  border: 1px solid var(--white);
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

Button.Default = styled.button`
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

Button.NoBorder = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:hover{
    transform: scale(1.1);
  }

  svg {
    display: block;
  }
`;

Button.NoBorderHover = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover{
    transform: scale(1.1);
  }
`;

export default Button;
