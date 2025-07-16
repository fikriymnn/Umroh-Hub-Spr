import axios from 'axios';
import { Category, Location, Type } from '../types/Departure';

export async function addCategory(data: Category){
    return await axios.post(`${import.meta.env.VITE_PUBLIC_URL}/addCategory`,
        data,
        { withCredentials: true }
    );
};

export async function addType(data: Type){
    return await axios.post(`${import.meta.env.VITE_PUBLIC_URL}/addType`,
        data,
        { withCredentials: true }
    );
};

export async function addLocation(data: Location){
    return await axios.post(`${import.meta.env.VITE_PUBLIC_URL}/addLocation`,
        data ,
        { withCredentials: true }
    );
};

export async function getAllCategory(){
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/getAllCategory`,
        {withCredentials: true}
    );
};

export async function getAllType(){
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/getAllType`,
        {withCredentials: true}
    );
};

export async function getAllLocation(){
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/getAllLocation`,
        {withCredentials: true}
    );
};