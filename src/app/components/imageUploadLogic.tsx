'use client'; // Thêm dòng này để đánh dấu đây là client component
import React, { useState } from 'react';
const CombinedUploadComponent: React.FC = () => {
  // State để lưu trữ URL của các ảnh preview
  const [imagePreviews, setImagePreviews] = useState<string[]>(Array(5).fill(''));

  // State để lưu trữ tên của tệp được tải lên
  const [fileName, setFileName] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Hàm xử lý upload và preview hình ảnh
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newPreviews = [...imagePreviews];
        newPreviews[index] = reader.result as string;
        setImagePreviews(newPreviews);
      };
      reader.readAsDataURL(file);
    }
  };

  // Hàm để hiển thị tên tệp khi tải lên
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);

      // Kiểm tra dung lượng tệp (200MB)
      if (file.size > 200 * 1024 * 1024) {
        setErrorMessage('Tệp quá lớn. Vui lòng chọn tệp nhỏ hơn 200MB.');
      } else {
        setErrorMessage('');
      }
    }
  };

  // Hàm để kích hoạt input file khi click vào box
  const triggerFileInput = (index: number) => {
    document.getElementById(`file-input-${index}`)?.click();
  };

  // Hàm để kích hoạt input file khi click vào .body-upload-file
  const triggerFileUpload = () => {
    document.getElementById('file-upload')?.click();
  };

  return (
    <div className="combined-upload-container">
      <div className="d-flex flex-column justify-content-center" style={{ gap: 8 }}>
        <span className="title-grdonggop">Hình ảnh</span>
        <div className="d-flex" style={{ gap: 8 }}>
          {[0, 1, 2, 3, 4].map((index) => (
            <div key={index} className="box" onClick={() => triggerFileInput(index)}>
              {imagePreviews[index] ? (
                <img src={imagePreviews[index]} alt={`Preview ${index}`} className="uploaded-img" />
              ) : (
                <img src="/icon/Add.svg" alt="Upload" className="icon" />
              )}
              <input
                type="file"
                id={`file-input-${index}`}
                className="file-input"
                style={{ display: 'none' }}
                onChange={(event) => handleImageUpload(event, index)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center" style={{ gap: 8, marginTop: '20px' }}>
        <span className="title-grdonggop">Tệp</span>
        <div className="body-upload-file d-flex align-items-center flex-column" id="upload-container" onClick={triggerFileUpload}>
          <img src="icon/Paper Upload.svg" width={40} height={40} />
          <input type="file" id="file-upload" onChange={handleFileUpload} style={{ display: 'none' }} />
          <div className="d-flex flex-column align-items-center" style={{ gap: 8 }}>
            <span className="text-thatep"> Bấm hoặc kéo thả tệp vào đây để tải lên </span>
            <span className="text-dinhdang"> Hỗ trợ định dạng: PNG, JPG, PDF, DOC, XLSX, TXT... </span>
            <span className="text-dinhdang"> Dung lượng tối đa: 200MB </span>
          </div>
        </div>
        <div id="file-name" className="file-name">{fileName && `Tên tệp: ${fileName}`}</div>
        <div id="error-message" className="error-message">{errorMessage}</div>
      </div>
    </div>
  );
};

export default CombinedUploadComponent;
