import axios from "axios";
import { Package } from "../types/Package";

export const getAllPackages = async (filter: string) => {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/getPackage?package_status=${filter}`,
        {withCredentials: true}
    );
};

export const addPackage = async (data: Package) => {
    return await axios.post(`${import.meta.env.VITE_PUBLIC_URL}/addPackage`, 
        data,
        {withCredentials: true}
    );
};

export const getOnePackage = async (id: number | string) => {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/getOnePackageUmroh/${id}`,
        {withCredentials: true}
    );
};

export const getAllCategory = async () => {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/getAllCategory`)
}; 

export const getAllLocation = async () => {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/getAllLocation`)
}; 

export const getAllType = async () => {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/getAllType`)
}; 