import React from 'react';
import { useLocation } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import { VideoContainer, Iframe } from './styles';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

function Player() {
  const location = useLocation();
  const { videoTitle, url } = location.state;
  const youTubeID = getYouTubeId(url);

  return (
    <PageDefault paddingMain={`${10}px`} color="#141414" isCentered>
      <VideoContainer>
        <Iframe
          title={videoTitle}
          src={`https://www.youtube.com/embed/${youTubeID}?autoplay=0&mute=0`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </VideoContainer>
    </PageDefault>
  );
}

export default Player;
