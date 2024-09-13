// components/Navbar.tsx
import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <>
    <div className="navbar navbar-expand-lg navbar-light bg-white justify-content-between" style={{padding: '24px', position: 'fixed', zIndex: 99999999, width: '100%', height: '64px'}}>
    <div id="menu-navbar" className="d-flex align-items-center" style={{gap: '24px'}}>
      <Image alt='image' id="sc-menu" src="icon/mingcute_menu-fill.svg" width={24} height={24} style={{cursor: 'pointer'}} />
      <div className="d-flex align-items-center" id="navbar-weather" style={{gap: '8px'}}>
        <Image alt='image' src="icon/weather 1.svg" width={40} height={40} />
        <div className="d-flex flex-column" style={{gap: '2px'}}>
          <span id="text-weather" className="text-dark">Hà Nội, 24 độ C</span>
          <span id="text-weather1">Trời nắng</span>
        </div>
      </div>
    </div>
    <div className="d-flex" id="header-navbar">
      <div className="d-flex" style={{gap: '24px'}}>
        <Image alt='image' src="icon/logoVd.svg" width={48.78} height={40} layout='responsive'/>
        <div className="d-flex align-items-center" id="search-navbar">
          <div className="s-icon" style={{position: 'absolute', paddingLeft: '12px'}}>
            <Image alt='image' src="icon/search.svg" width={24} height={24}/>
          </div>
          <input type="text" id="search-bar" className="d-flex" placeholder="Tìm kiếm VdiaryBook..." />
        </div>
      </div>
      <div className="d-flex" id="icon-navbar" style={{gap: '16px'}}>
        <div className="child-icon-navbar d-flex active">
          <Image alt='image' src="icon/diary 1.svg" width={24} height={24} />
        </div>
        <div className="child-icon-navbar d-flex">
          <Image alt='image' src="icon/clapperboard 1.svg" width={24} height={24} />
        </div>
        <div className="child-icon-navbar d-flex">
          <Image alt='image' src="icon/small-talk.svg" width={24} height={24} />
        </div>
        <div className="child-icon-navbar d-flex">
          <Image alt='image' src="icon/soccer-ball.svg" width={24} height={24} />
        </div>
        <div className="child-icon-navbar d-flex">
          <Image alt='image' src="icon/share 1.svg" width={24} height={24} />
        </div>
        <div className="child-icon-navbar d-flex">
          <Image alt='image' src="icon/megaphone.svg" width={24} height={24} />
        </div>
        <div className="child-icon-navbar d-flex">
          <Image alt='image' src="icon/history.svg" width={24} height={24} />
        </div>
      </div>
    </div>
    <div className="d-flex align-items-center" id="profit-feature" style={{gap: '12px'}}>
      <div id="fIcon" className="d-flex" style={{gap: '10px', padding: '8px'}}>
        <a href="#"><Image alt='image' src="icon/ficon1.svg" width={40} height={40} /></a>
        <div style={{position: 'relative', display: 'inline-block'}}>
          <a href="#"><Image alt='image' src="icon/ficon2.svg" width={40} height={40} /></a>
          <span id="span-ficon">
            1
          </span>
        </div>
        <a href="#"><Image alt='image' src="icon/ficon3.svg" width={40} height={40} /></a>
        <div style={{position: 'relative', display: 'inline-block'}}>
          <a href="#"><Image alt='image' src="icon/ficon4.svg" width={40} height={40} /></a>
          <span id="span-ficon">
            1
          </span>
        </div>
      </div>
      <div id="iProfile">
        <a href="#"><Image alt='image' src="icon/Profile.svg" width={40} height={40} /></a>
        <a href="#"><Image alt='image' src="icon/icon-park-solid_down-one.svg" width={24} height={24} /></a>
      </div>
    </div>
  </div>
  
  </>
    );
  };
  
  export default Navbar;
  