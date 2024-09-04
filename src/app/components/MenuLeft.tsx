import React from 'react';
import Image from 'next/image';

const MenuLeft = () => {
  return (
        <>
  <div className="tab d-flex justify-content-center" style={{padding: '24px 0px 0px 0px', gap: '8px', borderBottom: '1px solid #CAD0D7'}}>
    <button id="btn-homefeed" type="button">Home feed</button>
    <button id="btn-shopfeed" type="button">Shop feed</button>
  </div>
  <div className="menu-left">
    <div className="body-menu-left">
      <div className="d-flex justify-content-between align-items-center" id="title" style={{padding: '12px 24px 0px 24px'}}>
        <span style={{color: 'black', fontSize: '14px', fontWeight: 600}}>Mạng xã
          hội</span>
        <div className="d-flex" style={{gap: '8px'}}>
          <Image alt='image' style={{cursor: 'pointer'}} src="icon/pepicons-pop_list.svg" width={24} height={24} />
          <Image alt='image' style={{cursor: 'pointer'}} src="icon/fluent_grid-28-filled.svg" width={24} height={24} />
        </div>
      </div>
      <div style={{padding: '0px 8px 8px 8px'}}>
        <a href="#" style={{textDecoration: 'none', color: 'black'}}>
          <div id="text-menuLeft" className="d-flex align-items-center text-mmenu-left">
            <Image alt='image' src="/icon/people 1.svg" width={28} height={28} />
            <span id="sub-textmenuLeft">Trang cộng đồng (5)</span>
          </div>
        </a>
        <a href="#" style={{textDecoration: 'none', color: 'black'}}>
          <div id="text-menuLeft" className="d-flex align-items-center text-mmenu-left">
            <Image alt='image' src="/icon/book 1.svg" width={28} height={28} />
            <span id="sub-textmenuLeft">Nhật ký</span>
          </div>
        </a>
        <a href="#" style={{textDecoration: 'none', color: 'black'}}>
          <div id="text-menuLeft" className="d-flex align-items-center text-mmenu-left">
            <Image alt='image' src="/icon/task-list 1.svg" width={28} height={28} />
            <span id="sub-textmenuLeft">Khảo sát</span>
          </div>
        </a>
        <a href="#" style={{textDecoration: 'none', color: 'black'}}>
          <div id="text-menuLeft" className="d-flex align-items-center text-mmenu-left">
            <Image alt='image' src="/icon/calendar (1) 1.svg" width={28} height={28} />
            <span id="sub-textmenuLeft">Sự kiện</span>
          </div>
        </a>
        <a href="#" style={{textDecoration: 'none', color: 'black'}}>
          <div id="text-menuLeft" className="d-flex align-items-center text-mmenu-left">
            <Image alt='image' src="icon/location 1.svg" width={28} height={28} />
            <span id="sub-textmenuLeft">Bản đồ thông minh</span>
          </div>
        </a>
        <a href="#" style={{textDecoration: 'none', color: 'black'}}>
          <div id="text-menuLeft" className="d-flex align-items-center text-mmenu-left">
            <Image alt='image' src="/icon/ask 1.svg" width={28} height={28} />
            <span id="sub-textmenuLeft">Smart Q&amp;A</span>
          </div>
        </a>
        <a href="#" style={{textDecoration: 'none', color: 'black'}}>
          <div id="text-menuLeft" className="d-flex align-items-center text-mmenu-left">
            <Image alt='image' src="/icon/search 1.svg" width={28} height={28} />
            <span id="sub-textmenuLeft">Tìm kiếm</span>
          </div>
        </a>
        <div>
          <a id="trangcanhan" href="#" style={{textDecoration: 'none', color: 'black'}}>
            <div id="text-menuLeft" className="d-flex align-items-center justify-content-between text-mmenu-left" style={{padding: '8px 16px 8px 16px', gap: '8px'}}>
              <div className="d-flex align-items-center" style={{gap: 8}}>
                <Image alt='image' src="icon/user 1.svg" width={28} height={28} />
                <span id="sub-textmenuLeft">Trang cá
                  nhân</span>
              </div>
              <Image alt='image' src="icon/iconamoon_arrow-right-2.svg" width={24} height={24} />
            </div>
          </a>
          <div id="sub-trangcanhan" className="d-flex flex-column">
            <a href="#" style={{textDecoration: 'none', color: 'black'}}>
              <div id="textSub-menuleft" className="textSub-menu d-flex align-items-center text-mmenu-left" style={{gap: '8px', padding: '8px 16px 8px 40px'}}>
                <Image alt='image' src="icon/medal.svg" width={28} height={28} />
                <span id="sub-textmenuLeft">Trang cá nhân</span>
              </div>
            </a>
            <a href="#" style={{textDecoration: 'none', color: 'black'}}>
              <div id="textSub-menuleft" className="textSub-menu d-flex align-items-center text-mmenu-left" style={{gap: '8px', padding: '8px 16px 8px 40px'}}>
                <Image alt='image' src="icon/picture 1.svg" width={28} height={28} />
                <span id="sub-textmenuLeft">Ảnh</span>
              </div>
            </a>
            <a href="#" style={{textDecoration: 'none', color: 'black'}}>
              <div id="textSub-menuleft" className="textSub-menu d-flex align-items-center text-mmenu-left" style={{gap: '8px', padding: '8px 16px 8px 40px'}}>
                <Image alt='image' src="icon/reel.svg" width={28} height={28} />
                <span id="sub-textmenuLeft">Video</span>
              </div>
            </a>
            <a href="#" style={{textDecoration: 'none', color: 'black'}}>
              <div id="textSub-menuleft" className="textSub-menu d-flex align-items-center text-mmenu-left" style={{gap: '8px', padding: '8px 16px 8px 40px'}}>
                <Image alt='image' src="icon/user.svg" width={28} height={28} />
                <span id="sub-textmenuLeft">Huy hiệu</span>
              </div>
            </a>
          </div>
        </div>
        <a href="#" style={{textDecoration: 'none', color: 'black'}}>
          <div id="text-menuLeft" className="d-flex align-items-center text-mmenu-left">
            <Image alt='image' src="icon/friend 1.svg" width={28} height={28} />
            <span id="sub-textmenuLeft">Bạn bè</span>
          </div>
        </a>
        <a href="#" style={{textDecoration: 'none', color: 'black'}}>
          <div id="text-menuLeft" className="d-flex align-items-center text-mmenu-left">
            <Image alt='image' src="/icon/multiple-chat 1.svg" width={28} height={28} />
            <span id="sub-textmenuLeft">Nhóm</span>
          </div>
        </a>
        <a href="#" style={{textDecoration: 'none', color: 'black'}}>
          <div id="text-menuLeft" className="d-flex align-items-center text-mmenu-left">
            <Image alt='image' src="/icon/office 1.svg" width={28} height={28} />
            <span id="sub-textmenuLeft">Doanh nghiệp</span>
          </div>
        </a>
        <a href="#" style={{textDecoration: 'none', color: 'black'}}>
          <div id="text-menuLeft" className="d-flex align-items-center text-mmenu-left">
            <Image alt='image' src="/icon/facebook-page 1.svg" width={28} height={28} />
            <span id="sub-textmenuLeft">Trang</span>
          </div>
        </a>
        <a href="#" style={{textDecoration: 'none', color: 'black'}}>
          <div id="text-menuLeft" className="d-flex align-items-center text-mmenu-left">
            <Image alt='image' src="/icon/quotation 1.svg" width={28} height={28} />
            <span id="sub-textmenuLeft">Danh ngôn</span>
          </div>
        </a>
        <a href="#" style={{textDecoration: 'none', color: 'black'}}>
          <div id="text-menuLeft" className="d-flex align-items-center text-mmenu-left">
            <Image alt='image' src="/icon/rank 1.svg" width={28} height={28} />
            <span id="sub-textmenuLeft">Bảng ghi nhận</span>
          </div>
        </a>
        <a href="#" style={{textDecoration: 'none', color: 'black'}}>
          <div id="text-menuLeft" className="d-flex align-items-center text-mmenu-left">
            <Image alt='image' src="/icon/television (1) 1.svg" width={28} height={28} />
            <span id="sub-textmenuLeft">Kênh của tôi</span>
          </div>
        </a>
        <a href="#" style={{textDecoration: 'none', color: 'black'}}>
          <div id="text-menuLeft" className="d-flex align-items-center text-mmenu-left">
            <Image alt='image' src="/icon/Frame 1.svg" width={28} height={28} />
            <span id="sub-textmenuLeft">Xem thêm</span>
          </div>
        </a>
      </div>
    </div>
  </div>
  <div className="footer d-flex flex-column">
    <div>
      <a href="#" style={{fontSize: '12px', fontWeight: 400, textDecoration: 'none'}}>Chính sách quyền riêng
        tư</a>
      <Image alt='image' src="icon/Ellipse 1.svg" width={4} height={4} />
      <a href="#" style={{fontSize: '12px', fontWeight: 400, textDecoration: 'none'}}>Điều khoản</a>
      <Image alt='image' src="icon/Ellipse 1.svg" width={4} height={4} />
    </div>
    <div>
      <a href="#" style={{textDecoration: 'none', fontSize: '12px', fontWeight: 400}}>Trung tâm hỗ trợ</a>
      <Image alt='image' src="icon/Ellipse 1.svg" width={4} height={4} />
      <a style={{fontSize: '12px', fontWeight: 400}}>Cookie</a>
      <Image alt='image' src="icon/Ellipse 1.svg" width={4} height={4} />
      <span style={{fontSize: '12px', fontWeight: 400}}>VdiaryBook 2024 @</span>
    </div>
  </div>

      </>
      
    );
  };
  
  export default MenuLeft;
  