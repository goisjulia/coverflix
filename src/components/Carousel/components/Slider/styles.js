import styled from 'styled-components';

export const Container = styled.ul`
padding: 0;
margin: 0;
.slick-prev,
.slick-next {
  z-index: 50;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.2);
  transform: initial;
  &:before {
    font-size: 30px;
  }
}

.slick-prev {
  left: 0;
}

.slick-next {
  right: 0;
}

&:hover div{
  opacity: 1;
}
`;

export const Arrow = styled.div`
opacity: 0;

svg {
  height: calc(100% - 32px);
  width: 40pt;
  margin-bottom: 16px;
  margin-top: 16px;
}
/*
.shadow:hover {
} */

@media(max-width: 800px){
  opacity:1;

  svg {
    height: calc(100% - 32px);
    width: 20pt;
  }
}
`;
