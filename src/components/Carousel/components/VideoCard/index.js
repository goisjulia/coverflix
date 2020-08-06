import React from 'react';
import { PropTypes } from 'prop-types';
import { useHistory } from 'react-router-dom';
import VideoCardContainer from './styles';
import Button from '../../../Button/index';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

function VideoCard({ videoTitle, videoURL }) {
  const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
  const history = useHistory();

  function handleClick() {
    history.push('/player', { videoTitle, url: videoURL });
  }

  return (
    <Button.NoBorder
      type="button"
      onClick={handleClick}
    >
      <VideoCardContainer
        url={image}
      >
        <VideoCardContainer.Background>
          <VideoCardContainer.Title>
            {videoTitle}
          </VideoCardContainer.Title>
        </VideoCardContainer.Background>
      </VideoCardContainer>
    </Button.NoBorder>
  );
}

VideoCard.propTypes = {
  videoTitle: PropTypes.string.isRequired,
  videoURL: PropTypes.string.isRequired,
};

export default VideoCard;
