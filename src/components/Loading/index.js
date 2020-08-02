import React from 'react';
import styled from 'styled-components';
import loading from '../../assets/gif/loading.gif';

const LoadingContainer = styled.div`
text-align: center;
`;

function Loading() {
  return (
    <LoadingContainer>
      <img src={loading} alt="Carregando..." />
    </LoadingContainer>
  );
}

export default Loading;
