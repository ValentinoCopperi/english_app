import React, { useState, useEffect } from 'react';
import { Timer, RotateCcw } from 'lucide-react';

interface Props {
    timeLeft: number;
    setTimeLeft: (value: number | ((prevTime: number) => number)) => void;
}

const CountdownTimer: React.FC<Props> = ({ timeLeft, setTimeLeft }) => {
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        let interval: NodeJS.Timeout | undefined;

        if (isRunning && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prevTime: number) => prevTime - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsRunning(false);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [isRunning, timeLeft, setTimeLeft]);

    const formatTime = (seconds: number): string => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const resetTimer = (): void => {
        window.location.reload();
    };

    return (
        <div className="mx-auto w-64">
            <div className="p-6">
                <div className="flex flex-col items-center space-y-4">
                    <div className="flex items-center space-x-2">
                        <Timer className="w-8 h-8 text-blue-500" />
                        <span className="text-4xl text-white font-bold">{formatTime(timeLeft)}</span>
                    </div>

                    <div className="flex space-x-2">
                        <button
                            onClick={resetTimer}
                            className="inline-flex items-center justify-center w-20 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            <RotateCcw className="w-4 h-4 mr-1" />
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;