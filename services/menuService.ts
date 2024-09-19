import axios from 'axios';

// Hàm lấy dữ liệu từ API với custom header
export const getMenuData = async () => {
    try {
        const response = await axios.get('https://api.vdiarybook.net/api/menus/all?client=web&list_key=search_option', {
            headers: {
                'X-Custom-Origin': 'https://v2.vdiarybook.net',
            },
        });

        // Trích xuất mảng data và lấy name từ từng phần tử
        const menuData = response.data.data.map((item: { name: string; img_icon: string }) => ({
            name: item.name,
            img_icon: item.img_icon
        }));

        // console.log(JSON.stringify(menuData))

        return menuData;


        // return response.data;
    } catch (error) {
        console.error('Error fetching menu data:', error);
        throw error;
    }
};
