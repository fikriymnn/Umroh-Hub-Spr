import { useEffect, useState } from "react";
import { Dashboard } from "../types/Dashboard";
import { getDataDashboard } from "../services/dashboardServices";
import { isAxiosError } from "axios";
import { getAllPackages } from "../services/packagesServices";
import { Package } from "../types/Package";

const useHomePage = () => {
    //Data dashboard
    const [dataDashboard, setDataDashboard] = useState<Dashboard>();
    //Data paket umroh
    const [packages, setPackages] = useState<Package[]>([]);
    const filter = 'active'; //Mengambil paket yang sudah aktif saja

    useEffect(() => {
        fetchDataDashboard();
        fetchPackage();
    }, []);
    
    //Fungsi untuk mengambil data dashboard
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

    //Fungsi untuk mengambil data paket umroh
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

export default useHomePage;
