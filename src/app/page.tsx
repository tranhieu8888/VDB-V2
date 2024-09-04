import CarouselClientComponent from './components/CarouselClientComponent'; // Đảm bảo đường dẫn đúng
import ImageUploadComponent from './components/imageUploadLogic'; // Đảm bảo đường dẫn đúng
import MessageInput from './components/MessageInput'; 
import Image from "next/image";
import React from 'react';


const HomePage = async () => {
  return (
    <>
      <div className="d-flex" id="main-body">
        <div id="menu-left-body" className="d-flex flex-column">
          <div className="d-flex justify-content-between" id="title-body-leftMenu">
            <span className="title-text">Lịch sử</span>
            <Image alt='image' style={{ cursor: "pointer" }} src="icon/Edit Square.svg" width={20} height={20} priority/>
          </div>
          <div className="d-flex align-items-center" style={{ position: "relative" }}>
            <input id="search-bar-body-leftMenu" type="text" placeholder="Tìm kiếm..." />
            <Image alt='image' src="icon/search.svg" width={24} height={24} style={{ position: "absolute", left: 12 }} priority/>
          </div>
          <span className="title-today">Hôm nay</span>
          <div className="d-flex flex-column align-items-center" style={{ gap: 8 }}>
            <Image alt='image' src="icon/speech-bubble 1.svg" width={100} height={100} priority />
            <span className="title-today" style={{ textAlign: "center" }}> Chưa có cuộc trò chuyện nào. <br /> Hãy bắt đầu ngay nhé! </span>
          </div>
          <div id="btn-chevon" className="d-flex justify-content-center align-items-center">
            <Image alt='image' src="icon/chevron-left.svg" width={12} height={12} priority/>
          </div>
        </div>
        <div id="mid-menu-body" className="mid-menu-body d-flex justify-content-between flex-column mx-auto">
          <div id="btn-chevon-right" className="d-flex justify-content-center align-items-center">
            <Image alt='image' src="icon/chevron-right.svg" width={12} height={12} priority/>
          </div>
          <div className="d-flex flex-column" id="mid-top-body">
            <div className="d-flex" id="title-mid-top-body">
              <div className="d-flex" style={{ gap: 4 }}>
                <span className="title-hello">Chào Hoàng,</span>
                <Image alt='image' src="icon/image 1805.svg" width={32} height={32} priority/>
              </div>
            </div>
            <div className="menu-future d-flex">
              <div className="menu-itemfuture d-flex align-items-center">
                <Image alt='image' className="item-image" src="icon/magic 1.svg" width={32} height={32} priority/>
                <span className="text-future">Tìm kiếm với AI</span>
              </div>
              <div className="menu-itemfuture d-flex align-items-center">
                <Image alt='image' className="item-image" src="icon/inbox 1.svg" width={32} height={32} priority/>
                <span className="text-future">Tải tệp lên</span>
              </div>
              <div className="menu-itemfuture d-flex align-items-center">
                <Image alt='image' className="item-image" src="icon/feather-pen 1.svg" width={32} height={32} priority/>
                <span className="text-future">Viết nội dung</span>
              </div>
              <div className="menu-itemfuture d-flex align-items-center">
                <Image alt='image' className="item-image" src="icon/mandala 1.svg" width={32} height={32} priority/>
                <span className="text-future">Sáng tạo nghệ thuật</span>
              </div>
            </div>
          </div>
          <div id="messages" className="d-flex flex-column"/>
          <div style={{ marginTop: 10 }}>
            <div className="d-flex flex-column">
              <div className="d-flex">
                <div className="scroll-container d-flex flex-column">
                  <div className="owl-carousel owl-theme image-users d-flex">
                    <div>
                      <Image alt='image' className="item-image" src="icon/image 1801.svg" width={40} height={40} draggable="false" priority/>
                    </div>
                    <Image alt='image' className="item-image" src="icon/image 1801.svg" width={40} height={40} draggable="false" priority/>
                    <Image alt='image' className="item-image" src="icon/image 1801.svg" width={40} height={40} draggable="false" priority/>
                    <Image alt='image' className="item-image" src="icon/image 1801.svg" width={40} height={40} draggable="false" priority/>
                    <Image alt='image' className="item-image" src="icon/image 1801.svg" width={40} height={40} draggable="false" priority/>
                    <Image alt='image' className="item-image" src="icon/image 1801.svg" width={40} height={40} draggable="false" priority/>
                    <Image alt='image' className="item-image" src="icon/image 1801.svg" width={40} height={40} draggable="false" priority/>
                    <Image alt='image' className="item-image" src="icon/image 1801.svg" width={40} height={40} draggable="false" priority/>
                    <Image alt='image' className="item-image" src="icon/image 1801.svg" width={40} height={40} draggable="false" priority/>
                    <Image alt='image' className="item-image" src="icon/image 1801.svg" width={40} height={40} draggable="false" priority/>
                    <Image alt='image' className="item-image" src="icon/image 1801.svg" width={40} height={40} draggable="false" priority/>
                    <Image alt='image' className="item-image" src="icon/image 1801.svg" width={40} height={40} draggable="false" priority/>
                    <Image alt='image' className="item-image" src="icon/image 1801.svg" width={40} height={40} draggable="false" priority/>
                    <Image alt='image' className="item-image" src="icon/image 1801.svg" width={40} height={40} draggable="false" priority/>
                  </div>
                  <div className="d-flex align-items-center" style={{ gap: 8, height: 38 }}>
                    <span className="title-topic">Gợi ý chủ đề:</span>
                    <div className="owl-carousel">
                      <div className="full-suggest d-flex">
                        <div className="items-suggest d-flex">
                          <div className="child-items-suggest d-flex align-items-center">
                            <Image alt='image' src="icon/luggage 1.svg" width={20} height={20} priority/>
                            <span className="text-topic">Du lịch</span>
                          </div>
                        </div>
                      </div>
                      <div className="full-suggest d-flex">
                        <div className="items-suggest d-flex">
                          <div className="child-items-suggest d-flex align-items-center">
                            <Image alt='image' src="icon/luggage 1.svg" width={20} height={20} priority/>
                            <span className="text-topic">Ẩm thực</span>
                          </div>
                        </div>
                      </div>
                      <div className="full-suggest d-flex">
                        <div className="items-suggest d-flex">
                          <div className="child-items-suggest d-flex align-items-center">
                            <Image alt='image' src="icon/luggage 1.svg" width={20} height={20} priority/>
                            <span className="text-topic">Công nghệ</span>
                          </div>
                        </div>
                      </div>
                      <div className="full-suggest d-flex">
                        <div className="items-suggest d-flex">
                          <div className="child-items-suggest d-flex align-items-center">
                            <Image alt='image' src="icon/luggage 1.svg" width={20} height={20} priority/>
                            <span className="text-topic">Thời trang</span>
                          </div>
                        </div>
                      </div>
                      <div className="full-suggest d-flex">
                        <div className="items-suggest d-flex">
                          <div className="child-items-suggest d-flex align-items-center">
                            <Image alt='image' src="icon/luggage 1.svg" width={20} height={20} priority/>
                            <span className="text-topic">Thể thao</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
                <span className="hover-text">/timlietsi</span>
                <span className="hover-text">/timnhanthan</span>
                <span className="hover-text">/timtrelac</span>
                <span className="hover-text">/timmolietsi</span>
                <span className="hover-text">/timdongdoithatlac</span>
            </div>
            <div className="d-flex flex-column" id="mid-bottom-body">
              <div className="contain-groupbtn-bdmid d-flex flex-column">
                <div id="groupButton-body-mid" className="groupButton-body-mid d-flex">
                  <div id="button-gr-body-mid-setting" className="button-gr-body-mid d-flex align-items-center">
                    <Image alt='image' src="icon/Setting.svg" width={20} height={20} priority/>
                    <span className="text-group">Cài đặt</span>
                    <div className="menu-setting d-flex flex-column">
                      <div className="menu-dropdown d-flex flex-column">
                        <span className="text-group">Ngôn ngữ phản hồi</span>
                        <div className="dropdown">
                          <button className="btn-dropdown d-flex align-items-center justify-content-between" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="text-group">Tiếng Việt</span>
                            <Image alt='image' id="close-contribute" src="icon/Chevron Down.svg" width={20} height={20} />
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#"> Tiếng Anh </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="btn-setting d-flex btn-share align-items-center">
                        <Image alt='image' src="icon/fluent_share-28-filled.svg" width={20} height={20} />
                        <span className="text-group">Chia sẻ cuộc trò chuyện</span>
                      </div>
                      <div className="btn-setting d-flex btn-magic align-items-center">
                        <Image alt='image' src="icon/fa-solid_magic.svg" width={20} height={20} />
                        <span className="text-group">Cá nhân hoá trợ lý AI</span>
                      </div>
                    </div>
                  </div>
                  <div id="button-gr-body-mid-mngcontribute" className="button-gr-body-mid d-flex align-items-center">
                    <Image alt='image' src="icon/Paper.svg" width={20} height={20} priority/>
                    <span className="text-group">Quản lý đóng góp</span>
                  </div>
                  <div id="button-gr-body-mid-contribute" className="button-gr-body-mid d-flex align-items-center">
                    <Image alt='image' src="icon/Paper Plus.svg" width={20} height={20} priority/>
                    <span className="text-group">Đóng góp</span>
                    <div className="btn-beta d-flex">
                      <span className="text-beta">beta</span>
                    </div>
                  </div>
                </div>
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
                        </tr>  <tr style={{ height: 80 }}>
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
                <div className="contribute d-flex justify-content-center flex-column" style={{ zIndex: 99999 }}>
                  <div className="d-flex align-items-center" style={{ gap: 16, width: "100%" }}>
                    <div className="d-flex justify-content-between align-items-center" style={{ width: "100%" }}>
                      <div className="d-flex justify-content-center" style={{ gap: 10, padding: "0 0 0 24px", width: "100%" }}>
                        <span className="text-btndonggop">Đóng góp</span>
                      </div>
                      <Image alt='image' id="close-contributes" src="icon/Group 81344.svg" width={24} height={24}/>
                    </div>
                  </div>
                  <div className="rectangle" style={{ border: "1px solid #ecf0f1" }} />
                  <div className="textbox-content d-flex flex-column" style={{ gap: 8 }}>
                    <span className="title-grdonggop">Nội dung</span>
                    <textarea id="textbox-contribute" placeholder="Nhập nội dung" defaultValue={""} />
                  </div>
                  <ImageUploadComponent />
                  <button className="btn-xacnhan-contribute">Xác nhận</button>
                </div>
                <MessageInput />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CarouselClientComponent /> 
    </>
  );
};

export default HomePage;
