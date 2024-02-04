import React from "react";
import "../style/globals.css";
import Image from "next/image";
import backgroundImg from "../../public/images/backgroundImg.png";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <div>
          <div className='py-10 px-16'>{children}</div>
        </div>
      </body>
    </html>
  );
};

export default Layout;
