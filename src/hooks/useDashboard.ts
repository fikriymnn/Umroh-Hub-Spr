import { useEffect, useState } from "react";
import { Dashboard } from "../types/Dashboard";
import { getDataDashboard } from "../services/dashboardServices";
import { isAxiosError } from "axios";
import { getAllPackages } from "../services/packagesServices";
import { Package } from "../types/Package";

const useDashboard = () => {
    const [dataDashboard, setDataDashboard] = useState<Dashboard>();
    const [packages, setPackages] = useState<Package[]>([]);
    const filter = 'active';

    useEffect(() => {
        fetchDataDashboard();
        fetchPackage();
    }, []);
    
    const fetchDataDashboard = async () => {
        try {
            const res = await getDataDashboard();
            // console.log(res);
            setDataDashboard(res.data.data);
        } catch (error) {
            if (isAxiosError(error)) {
                console.error(error.response?.data.message);
            }
        }
    };

    const fetchPackage = async () => {
        try {
            const res = await getAllPackages(filter);
            console.log(res);
            setPackages(res.data.data);
        } catch (error) {
            if (isAxiosError(error)) {
                console.error(error.response?.data.message);
            }
        }
    };

    return {
        dataDashboard, setDataDashboard,
        packages, setPackages
    };
};

export default useDashboard;
