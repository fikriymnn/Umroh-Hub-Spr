import { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Jemaah } from '../../types/Jemaah';
import { getOneJemaah } from '../../services/jemaahServices';
import { isAxiosError } from 'axios';

const useJemaahDetail = () => {
    const {id} = useParams();
    const [jemaah, setJemaah] = useState<Jemaah>();

    useEffect(() => {
        //Fungsi untuk mengambil data jemaah
        const fetchJemaah = async () => {
            try {
                if (id) {
                    const res = await getOneJemaah(id);
                    console.log(res);
                    setJemaah(res.data.data);
                }
            } catch (error) {
                if (isAxiosError(error)) {
                    console.error(error.response?.data.message);
                }
            }
        };

        fetchJemaah();
    }, []);

    return {
        jemaah, setJemaah
    }
};

export default useJemaahDetail;
