import "./Timer.css";
import { useState, useEffect } from "react";

const Timer = ({ deadline }: any) => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isDeadlineReached, setIsDeadlineReached] = useState(false);

    // timer
    const time = (deadline: any) => {
        const t = Date.parse(deadline) - Date.parse(new Date() as any);
        const days = Math.floor(t / (1000 * 60 * 60 * 24));
        const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((t / 1000 / 60) % 60);
        const seconds = Math.floor((t / 1000) % 60);

        if (t <= 0) {
            setIsDeadlineReached(true);
            // clearInterval(timer); // Зупиняємо таймер
        } else {
            setDays(days);
            setHours(hours);
            setMinutes(minutes);
            setSeconds(seconds);
        }
    };

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("here");
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

// import "./Timer.css";
// import React, { useState, useEffect } from "react";

// interface TimerProps {
//     deadline: string;
// }

// const Timer: React.FC<TimerProps> = ({ deadline }) => {
//     const calculateTimeLeft = () => {
//         const difference = +new Date(deadline) - +new Date();
//         let timeLeft: { [key: string]: number } = {};

//         if (difference > 0) {
//             timeLeft = {
//                 days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//                 hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//                 minutes: Math.floor((difference / 1000 / 60) % 60),
//                 seconds: Math.floor((difference / 1000) % 60),
//             };
//         }

//         return timeLeft;
//     };

//     const [timeLeft, setTimeLeft] = useState<{ [key: string]: number }>(calculateTimeLeft());

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setTimeLeft(calculateTimeLeft());
//         }, 1000);

//         return () => clearTimeout(timer);
//     });

//     const timerComponents: JSX.Element[] = [];

//     Object.keys(timeLeft).forEach(interval => {
//         if (!timeLeft[interval as keyof typeof timeLeft]) {
//             return;
//         }

//         timerComponents.push(
//             <div className='timerContainer' key={interval}>
//                 <span className='timerNumber'>{timeLeft[interval as keyof typeof timeLeft]}</span>
//                 <span className='timerLabel'>{interval}</span>
//             </div>
//         );
//     });

//     return <div className='timerBlock'>{timerComponents.length ? timerComponents : <span>Time's up!</span>}</div>;
// };

// export default Timer;
