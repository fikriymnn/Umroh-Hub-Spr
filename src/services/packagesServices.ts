import axios from "axios";
import { Package } from "../types/Package";

export const getAllPackages = async (filter: string) => {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/getPackage?package_status=${filter}`,
        {withCredentials: true}
    );
};

export const getOnePackage = async (id: number | string) => {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/getOnePackageUmroh/${id}`,
        {withCredentials: true}
    );
};

export const rejectedPackage = async (id: number | undefined, payload: { admin_note: string }) => {
    return await axios.put(`${import.meta.env.VITE_PUBLIC_URL}/rejectPackage/${id}`,
        payload,
        {withCredentials: true}
    );
};

export const acceptPackage = async (id: number | undefined, payload: { package_status: string }) => {
    return await axios.put(`${import.meta.env.VITE_PUBLIC_URL}/updateStatusPackage/${id}`,
        payload,
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