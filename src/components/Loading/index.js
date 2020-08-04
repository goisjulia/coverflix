import React from 'react';
import styled from 'styled-components';
import './styles.css';

const LoadingContainer = styled.div`
text-align: center;
`;

function Loading() {
  return (
    <LoadingContainer>
      <div className="loader">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </LoadingContainer>
  );
}

export default Loading;
