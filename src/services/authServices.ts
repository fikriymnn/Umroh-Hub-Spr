import axios from "axios";
import { SuperAdmin } from "../types/SuperAdmin";

export async function Login(data: SuperAdmin) {
    return await axios.post(`${import.meta.env.VITE_PUBLIC_URL}/auth/login/admin`, 
        data,
        { withCredentials: true }
    );
};