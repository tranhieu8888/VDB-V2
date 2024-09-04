import React from 'react';
import Navbar from './components/navbar';
import MenuLeft from './components/MenuLeft';
import MenuRight from './components/MenuRight';
import { ReactNode } from 'react';
import Script from 'next/script';

export default function Rootlayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Header Design</title>
        <link rel="stylesheet" href="/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/css/jquery.fancybox.min.css" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/globals.css" />
      </head>
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
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js" strategy="beforeInteractive"  />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" strategy="beforeInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
