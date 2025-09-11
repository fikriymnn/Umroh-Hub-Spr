import axios from "axios"

export const getAllJemaah = async (queryString: string) => {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/getJamaah?${queryString}`,
        {withCredentials: true}
    );
};

export const getOneJemaah = async (id: number | string) => {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/getJamaahById/${id}`,
        {withCredentials: true}
    );
};