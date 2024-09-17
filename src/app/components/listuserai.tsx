"use client";
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

// Định nghĩa interface cho kiểu dữ liệu của user
interface Directory {
    name: string;
    icon: string;
}

interface User {
    id: string;
    full_name: string;
    avatar: string;
    directory: Directory[];
}

const ListUserAI: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true); // Trạng thái tải
    const [activeUserId, setActiveUserId] = useState<string | null>(null); // Trạng thái lưu ID người dùng được chọn

    useEffect(() => {
        // Gọi API để lấy dữ liệu
        const fetchUsers = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(
                    "https://api.vdiarybook.net/api/personals/users?limit=10&page=1&type=hashtag"
                );
                const result = await response.json();
                const fetchedUsers: User[] = result.data.docs.map((user: any) => ({
                    id: user._id,
                    full_name: user.full_name,
                    avatar: user.avatar
                        ? `https://files.vdiarybook.net/api/files/${user.avatar}`
                        : 'https://files.vdiarybook.net/api/files/admin/20240809/bc97377f-37a3-483c-8439-d19a0b147c39.png',
                    directory: user.directory?.value.map((val: any) => ({
                        name: val.name,
                        icon: val.icon
                            ? `https://api.vdiarybook.net/${val.icon}`
                            : "https://files.vdiarybook.net/api/files/admin/20240809/bc97377f-37a3-483c-8439-d19a0b147c39.png",
                    })),
                }));
                setUsers(fetchedUsers);
            } catch (error) {
                console.error("Error fetching users:", error);
            } finally {
                setIsLoading(false); // Kết thúc quá trình tải
            }
        };

        fetchUsers();
    }, []);



    const handleUserClick = (userId: string) => {
        // Nếu đã chọn user, click lại sẽ bỏ chọn
        setActiveUserId(prev => (prev === userId ? null : userId));
    };

    // Phần gợi ý chủ đề (chỉ in 1 lần)
    const renderTopicSuggestions = () => {
        const topics = users.flatMap(user => user.directory || []);
        const uniqueTopics = Array.from(new Set(topics.map(topic => topic.name)));

        return (

            <div id='suggestTopic' className="d-flex align-items-center" style={{ gap: 8, height: 38 }}>
                <span className="title-topic">Gợi ý chủ đề:</span>
                <div className='mainTopic'>
                    {uniqueTopics.map((topic, index) => (
                        <div key={index} className="full-suggest d-flex">
                            <div className="items-suggest d-flex">
                                <div className="child-items-suggest d-flex align-items-center">
                                    <Image alt='image' src="icon/luggage 1.svg" width={20} height={20} priority />
                                    <span className="text-topic">{topic}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



        );
    };

    return (
        <div>
            {/* In danh sách user */}
            <div className="d-flex flex-column">
                <div className="scroll-container d-flex" style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
                    {isLoading ? (
                        <SkeletonTheme baseColor="#eeeeee" highlightColor="#f3f6f4">
                            {/* Hiển thị skeleton loader cho avatar người dùng */}
                            {Array.from({ length: 2 }).map((_, index) => (
                                <div key={index} className="listUsersAI">
                                    <Skeleton circle height={40} width={40} />
                                </div>
                            ))}
                        </SkeletonTheme>
                    ) : (
                        users.map((user) => (
                            <div key={user.id}
                                className={`listUsersAI ${activeUserId === user.id ? 'active' : ''}`} // Thêm class "active" khi được chọn
                                onClick={() => handleUserClick(user.id)} // Bắt sự kiện click
                            >
                                <Image
                                    alt="User avatar"
                                    className="item-image"
                                    src={user.avatar}
                                    width={40}
                                    height={40}
                                    draggable="false"
                                    priority
                                />
                            </div>
                        ))
                    )}
                </div>

                {/* Chỉ in gợi ý chủ đề 1 lần */}
                {renderTopicSuggestions()}
            </div>
        </div>
    );
};

export default ListUserAI;
