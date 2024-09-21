import axios from 'axios';

// Cấu hình Axios
const apiClient = axios.create({
    baseURL: 'https://api.vdiarybook.net/api',
    headers: {
        'X-Custom-Origin': 'https://v2.vdiarybook.net', // Custom header
    },
});

interface Directory {
    name: string;
    icon: string;
}

export interface MenuItem {
    name: string;
    img_icon: string;
}

export interface User {
    id: string;
    full_name: string;
    avatar: string;
    directory: Directory[];
}

// Định nghĩa kiểu trả về từ API
interface ApiUser {
    _id: string;
    full_name: string;
    avatar?: string;
    directory?: {
        value: {
            name: string;
            icon?: string;
        }[];
    };
}

// Hàm gọi API để lấy danh sách người dùng
export const fetchUsers = async (limit: number = 10, page: number = 1, type: string = 'hashtag'): Promise<User[]> => {
    try {
        const response = await apiClient.get('/personals/users', {
            params: {
                limit,
                page,
                type,
            },
        });

        // Trích xuất dữ liệu từ API
        const users: User[] = response.data.data.docs.map((user: ApiUser) => ({
            id: user._id,
            full_name: user.full_name,
            avatar: user.avatar
                ? `https://files.vdiarybook.net/api/files/${user.avatar}`
                : 'https://files.vdiarybook.net/api/files/admin/20240809/bc97377f-37a3-483c-8439-d19a0b147c39.png',
            directory: user.directory?.value.map((val) => ({
                name: val.name,
                icon: val.icon
                    ? `https://api.vdiarybook.net/${val.icon}`
                    : "https://files.vdiarybook.net/api/files/admin/20240809/bc97377f-37a3-483c-8439-d19a0b147c39.png",
            })),
        }));

        return users; // Trả về dữ liệu đã xử lý
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

// Hàm lấy dữ liệu từ API với custom header
export const getMenuData = async () => {
    try {
        // Gọi API với Axios
        const response = await apiClient.get('/menus/all', {
            params: {
                client: 'web',
                list_key: 'search_option',
            },
        });

        // Trích xuất mảng data và lấy name từng phần tử
        const menuData = response.data.data.map((menuData: MenuItem) => ({
            name: menuData.name,
            img_icon: menuData.img_icon
        }));

        return menuData;

    } catch (error) {
        console.error('Error fetching menu data:', error);
        throw error;
    }
};
