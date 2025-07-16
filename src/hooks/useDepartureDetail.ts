import { useEffect, useState } from 'react'
import { Category, Location, Type } from '../types/Departure';
import { addCategory, addLocation, addType, getAllCategory, getAllLocation, getAllType } from '../services/departureDetailServices';
import { isAxiosError } from 'axios';

const useDepartureDetail = () => {
    const [categorys, setCategorys] = useState<Category[]>([]);
    const [types, setTypes] = useState<Type[]>([]);
    const [locations, setLocations] = useState<Location[]>([]);
    const [addCategoryDeparture, setAddCategoryDeparture] = useState(false);
    const [addTypeDeparture, setAddTypeDeparture] = useState(false);
    const [addLocationDeparture, setAddLocationDeparture] = useState(false);
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

    const submitCategory = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await addCategory({
                category_name: categoryName
            });
            alert('Berhasil menambahkan category');
            console.log(res);
            setCategoryName('');
            setAddCategoryDeparture(false);
            fetchCategory();
        } catch (error) {
            alert('Gagal kirim data category');
            if (isAxiosError(error)) {
                console.log(`Error: ${error.response?.data}`);
            }
        }
    };

    const submitType = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await addType({
                type_name: typeName
            });
            alert('Berhasil menambahkan tipe');
            console.log(res);
            setTypeName('');
            setAddTypeDeparture(false);
            fetchType();
        } catch (error) {
            alert('Gagal kirim data type');
            if (isAxiosError(error)) {
                console.log(`Error: ${error.response?.data.message}`);
            }
        }
    };

    const submitLocation = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await addLocation({
                location_name: locationName
            });
            alert('Berhasil menambahkan lokasi');
            console.log(res);
            setLocationName('');
            setAddLocationDeparture(false);
            fetchLocation();
        } catch (error) {
            alert('Gagal kirim data location');
            if (isAxiosError(error)) {
                console.log(`Error: ${error.response?.data.message}`);
            }
        }
    };

    return {
        categorys, setCategorys,
        types, setTypes,
        locations, setLocations,
        addCategoryDeparture, setAddCategoryDeparture,
        addTypeDeparture, setAddTypeDeparture,
        addLocationDeparture, setAddLocationDeparture,
        categoryName, setCategoryName,
        typeName, setTypeName,
        locationName, setLocationName,
        submitCategory,
        submitType,
        submitLocation
    };
};

export default useDepartureDetail;
