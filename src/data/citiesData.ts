import { v4 as uuidv4 } from "uuid"; 
import { Trip } from "../store/slices/models/trip";

const today = new Date();
today.setDate(today.getDate() + 1);
const endDate = new Date(today);
endDate.setDate(endDate.getDate() + 5);

const formattedStartDate = today.toISOString().slice(0, 10);
const formattedEndDate = endDate.toISOString().slice(0, 10);

export const cities: Trip[] = [
    {
        id: uuidv4(),
        city: 'Kyiv', 
        img: 'https://res.cloudinary.com/dw60kllwn/image/upload/v1708192606/St_Sophias_Cathedral_Kyiv.width-1200.format-webp_xdcsnh.webp',
        startDate: formattedStartDate,
        endDate: formattedEndDate
    },
    {
        id: uuidv4(),
        city: 'Berlin', 
        img: 'https://res.cloudinary.com/dw60kllwn/image/upload/v1708192546/brandenburg-gate-in-berlin-germany_n8ptpi.webp',
        startDate: formattedStartDate,
        endDate: formattedEndDate
    },
    {
        id: uuidv4(),
        city: 'Tokyo', 
        img: 'https://res.cloudinary.com/dw60kllwn/image/upload/v1708192688/pedestrians-in-the-shibuya-ward-of-tokyo-japan_eqipql.webp',
        startDate: formattedStartDate,
        endDate: formattedEndDate
    },
    {
        id: uuidv4(),
        city: 'Barcelona', 
        img: 'https://res.cloudinary.com/dw60kllwn/image/upload/v1708192793/barcelona-spain-high-angle-view-city-skyline-at-la-rambla-street-with-autumn-foliage-season_tizp3t.webp',
        startDate: formattedStartDate,
        endDate: formattedEndDate
    },
    {
        id: uuidv4(),
        city: 'London', 
        img: 'https://res.cloudinary.com/dw60kllwn/image/upload/v1708192845/pexels-photo-672532.jpeg_rcxfwk.jpg',
        startDate: formattedStartDate,
        endDate: formattedEndDate
    }
]