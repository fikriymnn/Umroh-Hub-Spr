export interface Jemaah {
    airplane_ticket: string | boolean;
    createdAt: string;
    email: string;
    gender: string;
    hotel_ticket: string | boolean;
    id: number;
    id_order: number;
    kk_url: string;
    ktp_url: string;
    name: string;
    passport_url: string;
    phone_number: string;
    updatedAt: string;
    visa_url: string;
    status: string;
};

export interface StatisticJemaah {
    month: string;
    year: number;
    totalJamaah: number;
    monthlyStatistics: MonthlyStatisticsJemaah[];
};

export interface MonthlyStatisticsJemaah {
    month: number;
    subtotalJamaah: number;
};