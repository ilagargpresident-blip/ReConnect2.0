import React, { useState } from 'react';
import { HeartPulseIcon } from './IconComponents';
import { HEALTH_CHECK_TOPICS } from '../constants';

const HealthCheckin: React.FC = () => {
    const [ratings, setRatings] = useState<Record<string, number>>({});

    const handleRatingChange = (id: string, value: number) => {
        setRatings(prev => ({ ...prev, [id]: value }));
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-stone-100 h-full">
            <div className="flex items-center gap-3 mb-4">
                <HeartPulseIcon className="w-6 h-6 text-cyan-500" />
                <h2 className="text-xl font-bold text-stone-800">Relationship Health Check-in</h2>
            </div>
            <div className="space-y-4">
                {HEALTH_CHECK_TOPICS.map(topic => (
                    <div key={topic.id}>
                        <label htmlFor={topic.id} className="flex justify-between items-center text-sm font-medium text-stone-700">
                            <span>{topic.name}</span>
                            <span className="font-bold text-cyan-600">{ratings[topic.id] || 5}/10</span>
                        </label>
                        <input
                            id={topic.id}
                            type="range"
                            min="1"
                            max="10"
                            value={ratings[topic.id] || 5}
                            onChange={(e) => handleRatingChange(topic.id, parseInt(e.target.value))}
                            className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                        />
                    </div>
                ))}
            </div>
             <p className="text-xs text-stone-400 mt-4">Use this as a starting point for a conversation, not a scorecard.</p>
        </div>
    );
};

export default HealthCheckin;
