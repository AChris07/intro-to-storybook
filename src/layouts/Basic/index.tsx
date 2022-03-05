import React, { FunctionComponent } from 'react';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

type Props = {
  children: React.ReactNode;
};

const BasicLayout: FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default BasicLayout;
