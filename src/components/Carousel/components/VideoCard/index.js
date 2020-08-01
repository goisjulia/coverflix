import React from 'react';
import { PropTypes } from 'prop-types';
import VideoCardContainer from './styles';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

function VideoCard({ videoTitle, videoURL }) {
  const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
  return (
    <>
      <VideoCardContainer
        url={image}
        href={videoURL}
        target="_blank"
      >
        <VideoCardContainer.Background>
          <VideoCardContainer.Title>
            {videoTitle}
            {' '}
          </VideoCardContainer.Title>
        </VideoCardContainer.Background>
      </VideoCardContainer>
    </>
  );
}

VideoCard.propTypes = {
  videoTitle: PropTypes.string.isRequired,
  videoURL: PropTypes.string.isRequired,
};

export default VideoCard;
