"use client";

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

type Message = {
  id: number;
  sender: string;
  content: string;
  avatar: string;
};



const MessageInput: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [chat00Div, setChat00Div] = useState<HTMLElement | null>(null); // Sử dụng state để lưu trữ phần tử chat00


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
        { ...newUserMessage, avatar: userAvatar }, // Cập nhật avatar cho tin nhắn người dùng
        { ...botMessage } // Cập nhật avatar cho tin nhắn bot
      ]);

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
          <img src={message.avatar} alt="Avatar" className="avatar" />
          <div className="message-content">{message.content}</div>
        </div>
      ))}
    </div>
  );



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
          />
          <div className="d-flex" style={{ position: 'absolute', bottom: 10, right: 10, gap: 10 }}>
            <a href="#" onClick={handleSendText}>
              <img src="icon/mingcute_send-line.svg" width={20} height={20} alt="Send" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageInput;
