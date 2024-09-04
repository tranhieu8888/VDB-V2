'use client'; 
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ReactDOM from 'react-dom';


  const FormQuanLyDongGop: React.FC = () => {
    const [showForm, setShowForm] = useState(false); // State to toggle form visibility
    const [buttonContainer, setButtonContainer] = useState<HTMLElement | null>(null);
  
    const handleClick = () => {
      setShowForm(!showForm); // Toggle form visibility on button click
    };

    useEffect(() => {
      // Tìm kiếm thẻ div với id "groupButton-body-mid" sau khi component mount
      const container = document.getElementById('groupButton-body-mid');
      if (container) {
        setButtonContainer(container);
      }

      const btnQuanlydonggop = document.getElementById("button-gr-body-mid-mngcontribute");
const overlay = document.getElementById("overlay") as HTMLElement;
const managerContribute = document.querySelector(".manager-contribute") as HTMLElement;

if (btnQuanlydonggop && managerContribute && overlay) {
  btnQuanlydonggop.addEventListener("click", function () {
    managerContribute.style.setProperty("display", "flex", "important");
    overlay.style.display = "block";
    document.body.classList.add("no-scroll");
  });
}



    }, []);

    const buttonDiv = (
                  <div onClick={handleClick} id="button-gr-body-mid-mngcontribute" className="button-gr-body-mid d-flex align-items-center">
                    <Image alt='image' src="icon/Paper.svg" width={20} height={20} priority/>
                    <span className="text-group">Quản lý đóng góp</span>
                  </div>

    );


  
    return (
      <div>

      {/* Render nút vào container xác định, nếu không tìm thấy thì không render */}
      {buttonContainer && ReactDOM.createPortal(buttonDiv, buttonContainer)}
  
        {/* Display form if showForm is true */}
        {showForm && (
           <div className="manager-contribute d-flex flex-column" style={{ zIndex: 99999 }}>
           <div className="navbar-donggop d-flex">
             <div className="d-flex justify-content-between" style={{ width: "100%" }}>
               <Image alt='image' src="icon/Back Icon.svg" width={24} height={24} />
               <div className="d-flex" style={{ gap: 10 }}>
                 <span className="text-danhsachdonggop"> Danh sách đóng góp </span>
               </div>
               <Image alt='image' id="close-manager-contribute" src="icon/Close Icon Container.svg" width={24} height={24} />
             </div>
           </div>
           <div className="rectangle"/>
           <div className="navbar-contribute d-flex align-items-center justify-content-between">
             <span className="text-countcontribute"> Tổng số đóng góp: <span style={{ fontWeight: 600 }}>124</span>{" "} nội dung | <span style={{ fontWeight: 600 }}>84</span> hình ảnh | <span style={{ fontWeight: 600 }}>16</span> tệp </span>
             <div className="btn-manager-contribute d-flex align-items-center">
               <Image alt='image' src="icon/Paper Plus.svg" width={20} height={20} />
               <span className="text-donggop">Đóng góp</span>
               <div className="btn-beta d-flex">
                 <span className="text-beta">beta</span>
               </div>
             </div>
           </div>
           <div className="tab-manager-contribute d-flex justify-content-between">
             <div className="tab-mn tab-1mn d-flex flex-column tab-active">
               <span className="title-grcontribute">Tất cả (132)</span>
             </div>
             <div className="tab-mn tab-2mn d-flex flex-column">
               <span className="title-grcontribute">Đã duyệt (98)</span>
             </div>
             <div className="tab-mn tab-3mn d-flex flex-column">
               <span className="title-grcontribute">Chờ duyệt (14)</span>
             </div>
             <div className="tab-mn tab-4mn d-flex flex-column">
               <span className="title-grcontribute">Từ chối (20)</span>
             </div>
           </div>
           <div className="table-responsive">
             <table id="dataTable" className="table align-middle">
               <thead className="table-light">
                 <tr>
                   <th className="title-table-mrcontribute" scope="col"> Ngày </th>
                   <th className="title-table-mrcontribute" scope="col"> Người đóng góp </th>
                   <th className="title-table-mrcontribute" scope="col"> Nội dung đóng góp </th>
                   <th className="title-table-mrcontribute" scope="col"> Trạng thái </th>
                   <th className="title-table-mrcontribute" scope="col" />
                 </tr>
               </thead>
               <tbody className="text-center">
                 <tr style={{ height: 80 }}>
                   <td className="text-days">21/05/2024</td>
                   <td>
                     <Image alt='image' src="icon/Ellipse 2655.svg" width={40} height={40} />
                     <span className="text-fullname">Nguyễn Đức Quân</span>
                   </td>
                   <td>
                     <div className="d-flex" style={{ gap: 8, position: "relative" }}>
                       <div className="d-flex">
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                         <div className="image-migmore">
                           <Image alt='image' style={{ position: "absolute" }} src="icon/mingcute_more-1-fill.svg" width={16} height={16} />
                         </div>
                       </div>
                       <div className="d-flex">
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                         <div className="image-migmore">
                           <Image alt='image' style={{ position: "absolute" }} src="icon/mingcute_more-1-fill.svg" width={16} height={16} />
                         </div>
                       </div>
                       <div>
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                       </div>
                       <div className="d-flex">
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                         <div className="image-migmore">
                           <Image alt='image' style={{ position: "absolute" }} src="icon/mingcute_more-1-fill.svg" width={16} height={16} />
                         </div>
                       </div>
                       <div>
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                       </div>
                     </div>
                   </td>
                   <td>
                     <div className="statusaccept d-flex justify-content-center">
                       <span className="text-status-contribute">Đã duyệt</span>
                     </div>
                   </td>
                   <td>
                     <div className="d-flex" style={{ gap: 16 }}>
                       <Image alt='image' style={{ cursor: "pointer" }} src="icon/ci_note-edit.svg" width={20} height={20} />
                       <Image alt='image' style={{ cursor: "pointer" }} src="icon/lucide_trash.svg" width={20} height={20} />
                     </div>
                   </td>
                 </tr>
                 <tr style={{ height: 80 }}>
                   <td className="text-days">21/05/2024</td>
                   <td>
                     <Image alt='image' src="icon/Ellipse 2655.svg" width={40} height={40} />
                     <span className="text-fullname">Nguyễn Đức Quân</span>
                   </td>
                   <td className="box-text">
                     <span className="ellipsis"> Canvanex là một công cụ thiết kế đồ họa trực tuyến mạnh mẽ và dễ sử dụng, được thiết kế để giúp người dùng tạo ra các sản phẩm đồ họa chuyên nghiệp mà không cần có kiến thức sâu về thiết kế. Với giao diện thân thiện và trực quan, Canvanex cung cấp hàng ngàn mẫu thiết kế đa dạng, từ poster, banner, đến bài thuyết trình và bài đăng trên mạng xã hội. Người dùng có thể dễ dàng tùy chỉnh các mẫu này bằng cách kéo và thả các yếu tố thiết kế, thay đổi văn bản, màu sắc, và hình ảnh theo ý thích. </span> {/* <span>abc</span> */}
                   </td>
                   <td>
                     <div className="statuswaiting d-flex justify-content-center">
                       <span className="text-status-contribute"> Chờ duyệt </span>
                     </div>
                   </td>
                   <td>
                     <div className="d-flex" style={{ gap: 16 }}>
                       <Image alt='image' style={{ cursor: "pointer" }} src="icon/ci_note-edit.svg" width={20} height={20} />
                       <Image alt='image' style={{ cursor: "pointer" }} src="icon/lucide_trash.svg" width={20} height={20} />
                     </div>
                   </td>
                 </tr>
                 <tr style={{ height: 80 }}>
                   <td className="text-days">21/05/2024</td>
                   <td>
                     <Image alt='image' src="icon/Ellipse 2655.svg" width={40} height={40} />
                     <span className="text-fullname">Nguyễn Đức Quân</span>
                   </td>
                   <td>
                     <div className="d-flex" style={{ gap: 16, position: "relative" }}>
                       <div className="d-flex flex-column align-items-center" style={{ gap: 8 }}>
                         <Image alt='image' src="icon/pdf 1.svg" width={40} height={40} />
                         <span style={{
                             fontWeight: 400,
                             fontSize: 12,
                             lineHeight: "14.52px"
                           }}> Chứng nhận ĐKKD.pdf </span>
                       </div>
                       <div className="d-flex flex-column align-items-center" style={{ gap: 8 }}>
                         <Image alt='image' src="icon/pdf 1.svg" width={40} height={40} />
                         <span style={{
                             fontWeight: 400,
                             fontSize: 12,
                             lineHeight: "14.52px"
                           }}> Chứng nhận ĐKKD.pdf </span>
                       </div>
                       <div className="d-flex flex-column align-items-center" style={{ gap: 8 }}>
                         <Image alt='image' src="icon/pdf 1.svg" width={40} height={40} />
                         <span style={{
                             fontWeight: 400,
                             fontSize: 12,
                             lineHeight: "14.52px"
                           }}> Chứng nhận ĐKKD.pdf </span>
                       </div>
                     </div>
                   </td>
                   <td>
                     <div className="statusrefuse d-flex justify-content-center">
                       <span className="text-status-contribute">Từ chối</span>
                     </div>
                   </td>
                   <td>
                     <div className="d-flex" style={{ gap: 16 }}>
                       <Image alt='image' style={{ cursor: "pointer" }} src="icon/ci_note-edit.svg" width={20} height={20} />
                       <Image alt='image' style={{ cursor: "pointer" }} src="icon/lucide_trash.svg" width={20} height={20} />
                     </div>
                   </td>
                 </tr>  
                  <tr style={{ height: 80 }}>
                    <td className="text-days">21/05/2024</td>
                   <td>
                     <Image alt='image' src="icon/Ellipse 2655.svg" width={40} height={40} />
                     <span className="text-fullname">Nguyễn Đức Quân</span>
                   </td>
                   <td>
                     <div className="d-flex" style={{ gap: 8, position: "relative" }}>
                       <div className="d-flex">
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                         <div className="image-migmore">
                           <Image alt='image' style={{ position: "absolute" }} src="icon/mingcute_more-1-fill.svg" width={16} height={16} />
                         </div>
                       </div>
                       <div className="d-flex">
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                         <div className="image-migmore">
                           <Image alt='image' style={{ position: "absolute" }} src="icon/mingcute_more-1-fill.svg" width={16} height={16} />
                         </div>
                       </div>
                       <div>
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                       </div>
                       <div className="d-flex">
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                         <div className="image-migmore">
                           <Image alt='image' style={{ position: "absolute" }} src="icon/mingcute_more-1-fill.svg" width={16} height={16} />
                         </div>
                       </div>
                       <div>
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                       </div>
                     </div>
                   </td>
                   <td>
                     <div className="statusrefuse d-flex justify-content-center">
                       <span className="text-status-contribute">Từ chối</span>
                     </div>
                   </td>
                   <td>
                     <div className="d-flex" style={{ gap: 16 }}>
                       <Image alt='image' style={{ cursor: "pointer" }} src="icon/ci_note-edit.svg" width={20} height={20} />
                       <Image alt='image' style={{ cursor: "pointer" }} src="icon/lucide_trash.svg" width={20} height={20} />
                     </div>
                   </td>
                 </tr>
                 <tr style={{ height: 80 }}>
                   <td className="text-days">21/05/2024</td>
                   <td>
                     <Image alt='image' src="icon/Ellipse 2655.svg" width={40} height={40} />
                     <span className="text-fullname">Nguyễn Đức Quân</span>
                   </td>
                   <td>
                     <div className="d-flex" style={{ gap: 8, position: "relative" }}>
                       <div className="d-flex">
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                         <div className="image-migmore">
                           <Image alt='image' style={{ position: "absolute" }} src="icon/mingcute_more-1-fill.svg" width={16} height={16} />
                         </div>
                       </div>
                       <div className="d-flex">
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                         <div className="image-migmore">
                           <Image alt='image' style={{ position: "absolute" }} src="icon/mingcute_more-1-fill.svg" width={16} height={16} />
                         </div>
                       </div>
                       <div>
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                       </div>
                       <div className="d-flex">
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                         <div className="image-migmore">
                           <Image alt='image' style={{ position: "absolute" }} src="icon/mingcute_more-1-fill.svg" width={16} height={16} />
                         </div>
                       </div>
                       <div>
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                       </div>
                     </div>
                   </td>
                   <td>
                     <div className="statusrefuse d-flex justify-content-center">
                       <span className="text-status-contribute">Từ chối</span>
                     </div>
                   </td>
                   <td>
                     <div className="d-flex" style={{ gap: 16 }}>
                       <Image alt='image' style={{ cursor: "pointer" }} src="icon/ci_note-edit.svg" width={20} height={20} />
                       <Image alt='image' style={{ cursor: "pointer" }} src="icon/lucide_trash.svg" width={20} height={20} />
                     </div>
                   </td>
                 </tr>
                 <tr style={{ height: 80 }}>
                   <td className="text-days">21/05/2024</td>
                   <td>
                     <Image alt='image' src="icon/Ellipse 2655.svg" width={40} height={40} />
                     <span className="text-fullname">Nguyễn Đức Quân</span>
                   </td>
                   <td>
                     <div className="d-flex" style={{ gap: 8, position: "relative" }}>
                       <div className="d-flex">
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                         <div className="image-migmore">
                           <Image alt='image' style={{ position: "absolute" }} src="icon/mingcute_more-1-fill.svg" width={16} height={16} />
                         </div>
                       </div>
                       <div className="d-flex">
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                         <div className="image-migmore">
                           <Image alt='image' style={{ position: "absolute" }} src="icon/mingcute_more-1-fill.svg" width={16} height={16} />
                         </div>
                       </div>
                       <div>
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                       </div>
                       <div className="d-flex">
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                         <div className="image-migmore">
                           <Image alt='image' style={{ position: "absolute" }} src="icon/mingcute_more-1-fill.svg" width={16} height={16} />
                         </div>
                       </div>
                       <div>
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                       </div>
                     </div>
                   </td>
                   <td>
                     <div className="statusrefuse d-flex justify-content-center">
                       <span className="text-status-contribute">Từ chối</span>
                     </div>
                   </td>
                   <td>
                     <div className="d-flex" style={{ gap: 16 }}>
                       <Image alt='image' style={{ cursor: "pointer" }} src="icon/ci_note-edit.svg" width={20} height={20} />
                       <Image alt='image' style={{ cursor: "pointer" }} src="icon/lucide_trash.svg" width={20} height={20} />
                     </div>
                   </td>
                 </tr>
                 <tr style={{ height: 80 }}>
                   <td className="text-days">21/05/2024</td>
                   <td>
                     <Image alt='image' src="icon/Ellipse 2655.svg" width={40} height={40} />
                     <span className="text-fullname">Nguyễn Đức Quân</span>
                   </td>
                   <td>
                     <div className="d-flex" style={{ gap: 8, position: "relative" }}>
                       <div className="d-flex">
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                         <div className="image-migmore">
                           <Image alt='image' style={{ position: "absolute" }} src="icon/mingcute_more-1-fill.svg" width={16} height={16} />
                         </div>
                       </div>
                       <div className="d-flex">
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                         <div className="image-migmore">
                           <Image alt='image' style={{ position: "absolute" }} src="icon/mingcute_more-1-fill.svg" width={16} height={16} />
                         </div>
                       </div>
                       <div>
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                       </div>
                       <div className="d-flex">
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                         <div className="image-migmore">
                           <Image alt='image' style={{ position: "absolute" }} src="icon/mingcute_more-1-fill.svg" width={16} height={16} />
                         </div>
                       </div>
                       <div>
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                       </div>
                     </div>
                   </td>
                   <td>
                     <div className="statusrefuse d-flex justify-content-center">
                       <span className="text-status-contribute">Từ chối</span>
                     </div>
                   </td>
                   <td>
                     <div className="d-flex" style={{ gap: 16 }}>
                       <Image alt='image' style={{ cursor: "pointer" }} src="icon/ci_note-edit.svg" width={20} height={20} />
                       <Image alt='image' style={{ cursor: "pointer" }} src="icon/lucide_trash.svg" width={20} height={20} />
                     </div>
                   </td>
                 </tr>
                 <tr style={{ height: 80 }}>
                   <td className="text-days">21/05/2024</td>
                   <td>
                     <Image alt='image' src="icon/Ellipse 2655.svg" width={40} height={40} />
                     <span className="text-fullname">Nguyễn Đức Quân</span>
                   </td>
                   <td>
                     <div className="d-flex" style={{ gap: 8, position: "relative" }}>
                       <div className="d-flex">
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                         <div className="image-migmore">
                           <Image alt='image' style={{ position: "absolute" }} src="icon/mingcute_more-1-fill.svg" width={16} height={16} />
                         </div>
                       </div>
                       <div className="d-flex">
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                         <div className="image-migmore">
                           <Image alt='image' style={{ position: "absolute" }} src="icon/mingcute_more-1-fill.svg" width={16} height={16} />
                         </div>
                       </div>
                       <div>
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                       </div>
                       <div className="d-flex">
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                         <div className="image-migmore">
                           <Image alt='image' style={{ position: "absolute" }} src="icon/mingcute_more-1-fill.svg" width={16} height={16} />
                         </div>
                       </div>
                       <div>
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                       </div>
                     </div>
                   </td>
                   <td>
                     <div className="statusrefuse d-flex justify-content-center">
                       <span className="text-status-contribute">Từ chối</span>
                     </div>
                   </td>
                   <td>
                     <div className="d-flex" style={{ gap: 16 }}>
                       <Image alt='image' style={{ cursor: "pointer" }} src="icon/ci_note-edit.svg" width={20} height={20} />
                       <Image alt='image' style={{ cursor: "pointer" }} src="icon/lucide_trash.svg" width={20} height={20} />
                     </div>
                   </td>
                 </tr>
                 <tr style={{ height: 80 }}>
                   <td className="text-days">21/05/2024</td>
                   <td>
                     <Image alt='image' src="icon/Ellipse 2655.svg" width={40} height={40} />
                     <span className="text-fullname">Nguyễn Đức Quân</span>
                   </td>
                   <td>
                     <div className="d-flex" style={{ gap: 8, position: "relative" }}>
                       <div className="d-flex">
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                         <div className="image-migmore">
                           <Image alt='image' style={{ position: "absolute" }} src="icon/mingcute_more-1-fill.svg" width={16} height={16} />
                         </div>
                       </div>
                       <div className="d-flex">
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                         <div className="image-migmore">
                           <Image alt='image' style={{ position: "absolute" }} src="icon/mingcute_more-1-fill.svg" width={16} height={16} />
                         </div>
                       </div>
                       <div>
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                       </div>
                       <div className="d-flex">
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                         <div className="image-migmore">
                           <Image alt='image' style={{ position: "absolute" }} src="icon/mingcute_more-1-fill.svg" width={16} height={16} />
                         </div>
                       </div>
                       <div>
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                       </div>
                     </div>
                   </td>
                   <td>
                     <div className="statusrefuse d-flex justify-content-center">
                       <span className="text-status-contribute">Từ chối</span>
                     </div>
                   </td>
                   <td>
                     <div className="d-flex" style={{ gap: 16 }}>
                       <Image alt='image' style={{ cursor: "pointer" }} src="icon/ci_note-edit.svg" width={20} height={20} />
                       <Image alt='image' style={{ cursor: "pointer" }} src="icon/lucide_trash.svg" width={20} height={20} />
                     </div>
                   </td>
                 </tr>
                 <tr style={{ height: 80 }}>
                   <td className="text-days">21/05/2024</td>
                   <td>
                     <Image alt='image' src="icon/Ellipse 2655.svg" width={40} height={40} />
                     <span className="text-fullname">Nguyễn Đức Quân</span>
                   </td>
                   <td>
                     <div className="d-flex" style={{ gap: 8, position: "relative" }}>
                       <div className="d-flex">
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                         <div className="image-migmore">
                           <Image alt='image' style={{ position: "absolute" }} src="icon/mingcute_more-1-fill.svg" width={16} height={16} />
                         </div>
                       </div>
                       <div className="d-flex">
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                         <div className="image-migmore">
                           <Image alt='image' style={{ position: "absolute" }} src="icon/mingcute_more-1-fill.svg" width={16} height={16} />
                         </div>
                       </div>
                       <div>
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                       </div>
                       <div className="d-flex">
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                         <div className="image-migmore">
                           <Image alt='image' style={{ position: "absolute" }} src="icon/mingcute_more-1-fill.svg" width={16} height={16} />
                         </div>
                       </div>
                       <div>
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                       </div>
                     </div>
                   </td>
                   <td>
                     <div className="statusrefuse d-flex justify-content-center">
                       <span className="text-status-contribute">Từ chối</span>
                     </div>
                   </td>
                   <td>
                     <div className="d-flex" style={{ gap: 16 }}>
                       <Image alt='image' style={{ cursor: "pointer" }} src="icon/ci_note-edit.svg" width={20} height={20} />
                       <Image alt='image' style={{ cursor: "pointer" }} src="icon/lucide_trash.svg" width={20} height={20} />
                     </div>
                   </td>
                 </tr>
                 <tr style={{ height: 80 }}>
                   <td className="text-days">21/05/2024</td>
                   <td>
                     <Image alt='image' src="icon/Ellipse 2655.svg" width={40} height={40} />
                     <span className="text-fullname">Nguyễn Đức Quân</span>
                   </td>
                   <td>
                     <div className="d-flex" style={{ gap: 8, position: "relative" }}>
                       <div className="d-flex">
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                         <div className="image-migmore">
                           <Image alt='image' style={{ position: "absolute" }} src="icon/mingcute_more-1-fill.svg" width={16} height={16} />
                         </div>
                       </div>
                       <div className="d-flex">
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                         <div className="image-migmore">
                           <Image alt='image' style={{ position: "absolute" }} src="icon/mingcute_more-1-fill.svg" width={16} height={16} />
                         </div>
                       </div>
                       <div>
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                       </div>
                       <div className="d-flex">
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                         <div className="image-migmore">
                           <Image alt='image' style={{ position: "absolute" }} src="icon/mingcute_more-1-fill.svg" width={16} height={16} />
                         </div>
                       </div>
                       <div>
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                       </div>
                     </div>
                   </td>
                   <td>
                     <div className="statusrefuse d-flex justify-content-center">
                       <span className="text-status-contribute">Từ chối</span>
                     </div>
                   </td>
                   <td>
                     <div className="d-flex" style={{ gap: 16 }}>
                       <Image alt='image' style={{ cursor: "pointer" }} src="icon/ci_note-edit.svg" width={20} height={20} />
                       <Image alt='image' style={{ cursor: "pointer" }} src="icon/lucide_trash.svg" width={20} height={20} />
                     </div>
                   </td>
                 </tr>
                 <tr style={{ height: 80 }}>
                   <td className="text-days">21/05/2024</td>
                   <td>
                     <Image alt='image' src="icon/Ellipse 2655.svg" width={40} height={40} />
                     <span className="text-fullname">Nguyễn Đức Quân</span>
                   </td>
                   <td>
                     <div className="d-flex" style={{ gap: 8, position: "relative" }}>
                       <div className="d-flex">
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                         <div className="image-migmore">
                           <Image alt='image' style={{ position: "absolute" }} src="icon/mingcute_more-1-fill.svg" width={16} height={16} />
                         </div>
                       </div>
                       <div className="d-flex">
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                         <div className="image-migmore">
                           <Image alt='image' style={{ position: "absolute" }} src="icon/mingcute_more-1-fill.svg" width={16} height={16} />
                         </div>
                       </div>
                       <div>
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                       </div>
                       <div className="d-flex">
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                         <div className="image-migmore">
                           <Image alt='image' style={{ position: "absolute" }} src="icon/mingcute_more-1-fill.svg" width={16} height={16} />
                         </div>
                       </div>
                       <div>
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                       </div>
                     </div>
                   </td>
                   <td>
                     <div className="statusrefuse d-flex justify-content-center">
                       <span className="text-status-contribute">Từ chối</span>
                     </div>
                   </td>
                   <td>
                     <div className="d-flex" style={{ gap: 16 }}>
                       <Image alt='image' style={{ cursor: "pointer" }} src="icon/ci_note-edit.svg" width={20} height={20} />
                       <Image alt='image' style={{ cursor: "pointer" }} src="icon/lucide_trash.svg" width={20} height={20} />
                     </div>
                   </td>
                 </tr>
                 <tr style={{ height: 80 }}>
                   <td className="text-days">21/05/2024</td>
                   <td>
                     <Image alt='image' src="icon/Ellipse 2655.svg" width={40} height={40} />
                     <span className="text-fullname">Nguyễn Đức Quân</span>
                   </td>
                   <td>
                     <div className="d-flex" style={{ gap: 8, position: "relative" }}>
                       <div className="d-flex">
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                         <div className="image-migmore">
                           <Image alt='image' style={{ position: "absolute" }} src="icon/mingcute_more-1-fill.svg" width={16} height={16} />
                         </div>
                       </div>
                       <div className="d-flex">
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                         <div className="image-migmore">
                           <Image alt='image' style={{ position: "absolute" }} src="icon/mingcute_more-1-fill.svg" width={16} height={16} />
                         </div>
                       </div>
                       <div>
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                       </div>
                       <div className="d-flex">
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                         <div className="image-migmore">
                           <Image alt='image' style={{ position: "absolute" }} src="icon/mingcute_more-1-fill.svg" width={16} height={16} />
                         </div>
                       </div>
                       <div>
                         <Image alt='image' src="icon/Rectangle 849.svg" width={64} height={64} />
                       </div>
                     </div>
                   </td>
                   <td>
                     <div className="statusrefuse d-flex justify-content-center">
                       <span className="text-status-contribute">Từ chối</span>
                     </div>
                   </td>
                   <td>
                     <div className="d-flex" style={{ gap: 16 }}>
                       <Image alt='image' style={{ cursor: "pointer" }} src="icon/ci_note-edit.svg" width={20} height={20} />
                       <Image alt='image' style={{ cursor: "pointer" }} src="icon/lucide_trash.svg" width={20} height={20} />
                     </div>
                   </td>
                 </tr>
               </tbody>
             </table>
             <div className="footercontribute d-flex justify-content-between">
               <span className="text-hienthi"> Hiển thị{" "} <span className="text-count" id="count-item-perpage"> 20 </span>{" "} trên{" "} <span className="text-count" id="sumcountItem"> 1.024 </span>{" "} kết quả </span>
               <div>
                 <div>
                   <div className="d-flex align-items-center" style={{ gap: 24 }}>
                     <div className="col">
                       <select id="itemsPerPage" className="form-select-items">
                         <option value={5}>5</option>
                         <option value={10}> 10 </option>
                         <option value={15}>15</option>
                         <option value={20}>20</option>
                       </select>
                     </div>
                     <nav>
                       <ul id="pagination" className="pagination justify-content-center align-items-center">
                         <li className="page-item">
                           <button className="btn-pagination d-flex align-items-center justify-content-center" id="prev">
                             <Image alt='image' style={{ cursor: "pointer" }} src="icon/Chevron Left.svg" width={20} height={20} />
                           </button>
                         </li>
                         <li className="page-item">
                           <span id="pageNumbers" className="pagination" />
                         </li>
                         <li className="page-item">
                           <button className="btn-pagination d-flex align-items-center justify-content-center" id="next">
                             <Image alt='image' style={{
                                 cursor: "pointer",
                                 transform: "rotate(180deg)"
                               }} src="icon/Chevron Left.svg" width={20} height={20} />
                           </button>
                         </li>
                       </ul>
                     </nav>
                   </div>
                   <div id="gotoPageModal" className="modal" tabIndex={-1}>
                     <div className="modal-dialog">
                       <div className="modal-content">
                         <div className="modal-header">
                           <h5 className="modal-title">Go to Page</h5>
                           <button type="button" className="btn-close" />
                         </div>
                         <div className="modal-body">
                           <input type="number" id="gotoPage" className="form-control" placeholder="Enter page number" min={1} />
                         </div>
                         <div className="modal-footer">
                           <button type="button" className="btn btn-primary"> Go </button>
                           <button type="button" className="btn btn-secondary"> Close </button>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
        )}
      </div>
    );
  };



export default FormQuanLyDongGop;