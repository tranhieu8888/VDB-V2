import React from 'react';
import Navbar from './components/navbar';
import MenuLeft from './components/MenuLeft';
import MenuRight from './components/MenuRight';
import { ReactNode } from 'react';
import Script from 'next/script';
import Head from 'next/head'; // Import component Head
import "primereact/resources/themes/lara-light-cyan/theme.css";





import './styles/globals.css'; // Import global CSS

import 'bootstrap/dist/css/bootstrap.css'


export default function Rootlayout({ children }: { children: ReactNode }) {


  return (
    <html lang="en">
      <Head>
        <title>Module AI</title>
        {/* <link rel="stylesheet" href="/css/globals.module.css" /> */}
      </Head>
      <body>

      <div className="overlay" id="overlay"></div>
      {/* Top Navbar */}
      <div className="top-navbar">
        <Navbar />
      </div>
      {/* End Top Navbar */}

      <div className="d-flex justify-content-around" id="full-body">
        {/* MenuLeft */}
        <div className="d-flex flex-column" id="sidebar-left">
          <MenuLeft />
        </div>
        {/* End Sidebar Left */}

        {/* MenuRight */}
        <div className="d-flex justify-content-between flex-column" id="sidebar-right">
          <MenuRight />
        </div>
        {/* End Sidebar Right */}

        {/* Main Content Area */}
          {children}
      </div>

      {/* External Scripts */}
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
