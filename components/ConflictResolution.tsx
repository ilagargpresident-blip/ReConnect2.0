import React, { useState, useEffect } from 'react';
import { ShieldCheckIcon, ClockIcon } from './IconComponents';

const ConflictResolution: React.FC = () => {
    const [timerActive, setTimerActive] = useState(false);
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        let interval: number;
        if (timerActive && timer > 0) {
            interval = window.setInterval(() => {
                setTimer(prev => prev - 1);
            }, 1000);
        } else if (timer === 0) {
            setTimerActive(false);
        }
        return () => clearInterval(interval);
    }, [timerActive, timer]);

    const handleStartTimer = () => {
        setTimer(300); // 5 minutes
        setTimerActive(true);
    };

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-stone-100 h-full">
            <div className="flex items-center gap-3 mb-4">
                <ShieldCheckIcon className="w-6 h-6 text-cyan-500" />
                <h2 className="text-xl font-bold text-stone-800">Conflict Resolution Toolkit</h2>
            </div>
            <div className="space-y-4">
                <div>
                    <h3 className="font-semibold text-stone-700">"I Feel" Statement Builder</h3>
                    <p className="text-sm text-stone-500 bg-stone-50 p-2 rounded-md mt-1">
                        I feel <span className="font-semibold">[emotion]</span> when <span className="font-semibold">[situation]</span> because <span className="font-semibold">[reason]</span>. I need <span className="font-semibold">[request]</span>.
                    </p>
                </div>
                 <div>
                    <h3 className="font-semibold text-stone-700">Active Listening Prompts</h3>
                    <ul className="space-y-1 text-sm list-disc list-inside text-stone-500 mt-1">
                        <li>"What I hear you saying is..."</li>
                        <li>"Can you tell me more about that?"</li>
                        <li>"How did that make you feel?"</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-stone-700">"Cool Down" Timer</h3>
                    <p className="text-sm text-stone-500 mb-2">If things get heated, take a 5-minute break.</p>
                    {timerActive ? (
                        <div className="text-center py-2 text-2xl font-bold text-cyan-600 bg-cyan-50 rounded-lg">
                            {formatTime(timer)}
                        </div>
                    ) : (
                        <button onClick={handleStartTimer} className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-colors">
                            <ClockIcon className="w-5 h-5" /> Start 5-Min Timer
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ConflictResolution;
