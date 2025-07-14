import { useEffect, useState } from 'react'
import { Category, Location, Type } from '../types/Departure';
import { addCategory, addLocation, addType, getAllCategory, getAllLocation, getAllType } from '../services/departureDetailServices';
import { isAxiosError } from 'axios';

const useDepartureDetail = () => {
    const [categorys, setCategorys] = useState<Category[]>([]);
    const [types, setTypes] = useState<Type[]>([]);
    const [locations, setLocations] = useState<Location[]>([]);
    const [categoryName, setCategoryName] = useState('')
    const [typeName, setTypeName] = useState('');
    const [locationName, setLocationName] = useState('');

    useEffect(() => {
        fetchCategory();
        fetchType();
        fetchLocation();
    }, []);

    const fetchCategory = async () => {
        try {
            const res = await getAllCategory();
            console.log(res);
            setCategorys(res.data.data);
        } catch (error) {
            if (isAxiosError(error)) {
                console.log(`Error: ${error}`);
            }
        }
    };

    const fetchType = async () => {
        try {
            const res = await getAllType();
            console.log(res);
            setTypes(res.data.data);
        } catch (error) {
            if (isAxiosError(error)) {
                console.log(`Error: ${error}`);
            }
        }
    };

    const fetchLocation = async () => {
        try {
            const res = await getAllLocation();
            console.log(res);
            setLocations(res.data.data);
        } catch (error) {
            if (isAxiosError(error)) {
                console.log(`Error: ${error}`);
            }
        }
    };

    const submitCategory = async () => {
        try {
            const res = await addCategory({
                category_name: categoryName
            });
            alert('Berhasil kirim data category');
            console.log(res);
        } catch (error) {
            alert('Gagal kirim data category');
            if (isAxiosError(error)) {
                console.log(`Error: ${error}`);
            }
        }
    };

    const submitType = async () => {
        try {
            const res = await addType({
                type_name: typeName
            });
            alert('Berhasil kirim data type');
            console.log(res);
        } catch (error) {
            alert('Gagal kirim data type');
            if (isAxiosError(error)) {
                console.log(`Error: ${error}`);
            }
        }
    };

    const submitLocation = async () => {
        try {
            const res = await addLocation({
                location_name: locationName
            });
            alert('Berhasil kirim data location');
            console.log(res);
        } catch (error) {
            alert('Gagal kirim data location');
            if (isAxiosError(error)) {
                console.log(`Error: ${error}`);
            }
        }
    };

    return {
        categorys, setCategorys,
        types, setTypes,
        locations, setLocations,
        categoryName, setCategoryName,
        typeName, setTypeName,
        locationName, setLocationName,
        submitCategory,
        submitType,
        submitLocation
    };
};

export default useDepartureDetail;
