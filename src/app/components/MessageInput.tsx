"use client";

import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Image from "next/image";

type Message = {
  id: number;
  sender: string;   // Người gửi tin nhắn
  content: string;  // Nội dung tin nhắn văn bản
  avatar: string;   // Đường dẫn ảnh đại diện
  imageUrl?: string; // Đường dẫn tới hình ảnh (nếu có)
  videoUrl?: string; // Đường dẫn tới video (nếu có)
  isTyping?: boolean; // Thuộc tính isTyping tùy chọn
};

interface HistoryMessage {
  message: string;
  timestamp: string;
}


const MessageInput: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [chat00Div, setChat00Div] = useState<HTMLElement | null>(null); // Sử dụng state để lưu trữ phần tử chat00
  const [hashtagDiv, setHashtagDiv] = useState<HTMLElement | null>(null); // Sử dụng state để lưu trữ phần tử chat00
  const [disableSend, setDisableSend] = useState(false); // Trạng thái điều khiển việc gửi tin nhắn
  const [typingMessage, setTypingMessage] = useState<string>(''); // Trạng thái tin nhắn đang gõ
  const messagesEndRef = useRef<HTMLDivElement>(null); // Tạo ref cho phần tử cuộn
  const [hashtags, setHashtags] = useState<string[]>([]); // Mảng chứa các hashtag được phát hiện
  const userAvatar = 'icon/Profile.svg'; // Đặt đường dẫn tới ảnh avatar người dùng
  const [historyElmMessg, setHistoryElmMessg] = useState<HTMLElement | null>(null); // Sử dụng state để lưu trữ phần tử chat00
  const [historyMessg, setHistoryMessg] = useState<HistoryMessage[]>([]);
  const [activeHistory, setActiveHistory] = useState<number | null>(null);


  useEffect(() => {
    // Chỉ gọi document.getElementById khi component được render trên client
    const chatElement = document.getElementById('messages');
    setChat00Div(chatElement);
  }, []); // useEffect không có dependency sẽ chỉ chạy một lần khi component mount

  useEffect(() => {
    // Chỉ gọi document.getElementById khi component được render trên client
    const hashtagElement = document.getElementById('suggest-hashtags');
    setHashtagDiv(hashtagElement);
  }, []); // useEffect không có dependency sẽ chỉ chạy một lần khi component mount

  // Hàm xử lý khi người dùng click vào hashtag và gửi tin nhắn
  const handleHashtagClick = (hashtag: string) => {
    // Đặt giá trị của hashtag vào input và trực tiếp gửi tin nhắn
    handleSendText(hashtag);  // Gọi hàm gửi tin nhắn với giá trị hashtag
  };

  // Lấy dữ liệu từ sessionStorage khi component được mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedHisMessages = sessionStorage.getItem('historyMessage');
      if (storedHisMessages) {
        setHistoryMessg(JSON.parse(storedHisMessages));
      }
    }
  }, []);



  useEffect(() => {
    // Chỉ gọi document.getElementById khi component được render trên client
    const historyMess = document.getElementById('history-messages');
    setHistoryElmMessg(historyMess);
  }, []); // useEffect không có dependency sẽ chỉ chạy một lần khi component mount

  const handleSendText = async (messageToSend?: string) => {
    // Nếu disableSend đang là true, chặn việc gửi tin nhắn
    if (disableSend) {
      // console.log("Vui lòng đợi 1 giây trước khi gửi tin nhắn tiếp theo.");
      return; // Dừng thực hiện nếu disableSend đang là true
    } else {
      // Khóa chức năng gửi tin nhắn trong 1 giây
      setDisableSend(true);
    }

    const message = messageToSend || inputValue;

    // Lưu danh sách tin nhắn mới vào sessionStorage
    const messagesHistory: HistoryMessage = {
      message: message ? (message.includes('#') ? message.split('#').join('') : message) : '',
      timestamp: new Date().toISOString(),
    };

    const storedHisMessages = sessionStorage.getItem('historyMessage');

    let updatedHisMessages: HistoryMessage[] = storedHisMessages ? JSON.parse(storedHisMessages) : [];

    // Thêm tin nhắn mới vào mảng
    updatedHisMessages = [...updatedHisMessages, messagesHistory];

    // Cập nhật state với mảng mới
    setHistoryMessg(updatedHisMessages);

    // Lưu danh sách tin nhắn mới vào sessionStorage dưới dạng JSON
    sessionStorage.setItem('historyMessage', JSON.stringify(updatedHisMessages));

    if (message.trim() === '') return;
    const textarea = document.getElementById('text-box-midBody') as HTMLTextAreaElement;
    textarea.style.removeProperty('height');
    const userMessage = {
      id: messages.length + 1,
      sender: 'Bạn',
      content: message,
      avatar: userAvatar,
    };
    try {
      const response = await fetch(`https://api.vdiarybook.net/api/posts?search=${encodeURIComponent(message)}`);
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      const result = await response.json();
      const postData = result.data && result.data.length > 0 ? result.data[0] : null;
      const botMessageContent = postData
        ? postData.post_content.replace(/"/g, '')  // Loại bỏ dấu " trong content
        : 'No result found';

      const botMessageImage = postData && postData.post_link_meta && postData.post_link_meta.post_link_images
        ? postData.post_link_meta.post_link_images.replace(/"/g, '')  // Loại bỏ dấu " trong imageUrl
        : null;

      const botMessage = {
        id: messages.length + 2,
        sender: 'VDB AI',
        content: botMessageContent,
        avatar: 'icon/image 1.svg',
        imageUrl: botMessageImage,
        isTyping: true,
      };
      setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);
      // Hiệu ứng đánh máy tối ưu với requestAnimationFrame
      let currentIndex = 0;
      const charStep = Math.max(1, Math.ceil(botMessage.content.length / 50)); // Hiển thị nhiều ký tự hơn mỗi lần

      const typeMessage = () => {
        currentIndex += charStep;
        setTypingMessage(botMessage.content.slice(0, currentIndex));

        if (currentIndex < botMessage.content.length) {
          requestAnimationFrame(typeMessage); // Gọi lại mỗi khung hình để tạo hiệu ứng nhanh
        } else {
          // Khi hoàn thành typing
          setMessages(prevMessages =>
            prevMessages.map(msg =>
              msg.id === botMessage.id ? { ...msg, content: highlightHashtags(botMessage.content), isTyping: false } : msg
            )
          );
          setHashtags(extractHashtags(botMessage.content)); // Trích xuất các hashtag
        }
      };
      requestAnimationFrame(typeMessage); // Bắt đầu hiệu ứng typing
      setInputValue(''); // Reset lại input sau khi gửi
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      // Sau 1 giây, mở khóa gửi tin nhắn
      setTimeout(() => {
        setDisableSend(false); // Mở khóa sau 1 giây
      }, 1000); // 1 giây chờ trước khi người dùng có thể gửi tiếp
    }
  };

  // Hàm xử lý để phát hiện hashtag và bọc thẻ <span>
  const highlightHashtags = (text: string) => {
    return text.replace(/(#\w+)/g, '<span class="hashtag" >$1</span>');
  };

  // Hàm để trích xuất các hashtag từ văn bản
  const extractHashtags = (text: string): string[] => {
    const matches = text.match(/(#\w+)/g); // Tìm tất cả hashtag theo mẫu #từ
    return matches ? matches : []; // Nếu tìm thấy, trả về mảng hashtag, nếu không thì trả về mảng rỗng
  };

  const renderSuggestHashtag = (
    <div className='hashtag-name'>
      {hashtags.length > 0 && hashtags.map((hashtag, index) => (
        <span key={index} className="hover-text" onClick={() => handleHashtagClick(hashtag)}>#{hashtag.split('#')[1]}</span>
      ))}
    </div>
  );

  const renderHistoryMs = (
    <>
      {historyMessg.length > 0 ? (
        <>
          {historyMessg.map((tag, index) => (
            <div key={index} className={`tag-history ${activeHistory === index ? 'active' : ''} d-flex align-items-center justify-content-between`} onClick={() => setActiveHistory(index)}>
              <span id="text-tag-history" className='text-tag-history'>/{tag.message}</span>
              <a href="#"><img src="icon/ic_baseline-more-horiz.svg" width="24" height="24" /></a>
            </div>
          ))}

        </>
      ) : (
        <>
          <Image alt='image' src="icon/speech-bubble 1.svg" width={100} height={100} priority />
          <span className="title-today" style={{ textAlign: "center" }}>
            Chưa có cuộc trò chuyện nào.
            <br />
            Hãy bắt đầu ngay nhé! </span>
        </>
      )}
    </>
  )

  // Tạo phần tử chat-messages
  const chatMessages = (
    <div className="chat-messages">
      {messages.map((message) => (
        <div key={message.id} className="message">
          <div className='message-header-container'>
            <Image src={message.avatar} alt="Avatar" className="avatar" width={24} height={24} />
            <span className='message-header'>{message.sender}</span>
          </div>
          <div className="message-content">
            {message.isTyping ? (
              typingMessage // Hiển thị "đang nhập" nếu tin nhắn đang được gõ
            ) : (
              <div dangerouslySetInnerHTML={{ __html: highlightHashtags(message.content) }}></div> // Chỉ xử lý hashtag
            )}
            {message.imageUrl && <a href={message.imageUrl} data-fancybox="gallery" className="image-link"><img alt='AI Image' src={message.imageUrl} width={300} height={225} /></a>}
            {message.videoUrl && (
              <video controls className="message-video" width={300} height={225}>
                <source src={message.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
          <div ref={messagesEndRef} /> {/* Thẻ div để cuộn đến */}
        </div>
      ))}
    </div>
  );

  const handleKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendText();
    }
  };

  // Cuộn đến cuối nội dung mỗi khi messages thay đổi

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <>
      {historyElmMessg && ReactDOM.createPortal(renderHistoryMs, historyElmMessg)}
      {hashtagDiv && ReactDOM.createPortal(renderSuggestHashtag, hashtagDiv)}
      {chat00Div && ReactDOM.createPortal(chatMessages, chat00Div)}
      <div className="chat-container">
        <div className="d-flex justify-content-between" style={{ position: 'relative' }}>
          <textarea
            placeholder="Nhập từ khóa hoặc nhấn '/' để bắt đầu tìm kiếm"
            id="text-box-midBody"
            className="d-flex"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown} // Thêm sự kiện onKeyDown
            required
          />
          <div className="d-flex" style={{ position: 'absolute', bottom: 10, right: 10, gap: 10 }}>
            {disableSend ? (
              <div className="loader"></div>
            ) : (
              <a href="#" onClick={() => handleSendText()}>
                <Image src="icon/mingcute_send-line.svg" width={20} height={20} alt="Send" />
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageInput;
