
export const transformDate = (date: string): string => {
    const parts = date.split("-");
    return `${parts[2]}.${parts[1]}.${parts[0]}`;
}

export const getDayOfWeek = (datetime: string): string => {
    const date = new Date(datetime);
    const options: any  = { weekday: 'long' };
    return date.toLocaleDateString('en-US', options);
}