import { useEffect, useState } from 'react'
import { getAllJemaah } from '../services/jemaahServices';
import { isAxiosError } from 'axios';
import { Jemaah } from '../types/Jemaah';

const useJemaahData = () => {
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
        getJemaah();
    }, [filters]);

    const getJemaah = async () => {
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

    return {
        jemaah, setJemaah,
        filters, setFilters,
        filterOptions,
        mapFilterToParams,
        buildQueryParams,
        getJemaah
    }
};

export default useJemaahData;
