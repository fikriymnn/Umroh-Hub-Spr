import { useEffect, useState } from 'react'
import { getAllJemaah, getJemaahStatistic, getJemaahToday } from '../../services/jemaahServices';
import { isAxiosError } from 'axios';
import { Jemaah, MonthlyStatisticsJemaah, StatisticJemaah } from '../../types/Jemaah';

const useJemaahData = () => {
    const year = "2025";
    //Statistik
    const [statistic, setStatistic] = useState<StatisticJemaah>();
    const [monthlyStatistics, setMonthlyStatistics] = useState<MonthlyStatisticsJemaah[]>([]);
    //Data jemaah
    const [jemaah, setJemaah] = useState<Jemaah[]>([]);
    //Get jemaah berdasarkan tanggal
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedMonth, setSelectedMonth] = useState(selectedDate.getMonth());
    const [selectedYear, setSelectedYear] = useState(selectedDate.getFullYear());
    //Filter jemaah
    const [openFilter, setOpenFilter] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState("Filter");
    const [filters, setFilters] = useState({
        gender: '',
        sort: ''
    });
    const filterOptions = ["Terbaru", "Terlama", "Ikhwan", "Akhwat"];

    const months = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    const daysOfWeek = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];

    const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
    const firstDay = (new Date(selectedYear, selectedMonth, 1).getDay() + 6) % 7; // Senin = 0

    //Mengubah filter menjadi params
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

    //Membuat query parameter
    function buildQueryParams(params: Record<string, any>) {
        const query = Object.entries(params)
        .filter(([_, value]) => value !== '' && value !== null && value !== undefined )
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&');
        
        return query;
    };

    //Fungsi klik tombol export (sementara)
    const handleDayClick = (day: number) => {
        const newDate = new Date(selectedYear, selectedMonth, day);
        setSelectedDate(newDate);
        fetchJemaahToday(newDate);
        setShowCalendar(false);
    };

    useEffect(() => {
        fetchJemaah();
        fetchStatistic();
    }, [filters]);

    //Fetch data jemaah
    const fetchJemaah = async () => {
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

    //Fetch data jemaah berdasarkan tanggal
    const fetchJemaahToday = async ( date: Date) => {
        try {
            const formattedDate = date.toISOString().split("T")[0];
            const res = await getJemaahToday(formattedDate);
            console.log(res);
            setJemaah(res.data.data);
        } catch (error) {
            if (isAxiosError(error)) {
                console.error(error.response?.data);
            }
        }
    };

    //Fetch statistik jemaah
    const fetchStatistic = async () => {
        try {
            const res = await getJemaahStatistic(year);

            setStatistic(res.data.data);

            const formatted = res.data.data.monthlyStatistics.map((item: any) => ({
                ...item,
                month: months[item.month - 1], //Ubah angka jadi nama bulan 
            }));

            console.log(res);
            
            setMonthlyStatistics(formatted);
        } catch (error) {
            if (isAxiosError(error)) {
                console.error(error.response?.data.message);
            }
        }
    };

    return {
        showCalendar, setShowCalendar,
        selectedDate, setSelectedDate,
        selectedMonth, setSelectedMonth,
        selectedYear, setSelectedYear,
        months,
        daysOfWeek,
        monthlyStatistics, setMonthlyStatistics,
        statistic, setStatistic,
        jemaah, setJemaah,
        openFilter, setOpenFilter,
        selectedFilter, setSelectedFilter,
        filters, setFilters,
        filterOptions,
        mapFilterToParams,
        buildQueryParams,
        fetchJemaah,
        fetchJemaahToday,
        daysInMonth,
        firstDay,
        handleDayClick
    }
};

export default useJemaahData;
