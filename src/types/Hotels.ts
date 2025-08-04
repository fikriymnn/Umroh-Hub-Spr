export interface facilities_general {
    id?: number;
    id_hotel?: number;
    description?: string
    is_active?: boolean
    createdAt?: string
    updatedAt?: string
}

export interface hotel_facilities {
    id?: number;
    id_hotel?: number;
    description?: string
    is_active?: boolean
    createdAt?: string
    updatedAt?: string
}

export interface MasterHotel {
    id?: number | undefined;
    id_mitra?: number;
    is_active?: boolean;
    hotel_name?: string;
    hotel_type?: string;
    address?: string;
    room_type?: string;
    image_url?: string;
    description: string;
    createdAt?: string;
    updatedAt?: string;
    facilities_hotel?: hotel_facilities[];
    facilities_general?: facilities_general[];
} 

export interface Hotel {
    id: number;
    id_package: number;
    id_hotel: number;
    description: string;
    is_active: boolean | null;
    createdAt: string;
    updatedAt: string;
    master_hotel: MasterHotel;
}