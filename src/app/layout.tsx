import React from "react";
import "../style/globals.css";
import Image from "next/image";
import backgroundImg from "../../public/images/backgroundImg.png";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='relative min-h-screen'>
      <Image
        src={backgroundImg}
        alt='Background Image'
        layout='fill'
        objectFit='cover'
        className='z-0'
      />
      <div className='py-10 px-16 relative z-10'>{children}</div>
    </div>
  );
};

export default Layout;
