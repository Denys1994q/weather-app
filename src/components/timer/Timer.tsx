import "./Timer.css";
import { useState, useEffect } from "react";

const Timer = ({ deadline }: any) => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isDeadlineReached, setIsDeadlineReached] = useState(false);

    const time = (deadline: any) => {
        const t = Date.parse(deadline) - Date.parse(new Date() as any);
        const days = Math.floor(t / (1000 * 60 * 60 * 24));
        const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((t / 1000 / 60) % 60);
        const seconds = Math.floor((t / 1000) % 60);

        if (t <= 0) {
            setIsDeadlineReached(true);
        } else {
            setDays(days);
            setHours(hours);
            setMinutes(minutes);
            setSeconds(seconds);
        }
    };

    useEffect(() => {
        const timer = setInterval(() => {
            time(deadline);
        }, 1000);
        isDeadlineReached && clearInterval(timer);
        return () => clearInterval(timer);
    }, [isDeadlineReached]);

    return (
        <div className='timerBlock'>
            <div className='timerContainer'>
                <span className='timerNumber'>{isDeadlineReached ? 0 : days}</span>
                <span className='timerLabel'>days</span>
            </div>
            <div className='timerContainer'>
                <span className='timerNumber'>{isDeadlineReached ? 0 : hours}</span>
                <span className='timerLabel'>hours</span>
            </div>
            <div className='timerContainer'>
                <span className='timerNumber'>{isDeadlineReached ? 0 : minutes}</span>
                <span className='timerLabel'>minutes</span>
            </div>
            <div className='timerContainer'>
                <span className='timerNumber'>{isDeadlineReached ? 0 : seconds}</span>
                <span className='timerLabel'>seconds</span>
            </div>
        </div>
    );
};

export default Timer;
