import axios from "axios";

export async function getDataDashboard(){
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/getDataDashboardAdmin`,
        {withCredentials: true}
    );
};