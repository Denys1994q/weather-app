import { v4 as uuidv4 } from "uuid"; 

export interface City {
    id: string,
    city: string,
    img: string,
    startDate: string,
    endDate: string
}

const today = new Date();
const endDate = new Date(today);
endDate.setDate(endDate.getDate() + 15);

export const cities: City[] = [
    {
        id: uuidv4(),
        city: 'Kyiv', 
        img: 'https://res.cloudinary.com/dw60kllwn/image/upload/v1708192606/St_Sophias_Cathedral_Kyiv.width-1200.format-webp_xdcsnh.webp',
        startDate: today.toLocaleDateString(),
        endDate: endDate.toLocaleDateString(),
    },
    {
        id: uuidv4(),
        city: 'Berlin', 
        img: 'https://res.cloudinary.com/dw60kllwn/image/upload/v1708192546/brandenburg-gate-in-berlin-germany_n8ptpi.webp',
        startDate: today.toLocaleDateString(),
        endDate: endDate.toLocaleDateString(),
    },
    {
        id: uuidv4(),
        city: 'Tokyo', 
        img: 'https://res.cloudinary.com/dw60kllwn/image/upload/v1708192688/pedestrians-in-the-shibuya-ward-of-tokyo-japan_eqipql.webp',
        startDate: today.toLocaleDateString(),
        endDate: endDate.toLocaleDateString(),
    },
    {
        id: uuidv4(),
        city: 'Barcelona', 
        img: 'https://res.cloudinary.com/dw60kllwn/image/upload/v1708192793/barcelona-spain-high-angle-view-city-skyline-at-la-rambla-street-with-autumn-foliage-season_tizp3t.webp',
        startDate: today.toLocaleDateString(),
        endDate: endDate.toLocaleDateString(),
    },
    {
        id: uuidv4(),
        city: 'London', 
        img: 'https://res.cloudinary.com/dw60kllwn/image/upload/v1708192845/pexels-photo-672532.jpeg_rcxfwk.jpg',
        startDate: today.toLocaleDateString(),
        endDate: endDate.toLocaleDateString(),
    }
]