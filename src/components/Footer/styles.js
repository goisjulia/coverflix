import styled from 'styled-components';

const FooterBase = styled.footer`
  background: var(--black);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: var(--white);
  text-align: center;

  @media(max-width: 800px){

    padding-top: 0;
    padding-bottom: 0;

    .img {
      display: none;
    }
  }

`;

export default FooterBase;
