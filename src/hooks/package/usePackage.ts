import { useEffect, useState } from "react";
import { Package } from "../../types/Package";
import { getAllPackages } from "../../services/packagesServices";
import { isAxiosError } from "axios";

const usePackage = () => {
    const [packages, setPackages] = useState<Package[]>();
    const [filter, setFilter] = useState('active'); //Mengambil paket umroh yang sudah aktif saja

    useEffect(() => {
        //Fungsi untuk mengambil data paket umroh
        const fetchPackages = async () => {
            try {
                const res = await getAllPackages(filter);
                console.log(res);
                setPackages(res.data.data);
            } catch (error) {
                if (isAxiosError(error)) {
                    console.log(error.response?.data);
                }
            }
        };

        fetchPackages();
    }, []);

    return {
        packages, setPackages,
        filter, setFilter
    };
};

export default usePackage;
