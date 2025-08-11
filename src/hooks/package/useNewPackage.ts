import { useEffect, useState } from "react";
import { Package } from "../../types/Package";
import { getAllPackages } from "../../services/packagesServices";
import { isAxiosError } from "axios";
import { useNavigate } from "react-router";

type PackageFilter = 'checked' | 'active' | 'rejected';

const useNewPackage = () => {
    const navigate = useNavigate();
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

    const handleDetail = (id: number) => {
        navigate(`/PackageDetail/NewPackage/${id}`);
    };

    return {
        packages, setPackages,
        filter, setFilter,
        handleFilter,
        handleDetail
    };
};

export default useNewPackage;
