import React from 'react';
import { PropTypes } from 'prop-types';
import Menu from '../Menu';
import Footer from '../Footer';
import Main from './styles';

function PageDefault({ children, paddingMain, color }) {
  return (
    <>
      <Menu />
      <Main paddingMain={paddingMain} color={color}>
        {children}
      </Main>
      <Footer />
    </>
  );
}

PageDefault.defaultProps = {
  children: '',
  paddingMain: '20px',
  color: 'white',
};

PageDefault.propTypes = {
  children: PropTypes.node,
  paddingMain: PropTypes.string,
  color: PropTypes.string,
};

export default PageDefault;
