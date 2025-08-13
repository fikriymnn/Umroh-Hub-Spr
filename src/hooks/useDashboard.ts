import { useEffect, useState } from "react";
import { Dashboard } from "../types/Dashboard";
import { getDataDashboard } from "../services/dashboardServices";
import { isAxiosError } from "axios";

const useDashboard = () => {
    const [dataDashboard, setDataDashboard] = useState<Dashboard>();

    useEffect(() => {
        const fetchDataDashboard = async () => {
            try {
                const res = getDataDashboard();
                console.log(res);
                setDataDashboard((await res).data.data);
            } catch (error) {
                if (isAxiosError(error)) {
                    console.error(error.response?.data.message);
                }
            }
        };

        fetchDataDashboard();
    }, []);

    return {
        dataDashboard, setDataDashboard
    };
};

export default useDashboard;
