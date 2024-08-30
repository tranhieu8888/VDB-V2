// components/MenuRight.tsx
const MenuRight = () => {
  return (
        <>
  <div className="d-flex flex-column" style={{gap: '10px', overflowY: 'auto'}}>
    <div className="d-flex" id="menu-right">
      <span style={{fontWeight: 700, fontSize: '16px', lineHeight: '24px', textAlign: 'center'}}>Trò
        chuyện</span>
      <div className="d-flex" style={{gap: '8px'}}>
        <img style={{cursor: 'pointer'}} src="icon/Group 39485.svg" width={24} height={24} />
        <img style={{cursor: 'pointer'}} src="icon/Group 39486.svg" width={24} height={24} />
      </div>
    </div>
    <div className="d-flex justify-content-center" style={{width: '260px'}}>
      <div className="d-flex justify-content-center" style={{cursor: 'pointer', width: '80px', borderWidth: '0px 0px 3px 0px', padding: '8px 10px 8px 10px', gap: '10px', borderBottom: '3px solid #007AFF'}}>
        <img src="icon/mdi_account-eye-outline.svg" width={24} height={24} />
      </div>
      <div className="d-flex justify-content-center" style={{cursor: 'pointer', width: '80px', padding: '8px 10px 8px 10px', gap: '10px'}}>
        <img src="icon/heroicons_user-group.svg" width={24} height={24} />
      </div>
    </div>
    <div className="d-flex justify-content-between" style={{width: '260px', padding: '0px 16px 0px 16px'}}>
      <div className="d-flex" style={{gap: '8px'}}>
        <img src="icon/Group 289743.svg" width={45} height={31} />
        <div>
          <div className="d-flex" style={{gap: '4px'}}>
            <span style={{cursor: 'pointer'}} id="text-contact-online">Admin</span>
            <img src="icon/logo 1.svg" width={12} height={12} />
          </div>
          <div className="d-flex" style={{gap: '4px'}}>
            <div className="d-flex" style={{cursor: 'pointer', borderRadius: '2px', border: '0.4px solid #4284F3', padding: '3px', gap: '10px'}}>
              <img src="icon/Rectangle 3465964.svg" width={10} height={10} />
            </div>
            <div className="d-flex" style={{cursor: 'pointer', borderRadius: '2px', border: '0.4px solid #4284F3', padding: '2px 4px 2px 4px'}}>
              <img src="icon/chat 1.svg" width={12} height={12} />
              <span id="text-sub-menuR">Trò
                chuyện</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="d-flex justify-content-between" style={{width: '260px', padding: '0px 16px 0px 16px'}}>
      <div className="d-flex" style={{gap: '8px'}}>
        <img src="icon/Group 289743.svg" width={45} height={31} />
        <div>
          <div className="d-flex" style={{gap: '4px'}}>
            <span style={{cursor: 'pointer'}} id="text-contact-online">Huyền
              Thương</span>
            <img src="icon/logo 1.svg" width={12} height={12} />
          </div>
          <div className="d-flex" style={{gap: '4px'}}>
            <div className="d-flex" style={{cursor: 'pointer', borderRadius: '2px', border: '0.4px solid #4284F3', padding: '3px', gap: '10px'}}>
              <img src="icon/Rectangle 3465964.svg" width={10} height={10} />
            </div>
            <div className="d-flex" style={{cursor: 'pointer', borderRadius: '2px', border: '0.4px solid #4284F3', padding: '2px 4px 2px 4px'}}>
              <img src="icon/chat 1.svg" width={12} height={12} />
              <span id="text-sub-menuR">Trò
                chuyện</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="d-flex justify-content-between" style={{width: '260px', padding: '0px 16px 0px 16px'}}>
      <div className="d-flex" style={{gap: '8px'}}>
        <img src="icon/Group 289743 (1).svg" width={45} height={31} />
        <div>
          <div className="d-flex" style={{gap: '4px'}}>
            <span style={{cursor: 'pointer'}} id="text-contact-online">Xuân
              Hải</span>
            <img src="icon/logo 1.svg" width={12} height={12} />
          </div>
          <div className="d-flex align-items-center">
            <img src="icon/Rectangle 3465964 (1).svg" width={16} height={16} />
            <span id="text-sub-menuR">5
              phút trước</span>
          </div>
        </div>
      </div>
    </div>
    {/* ok */}
    <div className="d-flex justify-content-between" style={{width: '260px', padding: '0px 16px 0px 16px'}}>
      <div className="d-flex" style={{gap: '8px'}}>
        <img src="icon/Group 289743 (1).svg" width={45} height={31} />
        <div>
          <div className="d-flex" style={{gap: '4px'}}>
            <span style={{cursor: 'pointer'}} id="text-contact-online">Xuân
              Hải</span>
            <img src="icon/logo 1.svg" width={12} height={12} />
          </div>
          <div className="d-flex align-items-center">
            <img src="icon/Rectangle 3465964 (1).svg" width={16} height={16} />
            <span id="text-sub-menuR">5
              phút trước</span>
          </div>
        </div>
      </div>
    </div>
    {/* ok */}
  </div>
  <div className="d-flex align-items-center" style={{padding: '8px', gap: '10px', marginBottom: '3%'}}>
    <div style={{position: 'absolute', paddingLeft: '10px'}}>
      <img src="icon/search.svg" width={16} height={16} />
    </div>
    <input id="btn-search-menuR" placeholder="Tìm kiếm" />
  </div>

      </>
      
    );
  };
  
  export default MenuRight;
  