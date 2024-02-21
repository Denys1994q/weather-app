
interface TodayWeather {
    temp: number,
    icon: string
}

export interface WeekWeather {
    datetime: string,
    tempmin: number,
    tempmax: number,
    icon: string
}

export interface Trip {
    id: string,
    city: string,
    img: string,
    startDate: string,
    endDate: string,
    todayWeather?: TodayWeather,
    weekWeather?: WeekWeather[]
}