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



const MessageInput: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [chat00Div, setChat00Div] = useState<HTMLElement | null>(null); // Sử dụng state để lưu trữ phần tử chat00
  const [typingMessage, setTypingMessage] = useState<string>(''); // Trạng thái tin nhắn đang gõ
  const messagesEndRef = useRef<HTMLDivElement>(null); // Tạo ref cho phần tử cuộn


  const userAvatar = 'icon/Profile.svg'; // Đặt đường dẫn tới ảnh avatar người dùng



  useEffect(() => {
    // Chỉ gọi document.getElementById khi component được render trên client
    const chatElement = document.getElementById('messages');
    setChat00Div(chatElement);
  }, []); // useEffect không có dependency sẽ chỉ chạy một lần khi component mount


  const handleSendText = async () => {
    if (inputValue.trim() === '') return;

    const userMessage = {
      sender: 'user',
      content: inputValue,
      avatar: userAvatar, // Sử dụng avatar người dùng
    };

    // Gửi tin nhắn tới API
    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userMessage),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const { userMessage: newUserMessage, botMessage } = await response.json();

      // Cập nhật state với tin nhắn mới mà không làm mới trang
      setMessages((prevMessages) => [
        ...prevMessages,
        { ...newUserMessage, avatar: userAvatar, sender: 'Bạn' }, // Cập nhật avatar cho tin nhắn người dùng
        { ...botMessage, isTyping: true} // Cập nhật avatar cho tin nhắn AI
      ]);


        // Hiệu ứng đánh máy cho tin nhắn AI
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
          currentIndex++;
          setTypingMessage(botMessage.content.slice(0, currentIndex));
  
          if (currentIndex === botMessage.content.length) {
            clearInterval(typingInterval);
            setMessages(prevMessages =>
              prevMessages.map(msg =>
                msg.id === botMessage.id ? { ...msg, content: botMessage.content, isTyping: false } : msg
              )
            );
          }
        }, 10); // Điều chỉnh tốc độ đánh máy



      setInputValue(''); // Reset lại input sau khi gửi
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };


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
            {message.isTyping ? typingMessage : message.content}
            {message.imageUrl && <a href={message.imageUrl} data-fancybox="gallery" className="image-link"><Image alt='AI Image' src={message.imageUrl} width={300} height={225}/></a>}
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
            <a href="#" onClick={handleSendText}>
              <Image src="icon/mingcute_send-line.svg" width={20} height={20} alt="Send" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageInput;
