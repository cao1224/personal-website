import React from 'react';
import Navbar from './navBar/Navbar';
import Footer from './footer/Footer';

const Layout = ({ children }) => {
  return (
    <div id="root">
      <Navbar />
      <main className="main-content container">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
