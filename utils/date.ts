const padTo2Digits = (num:number) => {
    return num.toString().padStart(2, '00');
}

/**
 * @description return javascript date with this format yyyy-MM-dd HH:mm:ss, example: 2024-08-26 08:30:00
 * @param date 
 */
export  const formatDate = (date: Date) => {
    return (
        [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
        ].join('-') +
        ' ' +
        [
        padTo2Digits(date.getHours()),
        padTo2Digits(date.getMinutes()),
        padTo2Digits(date.getSeconds()),
        ].join(':')
    );
}


export const formatDateIndonesian = (date: Date) => {
    // Define arrays for day and month names in Indonesian
    const daysOfWeek = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const monthsOfYear = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    
    // Get the day of the week, day of the month, and month of the year
    const dayOfWeek = daysOfWeek[date.getDay()];
    const dayOfMonth = date.getDate();
    const monthOfYear = monthsOfYear[date.getMonth()];
    const year = date.getFullYear();
    
    // Format the date string
    return `${dayOfWeek}, ${dayOfMonth} ${monthOfYear} ${year}`;
}
