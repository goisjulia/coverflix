import styled from 'styled-components';

const VideoContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 70%;
  padding-top: 35%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;

  @media (max-width: 1024px) {
    width: 100%;
    height: 50%;
    padding-top: 56.25%;
  }
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

export { VideoContainer, Iframe };
