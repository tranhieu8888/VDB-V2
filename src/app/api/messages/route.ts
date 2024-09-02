// src/app/api/messages/route.ts
import { NextRequest, NextResponse } from 'next/server';

type Message = {
  id: number;
  sender: string;
  content: string;
  avatar: string;
  imageUrl?: string;
  videoUrl?: string;
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
    id: newMessageId, // Sử dụng bộ đếm để tạo ID duy nhất
    sender,
    content,
    avatar,
    imageUrl,
    videoUrl
  };

  messages.push(newMessage);

  // Giả lập phản hồi từ AI
  const botMessage: Message = {
    id: messageIdCounter++,
    sender: 'VDB AI',
    content: 'Đây là phản hồi từ bot.',
    avatar: 'icon/image 1.svg',
    imageUrl: 'icon/image 1820.svg'
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
