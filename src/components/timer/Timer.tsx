import "./Timer.css";
import React, { useState, useEffect } from "react";

interface TimerProps {
    targetDate: string;
}

const Timer: React.FC<TimerProps> = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft: { [key: string]: number } = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState<{ [key: string]: number }>(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents: JSX.Element[] = [];

    Object.keys(timeLeft).forEach(interval => {
        if (!timeLeft[interval as keyof typeof timeLeft]) {
            return;
        }

        timerComponents.push(
            <div className='timerContainer' key={interval}>
                <span className='timerNumber'>{timeLeft[interval as keyof typeof timeLeft]}</span>
                <span className='timerLabel'>{interval}</span>
            </div>
        );
    });

    return <div className='timerBlock'>{timerComponents.length ? timerComponents : <span>Time's up!</span>}</div>;
};

export default Timer;
