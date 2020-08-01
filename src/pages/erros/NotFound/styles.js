import styled from 'styled-components';

export const Tecla = styled.div`
cursor: pointer;
outline: none;
color: var(--white);
text-align: right;
padding-right: 2%;
font-weight: 800;
background-color: var(--black);
border: none;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
box-shadow: 0 9px #999;
--teclaHeight: 15vh;
height: var(--teclaHeight);
width: 60%;
font-size: 28pt;
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;

&.teclaHover:hover {
  background-color: grey;
  transform: scale(0.99) translateX(-5px);
  /* transform: ; */
}

&:hover {
  transform: scale(0.99) translateX(-5px);
  /* transform: ; */
}

&:active {
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

@media(max-width: 1024px){
  padding-top: 0;
  font-size: 20pt;
  text-align: center;
  height: 10vh;
}

@media(max-width: 564px){
  font-size: 16pt;
}
`;

export const Linha = styled.div`
margin-top: 200px;
--teclaHeight: 15vh;
margin-bottom: calc(var(--teclaHeight) / (-2));
height: 5px;
width: 100%;
background-color: var(--black);

@media(max-width: 1024px){
  --teclaHeight: 10vh
}
`;

export const Piano = styled.div`
min-height: calc(100vh - var(--bodyPaddingTop));
/* margin-top: auto; */
`;
