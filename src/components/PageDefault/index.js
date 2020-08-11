import React from 'react';
import { PropTypes } from 'prop-types';
import Menu from '../Menu';
import Footer from '../Footer';
import Main from './styles';

function PageDefault({
  children, paddingMain, color, isCentered,
}) {
  return (
    <>
      <Menu />
      <Main paddingMain={paddingMain} color={color} isCentered={isCentered}>
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
  isCentered: false,
};

PageDefault.propTypes = {
  children: PropTypes.node,
  paddingMain: PropTypes.string,
  color: PropTypes.string,
  isCentered: PropTypes.bool,
};

export default PageDefault;
