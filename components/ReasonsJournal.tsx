import React, { useState } from 'react';
import { GiftIcon, PlusIcon } from './IconComponents';
import { Reason, User } from '../types';

interface ReasonsJournalProps {
    reasons: Reason[];
    onAddReason: (text: string) => void;
    currentUser: User;
}

const ReasonsJournal: React.FC<ReasonsJournalProps> = ({ reasons, onAddReason, currentUser }) => {
    const [newReason, setNewReason] = useState('');

    const handleAddReason = () => {
        onAddReason(newReason);
        setNewReason('');
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-stone-100 h-full">
            <div className="flex items-center gap-3 mb-4">
                <GiftIcon className="w-6 h-6 text-rose-500" />
                <h2 className="text-xl font-bold text-stone-800">Reasons I Love You</h2>
            </div>
            <div className="space-y-2 max-h-32 overflow-y-auto pr-2">
                {reasons.map((reason, index) => (
                     <div key={index} className={`p-2 rounded-lg text-sm ${reason.author === currentUser ? 'bg-rose-100 text-rose-900' : 'bg-stone-100 text-stone-800'}`}>
                        <p>{reason.text}</p>
                        <p className={`text-xs text-right mt-1 ${reason.author === currentUser ? 'text-rose-500' : 'text-stone-400'}`}>- {reason.author}</p>
                    </div>
                ))}
            </div>
            <div className="mt-4 flex gap-2">
                <input
                    type="text"
                    value={newReason}
                    onChange={(e) => setNewReason(e.target.value)}
                    placeholder={`Add as ${currentUser}...`}
                    className="flex-grow p-2 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition text-sm"
                />
                <button
                    onClick={handleAddReason}
                    className="flex-shrink-0 px-3 bg-rose-500 text-white font-semibold rounded-lg hover:bg-rose-600 transition-colors flex items-center justify-center"
                >
                    <PlusIcon className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

export default ReasonsJournal;