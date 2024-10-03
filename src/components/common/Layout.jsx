// import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  // console.log(props);
  return (
    <>
      <body className="userLayout">
        <Header />
        <main className="mx-auto userBackground">{children}</main>
        {/* <Footer /> */}
      </body>
    </>
  );
};
export default Layout;
