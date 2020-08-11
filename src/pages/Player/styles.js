import styled from 'styled-components';

const VideoContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 70%;
  padding-top: 35%;
  margin: auto;
  /* margin-right: auto; */

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
  display: block;
  border-right: 10px solid white;
  border-bottom: 10px solid white;

  @media (max-width: 1024px) {
    border-right: 3px solid white;
    border-bottom: 3px solid white;
  }
`;

const PlayerTitle = styled.span`
  color: var(--white);
  display: inline-block;
`;

export { VideoContainer, Iframe, PlayerTitle };
