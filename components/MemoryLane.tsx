import React, { useState } from 'react';
import { CameraIcon, PlusIcon } from './IconComponents';
import { Memory, User } from '../types';

interface MemoryLaneProps {
    memories: Memory[];
    onAddMemory: (text: string) => void;
    currentUser: User;
}

const MemoryLane: React.FC<MemoryLaneProps> = ({ memories, onAddMemory, currentUser }) => {
    const [newMemory, setNewMemory] = useState('');

    const handleAddMemory = () => {
        onAddMemory(newMemory);
        setNewMemory('');
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-stone-100">
            <div className="flex items-center gap-3 mb-4">
                <CameraIcon className="w-6 h-6 text-cyan-500" />
                <h2 className="text-xl font-bold text-stone-800">Shared Memory Lane</h2>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-72 overflow-y-auto pr-2">
                {memories.map((memory, index) => (
                    <div key={index} className="relative aspect-square rounded-lg shadow-sm overflow-hidden group">
                        <img src={memory.image} alt={memory.text} className="w-full h-full object-cover"/>
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-3 transition-opacity opacity-0 group-hover:opacity-100">
                            <p className="text-white text-xs font-semibold">{memory.text}</p>
                            <p className="text-white text-[10px] opacity-80 text-right mt-1">By {memory.author}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-4 flex gap-2">
                <input
                    type="text"
                    value={newMemory}
                    onChange={(e) => setNewMemory(e.target.value)}
                    placeholder={`Share as ${currentUser}...`}
                    className="flex-grow p-2 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
                />
                <button
                    onClick={handleAddMemory}
                    className="flex-shrink-0 px-4 py-2 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-colors flex items-center justify-center"
                >
                    <PlusIcon className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

export default MemoryLane;
