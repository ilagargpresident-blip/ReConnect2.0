import React, { useState } from 'react';
import { BookOpenIcon, PencilSquareIcon } from './IconComponents';

const FutureStoryJournal: React.FC = () => {
    const [entry, setEntry] = useState('');

    const prompt = "Describe a perfect, ordinary day for us five years from now.";

    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-stone-100 h-full">
            <div className="flex items-center gap-3 mb-4">
                <BookOpenIcon className="w-6 h-6 text-orange-500" />
                <h2 className="text-xl font-bold text-stone-800">Our Future Story</h2>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
                <p className="font-semibold text-stone-700">{prompt}</p>
            </div>
            <div className="mt-4">
                <textarea
                    value={entry}
                    onChange={(e) => setEntry(e.target.value)}
                    rows={8}
                    className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                    placeholder="Write your chapter..."
                />
                 <button className="mt-2 w-full flex items-center justify-center gap-2 px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
                    <PencilSquareIcon className="w-5 h-5" /> Save Entry
                </button>
            </div>
        </div>
    );
};

export default FutureStoryJournal;
