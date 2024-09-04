// src/components/CarouselClientComponent.tsx
"use client"; // Đánh dấu đây là Client Component
import { useEffect, useRef, useState } from 'react';

const CarouselClientComponent = () => {

  const isMounted = useRef(false);

  useEffect(() => {
    // Kiểm tra nếu jQuery đã được tải
    if (typeof window !== 'undefined' && window.$) {
      window.$(document).ready(function () {
        window.$(".owl-carousel").owlCarousel({
          margin: 8,
          autoWidth: true,
          autoplaySpeed: 800,
          dots: false,
          responsive: {
            0: {
              items: 1,
            },
            600: {
              items: 2,
            },
            1000: {
              items: 3,
            },
          },
          smartSpeed: 600,
          responsiveRefreshRate: 100,
        });

        // Xử lý khoảng trắng dư thừa
        window.$(".owl-carousel").on("translated.owl.carousel", function () {
          const owlStage = window.$(".owl-stage");
          const owlStageWidth = owlStage.width();
          const owlCarouselWidth = window.$(".owl-carousel").width();

          if (owlStageWidth < owlCarouselWidth) {
            owlStage.css("width", `${owlCarouselWidth}px`);
          }
        });
      });
    }
  }, []); // Chỉ chạy một lần sau khi component mount


  useEffect(() => {
    if (!isMounted.current) {
      //activeclass-navbar
      // add class active child-icon-navbar
      const child_icon_navbar = document.querySelectorAll(".child-icon-navbar") as NodeListOf<HTMLElement>;    
      child_icon_navbar.forEach(function (div) {
          div.addEventListener("click", function () {
              // Xóa lớp 'active' khỏi tất cả các div
              child_icon_navbar.forEach(function (item) {
                  item.classList.remove("active");
              });
              // Thêm lớp 'active' vào div được click
              div.classList.add("active");
          });
      });

      //show/hidden menuleft
      // Khai báo kiểu cho các phần tử DOM
      const scMenu = document.getElementById("sc-menu") as HTMLElement | null;
      const sidebarLeft = document.getElementById("sidebar-left") as HTMLElement | null;

      if (scMenu && sidebarLeft) {
          scMenu.addEventListener("click", () => {
              if (sidebarLeft.style.display !== "none") {
                  sidebarLeft.style.setProperty("display", "none", "important");
              } else {
                  sidebarLeft.style.setProperty("display", "block", "important");
              }
          });
      }

      //animationactive-menuleft
      const menuItems = document.querySelectorAll<HTMLDivElement>(".text-mmenu-left");
      menuItems.forEach((item) => {
          item.addEventListener("click", function (this: HTMLDivElement) {
              menuItems.forEach((box) => box.classList.remove("active"));
              this.classList.add("active");
          });
      });



      //show sub-menuleft
      const trangCanhanLink = document.getElementById("trangcanhan") as HTMLElement | null;
      const subTrangCanhan = document.getElementById("sub-trangcanhan") as HTMLElement | null;
      
      if(trangCanhanLink && subTrangCanhan){
        trangCanhanLink.addEventListener("click", function (event) {
          event.preventDefault();
          subTrangCanhan.classList.toggle("show");
      });
      }
      //showform-Setting
      const btn_setting = document.getElementById("button-gr-body-mid-setting");
      const menuSetting = document.querySelector(".menu-setting");
      if(btn_setting && menuSetting){
        btn_setting.addEventListener("click", function () {
          if (menuSetting.classList.contains("flex-display")) {
              menuSetting.classList.remove("flex-display");
          } else {
              menuSetting.classList.add("flex-display");
          }
      });
      }

      //showform-Quanlydonggop
      const btnQuanlydonggop = document.getElementById("button-gr-body-mid-mngcontribute") as HTMLElement | null;
      const managerContribute = document.querySelector(".manager-contribute") as HTMLElement | null;
      const overlay = document.getElementById("overlay") as HTMLElement | null;
      if (btnQuanlydonggop && managerContribute && overlay) {
        btnQuanlydonggop.addEventListener("click", function () {
          managerContribute.style.setProperty("display", "flex", "important");
          overlay.style.display = "block";
          document.body.classList.add("no-scroll");
        });
      }
      //closeform-Quanlydonggop
      const closeQldg = document.getElementById("close-manager-contribute") as HTMLElement | null;
      if (closeQldg && managerContribute && overlay){
        closeQldg.addEventListener("click", function () {
          managerContribute.style.display = "none";
          overlay.style.display = "none";
          document.body.classList.remove("no-scroll");
      });
      }
      //animationactive-Quanlydonggop
      const tabs = document.querySelectorAll(".tab-mn") as NodeListOf<HTMLElement>;
   
      tabs.forEach((tab) => {
          tab.addEventListener("click", function () {
              tabs.forEach((t) => t.classList.remove("tab-active"));
              this.classList.add("tab-active");
          });
      });

      //phantrang-Quanlydonggop
      // Kiểm tra nếu managerContribute tồn tại trước khi thực thi logic phân trang

if (managerContribute) {
  // Khai báo biến và kiểu dữ liệu
  let currentPage: number = 1;
  let itemsPerPage: number = 10;
  let totalItems: number = 0;
  let totalPages: number = 0;

  // Hàm cập nhật số lượng item mỗi trang
  const updateItemsPerPage = (): void => {
    const itemsPerPageElement = document.getElementById("itemsPerPage") as HTMLInputElement | null;
    if (itemsPerPageElement) {
      itemsPerPage = parseInt(itemsPerPageElement.value);
    }
    updateTotalItems();
    renderPagination();
    renderContent();
  };

  // Hàm cập nhật tổng số item
  const updateTotalItems = (): void => {
    const dataTable = document.querySelectorAll("#dataTable tbody tr");
    totalItems = dataTable.length;
    totalPages = Math.ceil(totalItems / itemsPerPage);

    const countItemPerPageElement = document.getElementById("count-item-perpage");
    const sumcountItemElement = document.getElementById("sumcountItem");
    if (countItemPerPageElement) {
      countItemPerPageElement.textContent = `${itemsPerPage}`;
    }
    if (sumcountItemElement) {
      sumcountItemElement.textContent = `${totalItems}`;
    }
  };

  // Hàm hiển thị phân trang
  const renderPagination = (): void => {
    const pageNumbers = document.getElementById("pageNumbers");
    if (!pageNumbers) return;

    pageNumbers.innerHTML = "";

    if (totalPages <= 10) {
      for (let i = 1; i <= totalPages; i++) {
        if (i === currentPage) {
          pageNumbers.innerHTML += `<li class="page-item active"><span class="page-link">${i}</span></li>`;
        } else {
          pageNumbers.innerHTML += `<li class="page-item"><button class="page-link" onclick="goToPage(${i})">${i}</button></li>`;
        }
      }
    } else {
      if (currentPage <= 5) {
        for (let i = 1; i <= 5; i++) {
          if (i === currentPage) {
            pageNumbers.innerHTML += `<li class="page-item active"><span class="page-link">${i}</span></li>`;
          } else {
            pageNumbers.innerHTML += `<li class="page-item"><button class="page-link" onclick="goToPage(${i})">${i}</button></li>`;
          }
        }
        pageNumbers.innerHTML += `<li class="page-item"><button class="page-link" onclick="showGotoPageModal()">...</button></li>`;
        pageNumbers.innerHTML += `<li class="page-item"><button class="page-link" onclick="goToPage(${totalPages - 1})">${totalPages - 1}</button></li>`;
        pageNumbers.innerHTML += `<li class="page-item"><button class="page-link" onclick="goToPage(${totalPages})">${totalPages}</button></li>`;
      } else if (currentPage > totalPages - 5) {
        pageNumbers.innerHTML += `<li class="page-item"><button class="page-link" onclick="goToPage(1)">1</button></li>`;
        pageNumbers.innerHTML += `<li class="page-item"><button class="page-link" onclick="goToPage(2)">2</button></li>`;
        pageNumbers.innerHTML += `<li class="page-item"><button class="page-link" onclick="showGotoPageModal()">...</button></li>`;
        for (let i = totalPages - 5; i <= totalPages; i++) {
          if (i === currentPage) {
            pageNumbers.innerHTML += `<li class="page-item active"><span class="page-link">${i}</span></li>`;
          } else {
            pageNumbers.innerHTML += `<li class="page-item"><button class="page-link" onclick="goToPage(${i})">${i}</button></li>`;
          }
        }
      } else {
        pageNumbers.innerHTML += `<li class="page-item"><button class="page-link" onclick="goToPage(1)">1</button></li>`;
        pageNumbers.innerHTML += `<li class="page-item"><button class="page-link" onclick="goToPage(2)">2</button></li>`;
        pageNumbers.innerHTML += `<li class="page-item"><button class="page-link" onclick="showGotoPageModal()">...</button></li>`;
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          if (i === currentPage) {
            pageNumbers.innerHTML += `<li class="page-item active"><span class="page-link">${i}</span></li>`;
          } else {
            pageNumbers.innerHTML += `<li class="page-item"><button class="page-link" onclick="goToPage(${i})">${i}</button></li>`;
          }
        }
        pageNumbers.innerHTML += `<li class="page-item"><button class="page-link" onclick="showGotoPageModal()">...</button></li>`;
        pageNumbers.innerHTML += `<li class="page-item"><button class="page-link" onclick="goToPage(${totalPages - 1})">${totalPages - 1}</button></li>`;
        pageNumbers.innerHTML += `<li class="page-item"><button class="page-link" onclick="goToPage(${totalPages})">${totalPages}</button></li>`;
      }
    }

    const prevButton = document.getElementById("prev") as HTMLButtonElement | null;
    const nextButton = document.getElementById("next") as HTMLButtonElement | null;
    if (prevButton) prevButton.disabled = currentPage === 1;
    if (nextButton) nextButton.disabled = currentPage === totalPages;
  };

  // Hàm hiển thị nội dung trang hiện tại
  const renderContent = (): void => {
    const rows = document.querySelectorAll("#dataTable tbody tr");
    rows.forEach((row, index) => {
      if (row instanceof HTMLElement) {
        row.style.display = index >= (currentPage - 1) * itemsPerPage && index < currentPage * itemsPerPage ? "" : "none";
      }
    });
  };

  // Hàm chuyển đến trang cụ thể
  const goToPage = (page: number): void => {
    currentPage = page;
    renderPagination();
    renderContent();
  };

  // Hàm chuyển đến trang trước
  const prevPage = (): void => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  // Hàm chuyển đến trang tiếp theo
  const nextPage = (): void => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  // Hàm hiển thị modal đi đến trang
  const showGotoPageModal = (): void => {
    const gotoPageModal = document.getElementById("gotoPageModal") as HTMLElement | null;
    if (gotoPageModal) {
      gotoPageModal.style.display = "block";
    }
  };

  // Hàm đóng modal đi đến trang
  const closeGotoPageModal = (): void => {
    const gotoPageModal = document.getElementById("gotoPageModal") as HTMLElement | null;
    if (gotoPageModal) {
      gotoPageModal.style.display = "none";
    }
  };

  // Hàm đi đến số trang cụ thể từ input modal
  const goToPageNumber = (): void => {
    const gotoPageInput = document.getElementById("gotoPage") as HTMLInputElement | null;
    if (gotoPageInput) {
      const pageNumber = parseInt(gotoPageInput.value);
      if (pageNumber >= 1 && pageNumber <= totalPages) {
        goToPage(pageNumber);
        closeGotoPageModal();
      } else {
        alert(`Please enter a valid page number between 1 and ${totalPages}`);
      }
    }
  };

  // Khởi tạo trang
  updateItemsPerPage();

   // Gán sự kiện onChange cho select
   const itemsPerPageElement = document.getElementById("itemsPerPage") as HTMLSelectElement | null;
   if (itemsPerPageElement) {
     itemsPerPageElement.addEventListener("change", updateItemsPerPage);
   }


  // Gán sự kiện cho các nút phân trang
  const prevButton = document.getElementById("prev") as HTMLButtonElement | null;
  const nextButton = document.getElementById("next") as HTMLButtonElement | null;
  if (prevButton) {
    prevButton.addEventListener("click", prevPage);
  }
  if (nextButton) {
    nextButton.addEventListener("click", nextPage);
  }

   // Gán sự kiện cho modal
   const closeModalButton = document.querySelector(".btn-close") as HTMLButtonElement | null;
   const goToPageButton = document.querySelector(".btn-primary") as HTMLButtonElement | null;
   if (closeModalButton) {
     closeModalButton.addEventListener("click", closeGotoPageModal);
   }
   if (goToPageButton) {
     goToPageButton.addEventListener("click", goToPageNumber);
   }



// Gán các hàm vào window để có thể truy cập từ HTML
(window as any).goToPage = goToPage;
(window as any).showGotoPageModal = showGotoPageModal;
(window as any).closeGotoPageModal = closeGotoPageModal;
(window as any).goToPageNumber = goToPageNumber;
}


//showform-Donggop
const btnDonggop = document.getElementById("button-gr-body-mid-contribute") as HTMLButtonElement | null;
const formContribute = document.querySelector(".contribute") as HTMLButtonElement | null;
const closeContribute =  document.getElementById("close-contributes") as HTMLButtonElement | null;

if(btnDonggop && formContribute && overlay && closeContribute) {
  btnDonggop.addEventListener("click", function () {
    // Hiển thị phần tử có lớp là 'contribute'
    formContribute.style.setProperty("display", "flex", "important");
  
    // Đặt màu nền của body
    overlay.style.display = "block";
  
    // Thêm lớp 'no-scroll' vào body để ngăn cuộn trang
    document.body.classList.add("no-scroll");
  });

  closeContribute.addEventListener("click", function () {
    formContribute.style.display = "none";
    overlay.style.display = "none";
    document.body.classList.remove("no-scroll");
});



//upload image donggop



}


    

      

    
      

     

     


    const btnChevon = document.getElementById("btn-chevon") as HTMLButtonElement | null;
const menuLeftBody = document.getElementById("menu-left-body") as HTMLElement | null;
const mid_menu_body = document.querySelector(".mid-menu-body") as HTMLElement | null;
const btn_chevon_right = document.getElementById("btn-chevon-right") as HTMLButtonElement | null;

if (btnChevon) {
  btnChevon.addEventListener("click", function () {
    // Kiểm tra xem menu có lớp 'menu-hidden' hay không
    if (menuLeftBody) {
      menuLeftBody.classList.toggle("menu-hidden");
      if (mid_menu_body) {
        mid_menu_body.style.setProperty("width", "100%", "important");
      }
      if (btn_chevon_right) {
        btn_chevon_right.style.setProperty("display", "block", "important");
      }
    }
  });
}

if (btn_chevon_right) {
  btn_chevon_right.addEventListener("click", function () {
    if (menuLeftBody) {
      menuLeftBody.classList.remove("menu-hidden"); // Nếu có thì xóa lớp để hiển thị menu
    }
    if (mid_menu_body) {
      mid_menu_body.style.setProperty("width", "716px", "important");
    }
    if (btn_chevon_right) {
      btn_chevon_right.style.setProperty("display", "none", "important");
    }
  });
}
  isMounted.current = true; // Đánh dấu là đã mount
}

  }, []); // Chỉ chạy một lần sau khi component mount

  return null; // Không trả về HTML nào

};

export default CarouselClientComponent;
