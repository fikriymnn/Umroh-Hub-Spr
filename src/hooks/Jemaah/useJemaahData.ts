import { useEffect, useState } from 'react'
import { getAllJemaah, getJemaahStatistic } from '../../services/jemaahServices';
import { isAxiosError } from 'axios';
import { Jemaah } from '../../types/Jemaah';

const useJemaahData = () => {
    const year = "2025";
    const [statistic, setStatistic] = useState<any[]>([]);
    const [jemaah, setJemaah] = useState<Jemaah[]>([]);
    const [filters, setFilters] = useState({
        gender: '',
        sort: ''
    });
    const filterOptions = ["Terbaru", "Terlama", "Ikhwan", "Akhwat"];

    const mapFilterToParams = (filter: string) => {
        if (filter == 'Ikhwan') {
            return {gender: 'male', sort: ''};
        } else if (filter == 'Akhwat') {
            return {gender: 'female', sort: ''};
        } else if (filter == 'Terbaru') {
            return {gender: '', sort: 'DESC'};
        } else if (filter == 'Terlama') {
            return {gender: '', sort: 'ASC'};
        } else {
            return {gender: '', sort: ''};
        }
    };


    function buildQueryParams(params: Record<string, any>) {
        const query = Object.entries(params)
        .filter(([_, value]) => value !== '' && value !== null && value !== undefined )
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&');
        
        return query;
    };

    useEffect(() => {
        fetchJemaah();
        fetchStatistic();
    }, [filters]);

    const fetchJemaah = async () => {
        try {
            const queryString = buildQueryParams(filters);
            const res = await getAllJemaah(queryString);
            console.log(res);
            setJemaah(res.data.data);
        } catch (error) {
            if (isAxiosError(error)) {
                console.error(error.response?.data);
            }
        }
    };

    const fetchStatistic = async () => {
        try {
            const res = await getJemaahStatistic(year);
            console.log(res);
            setStatistic(res.data.data.monthlyStatistics);
        } catch (error) {
            if (isAxiosError(error)) {
                console.error(error.response?.data.message);
            }
        }
    };

    return {
        statistic, setStatistic,
        jemaah, setJemaah,
        filters, setFilters,
        filterOptions,
        mapFilterToParams,
        buildQueryParams,
        fetchJemaah
    }
};

export default useJemaahData;
