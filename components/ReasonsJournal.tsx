import React, { useState, useMemo } from 'react';
import { GiftIcon, PlusIcon } from './IconComponents';
import { Reason, User } from '../types';

interface ReasonsJournalProps {
    reasons: Reason[];
    onAddReason: (text: string, icon: string) => void;
    currentUser: User;
}

const ICONS = ['❤️', '✨', '😊', '😂', '🥰'];

const ReasonsJournal: React.FC<ReasonsJournalProps> = ({ reasons, onAddReason, currentUser }) => {
    const [newReason, setNewReason] = useState('');
    const [selectedIcon, setSelectedIcon] = useState(ICONS[0]);
    const [sortBy, setSortBy] = useState<'date' | 'author'>('date');

    const handleAddReason = () => {
        onAddReason(newReason, selectedIcon);
        setNewReason('');
    };
    
    const sortedReasons = useMemo(() => {
        const sortable = [...reasons];
        if (sortBy === 'date') {
            return sortable.sort((a, b) => b.timestamp - a.timestamp);
        }
        if (sortBy === 'author') {
            return sortable.sort((a, b) => a.author.localeCompare(b.author));
        }
        return sortable;
    }, [reasons, sortBy]);

    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-stone-100 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-2">
                <GiftIcon className="w-6 h-6 text-orange-500" />
                <h2 className="text-xl font-bold text-stone-800">Reasons I Love You</h2>
            </div>
            
             <div className="flex justify-end items-center gap-2 mb-2">
                <span className="text-xs text-stone-500">Sort by:</span>
                <button onClick={() => setSortBy('date')} className={`text-xs font-semibold px-2 py-0.5 rounded-full ${sortBy === 'date' ? 'bg-orange-100 text-orange-700' : 'bg-stone-100 text-stone-600'}`}>Latest</button>
                <button onClick={() => setSortBy('author')} className={`text-xs font-semibold px-2 py-0.5 rounded-full ${sortBy === 'author' ? 'bg-orange-100 text-orange-700' : 'bg-stone-100 text-stone-600'}`}>Author</button>
            </div>

            <div className="space-y-2 flex-grow max-h-48 overflow-y-auto pr-2">
                {sortedReasons.map((reason) => (
                     <div key={reason.timestamp} className={`p-2 rounded-lg ${reason.author === currentUser ? 'bg-orange-50' : 'bg-stone-50'}`}>
                        <p className="text-sm text-stone-800"><span className="mr-2">{reason.icon}</span>{reason.text}</p>
                        <p className={`text-xs text-right mt-1 ${reason.author === currentUser ? 'text-orange-500' : 'text-stone-400'}`}>- {reason.author}</p>
                    </div>
                ))}
            </div>
            
            <div className="mt-4 pt-4 border-t border-stone-100">
                <div className="flex justify-around items-center bg-stone-100 p-1 rounded-full mb-2">
                    {ICONS.map(icon => (
                        <button key={icon} onClick={() => setSelectedIcon(icon)} className={`text-xl p-1 rounded-full w-8 h-8 flex items-center justify-center transition-all ${selectedIcon === icon ? 'bg-white shadow-sm scale-110' : 'opacity-60 hover:opacity-100'}`}>
                            {icon}
                        </button>
                    ))}
                </div>
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={newReason}
                        onChange={(e) => setNewReason(e.target.value)}
                        placeholder={`Add as ${currentUser}...`}
                        className="flex-grow p-2 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition text-sm"
                    />
                    <button
                        onClick={handleAddReason}
                        className="flex-shrink-0 px-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center"
                    >
                        <PlusIcon className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReasonsJournal;