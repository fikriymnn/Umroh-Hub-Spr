/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { Package } from '../../types/Package';
import { useParams } from 'react-router';
import { acceptPackage, getOnePackage, rejectedPackage } from '../../services/packagesServices';
import axios, { isAxiosError } from 'axios';

const useDetailPackage = () => {
    const {id} = useParams();
    const [packages, setPackages] = useState<Package>();
    const [currentPage, setCurrentPage] = useState(1);
    const [adminNote, setAdminNote] = useState('');
    const [selectedReasons, setSelectedReasons] = useState<string[]>([]);
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

    const handleRejectPackage = async () => {
        const combinedNote = [...selectedReasons, adminNote]
        .filter(Boolean)
        .join(', ');

        console.log(`Admin Note: ${combinedNote}`);
        
        try {
            const res = await rejectedPackage(packages?.id, { admin_note: combinedNote });
            console.log(res);
            alert('Berhasil kirim alasan penolakan');
        } catch (error) {
            if (isAxiosError(error)) {
                alert(error.response?.data.message);
                console.log(error.response?.data);
            }
        }
    };

    const addReason = (reason: string) => {
        setSelectedReasons((prev) => {
            if (!prev.includes(reason)) {
                return [...prev, reason];
            }
            return prev;
        });
    };

    const handleAddRejectReason = () => {
        const trimmed = adminNote.trim();
        if (trimmed && !selectedReasons.includes(trimmed)) {
            setSelectedReasons([...selectedReasons, trimmed]);
            setAdminNote('');
        }
    };

    const handleAcceptPackage = async (package_status: string) => {
        console.log(`Status paket: ${package_status}`);
        
        try {
            const res = await acceptPackage(packages?.id, {package_status});
            console.log(res);
            alert('Berhasil terima paket umroh');
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
        selectedReasons, setSelectedReasons,
        handleRejectPackage,
        addReason,
        handleAddRejectReason,
        handleAcceptPackage
    };
};

export default useDetailPackage;