export const renderStarsHotels = (count: number) => {
    return (
        <span className="text-yellow-300 text-[12px]">
            {Array.from({ length: count }).map((_, i) => (
                <span key={i} className="mx-[4px]">★</span>
            ))}
        </span>
    );
};
