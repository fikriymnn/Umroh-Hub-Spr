import { useEffect, useState } from "react";
import { Package } from "../../types/Package";
import { getAllPackages } from "../../services/packagesServices";
import { isAxiosError } from "axios";

type PackageFilter = 'checked' | 'active' | 'rejected';

const useNewPackage = () => {
    const [packages, setPackages] = useState<Package[]>();
    const [filter, setFilter] = useState('checked');

    useEffect(() => {
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
    }, [filter]);

    const handleFilter = (newFilter: PackageFilter) => {
        setFilter(newFilter);
    };

    return {
        packages, setPackages,
        filter, setFilter,
        handleFilter
    };
};

export default useNewPackage;
