// src/pages/api/messages.ts
import { NextRequest, NextResponse } from 'next/server';

type Message = {
  id: number; // ID sẽ là số
  sender: string;
  content: string;
  avatar: string;
};

// Biến lưu trữ tin nhắn
let messages: Message[] = [];
let messageIdCounter = 1; // Bộ đếm ID cho tin nhắn

export async function GET() {
  // Trả về danh sách tin nhắn dưới dạng JSON
  return NextResponse.json(messages);
}

export async function POST(req: NextRequest) {
  const { sender, content, avatar } = await req.json();

  // Tạo một ID duy nhất bằng cách tăng bộ đếm
  const newMessageId = messageIdCounter++;

  const newMessage: Message = {
    id: newMessageId,
    sender,
    content,
    avatar,
  };

  messages.push(newMessage);

  // Giả lập phản hồi từ bot
  const botMessage: Message = {
    id: messageIdCounter++, // Tăng ID cho tin nhắn bot
    sender: 'bot',
    content: 'Đây là phản hồi từ bot.',
    avatar: 'icon/image 1.svg',
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
