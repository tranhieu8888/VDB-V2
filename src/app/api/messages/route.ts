// src/pages/api/messages.ts
import { NextRequest, NextResponse } from 'next/server';

type Message = {
  id: number;       // ID là kiểu number
  sender: string;   // Người gửi tin nhắn
  content: string;  // Nội dung tin nhắn văn bản
  avatar: string;   // Đường dẫn ảnh đại diện
  imageUrl?: string; // Đường dẫn tới hình ảnh (nếu có)
  videoUrl?: string; // Đường dẫn tới video (nếu có)
};


// Biến lưu trữ tin nhắn
let messages: Message[] = [];
let messageIdCounter = 1; // Bộ đếm ID cho tin nhắn

export async function GET() {
  // Trả về danh sách tin nhắn dưới dạng JSON
  return NextResponse.json(messages);
}

export async function POST(req: NextRequest) {
  const { sender, content, avatar, imageUrl, videoUrl } = await req.json();

  // Tạo một ID duy nhất bằng cách tăng bộ đếm
  const newMessageId = messageIdCounter++;

  const newMessage: Message = {
    id: messageIdCounter++, // Sử dụng bộ đếm để tạo ID duy nhất
    sender,
    content,
    avatar,
    imageUrl, // Có thể là undefined nếu không có
    videoUrl  // Có thể là undefined nếu không có
  };

  messages.push(newMessage);

  // Giả lập phản hồi từ AI
  const botMessage: Message = {
    id: messageIdCounter++,
    sender: 'VDB AI',
    content: 'Đây là phản hồi từ bot.',
    avatar: 'icon/image 1.svg',
    imageUrl: 'icon/image 1820.svg', // Đường dẫn đến hình ảnh
    // videoUrl: 'icon/video.mp4', // Có thể sử dụng video thay vì hình ảnh
  };

  messages.push(botMessage);

  return NextResponse.json({ userMessage: newMessage, botMessage });
}

export async function DELETE() {
  // Reset danh sách tin nhắn
  messages = [];
  messageIdCounter = 1; // Reset bộ đếm ID
  return NextResponse.json({ message: 'All messages have been reset' });
}
