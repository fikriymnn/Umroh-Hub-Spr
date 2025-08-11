/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { Package } from '../../types/Package';
import { useParams } from 'react-router';
import { getOnePackage, rejectedPackage } from '../../services/packagesServices';
import axios, { isAxiosError } from 'axios';

const useDetailPackage = () => {
    const {id} = useParams();
    const [packages, setPackages] = useState<Package>();
    const [currentPage, setCurrentPage] = useState(1);
    const [adminNote, setAdminNote] = useState('');
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
                    const res = await getOnePackage(id);
                    console.log(res);
                    setPackages(res.data.data.detailPackage);
                }
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    console.log(`Error: ${error.response?.data.message}`);
                }
            }
        };

        fetchPackage();
    }, []);

    const handleSubmitReason = async () => {
        try {
            const res = await rejectedPackage(packages?.id, { admin_note: adminNote });
            console.log(res);
            alert('Berhasil kirim alasan penolakan');
        } catch (error) {
            if (isAxiosError(error)) {
                alert(error.response?.data.message);
                console.log(error.response?.data);
            }
        }
    };

    return {
        packages, setPackages,
        currentPage, setCurrentPage,
        itemPages,
        totalPages,
        currentItems,
        adminNote, setAdminNote,
        handleSubmitReason
    };
};

export default useDetailPackage;