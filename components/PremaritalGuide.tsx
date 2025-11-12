import React from 'react';
import { ChatBubbleLeftRightIcon } from './IconComponents';
import { PREMARITAL_TOPICS } from '../constants';

const PremaritalGuide: React.FC = () => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-stone-100">
            <div className="flex items-center gap-3 mb-4">
                <ChatBubbleLeftRightIcon className="w-6 h-6 text-teal-500" />
                <h2 className="text-xl font-bold text-stone-800">Premarital Discussion Guide</h2>
            </div>
            <div className="space-y-6">
                {PREMARITAL_TOPICS.map(topic => (
                    <div key={topic.category}>
                        <h3 className="font-bold text-lg text-stone-700">{topic.category}</h3>
                        <ul className="mt-2 space-y-2 text-sm text-stone-600 list-disc list-inside">
                            {topic.questions.map((q, i) => (
                                <li key={i}>{q}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PremaritalGuide;