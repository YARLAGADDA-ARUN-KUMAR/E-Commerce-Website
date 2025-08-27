import axios from "axios";

const BaseUrl = 'https://api.escuelajs.co/api/v1';

export const GetAllProducts = async () => {
    const url = `${BaseUrl}/products`;
    try {
        const { data } = await axios.get(url);
        return data;
    } catch (error) {
        console.error("Failed to fetch products:", error);
        throw error;
    }
};