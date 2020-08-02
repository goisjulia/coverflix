import React from 'react';
import { PropTypes } from 'prop-types';
import Menu from '../Menu';
import Footer from '../Footer';
import Main from './styles';

function PageDefault({ children, paddingMain }) {
  return (
    <>
      <Menu />
      <Main paddingMain={paddingMain}>
        {children}
      </Main>
      <Footer />
    </>
  );
}

PageDefault.defaultProps = {
  children: '',
  // paddingMain: 'initial',
};

PageDefault.propTypes = {
  children: PropTypes.node,
  paddingMain: PropTypes.number,
};

export default PageDefault;
