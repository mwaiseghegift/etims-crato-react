import { API_ENDPOINTS } from "@/constants/apis";
import axiosInstance from "../config/axios-config";


export const selectCustomerService = async (body) => {
    try {
        const response = await axiosInstance.post(
            API_ENDPOINTS.SELECT_CUSTOMER, body);
        return response.data;
    } catch (error) {
        console.error("Error fetching notice list:", error);
        throw error;
    }
}
