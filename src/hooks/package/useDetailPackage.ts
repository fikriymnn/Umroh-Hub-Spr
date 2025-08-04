/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { Package } from '../../types/Package';
import { useParams } from 'react-router';
import { getOnePackageMitra } from '../../services/packagesServices';
import axios from 'axios';

const useDetailPackage = () => {
    const {id} = useParams();
    const [packages, setPackages] = useState<Package>();
    const [currentPage, setCurrentPage] = useState(1);
    const itemPages = 4;

    const schedule = packages?.package_schedules?.flatMap((schedule: any) =>
        schedule.detail_activities.map((activity: any) => ({
            hari: schedule.title,
            image: schedule.image_url,
            aktivitas: activity.activity,
            catatan: activity.note,
            waktu: activity.time,
        }))
    ) || [];
    
    const totalPages = Math.ceil((schedule?.length || 0) / itemPages);
    const startIndex = (currentPage - 1) * itemPages
    const currentItems = schedule.slice(startIndex, startIndex + itemPages)

    useEffect(() => {
        async function fetchPackage() {
            try {
                if (id) {
                    const res = await getOnePackageMitra(id);
                    console.log(res);
                    setPackages(res.data.data);
                }
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    console.log(`Error: ${error.response?.data.message}`);
                }
            }
        };

        fetchPackage();
    }, []);

    return {
        packages, setPackages,
        currentPage, setCurrentPage,
        itemPages,
        totalPages,
        currentItems
    };
};

export default useDetailPackage;