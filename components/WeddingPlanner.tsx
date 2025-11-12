import React, { useState } from 'react';
import { CalendarDaysIcon } from './IconComponents';

const WeddingPlanner: React.FC = () => {
    const [budget, setBudget] = useState(1000000);

    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-stone-100 h-full">
            <div className="flex items-center gap-3 mb-4">
                <CalendarDaysIcon className="w-6 h-6 text-rose-500" />
                <h2 className="text-xl font-bold text-stone-800">Wedding Planning</h2>
            </div>
            <div className="space-y-4">
                <div>
                    <h3 className="font-semibold text-stone-700">Idea Boards</h3>
                    <p className="text-sm text-stone-500">Create shared boards for themes, venues, and dresses.</p>
                    <button className="mt-1 text-sm font-semibold text-rose-600 hover:text-rose-800">Start a new board &rarr;</button>
                </div>
                 <div>
                    <h3 className="font-semibold text-stone-700">Simplified Budget Tracker</h3>
                     <label htmlFor="budget" className="flex justify-between items-center text-sm font-medium text-stone-700 mt-1">
                        <span>Our Target Budget</span>
                        <span className="font-bold text-rose-600">₹{budget.toLocaleString('en-IN')}</span>
                    </label>
                    <input
                        id="budget"
                        type="range"
                        min="100000"
                        max="5000000"
                        step="50000"
                        value={budget}
                        onChange={(e) => setBudget(parseInt(e.target.value))}
                        className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-rose-500"
                    />
                </div>
                <div>
                    <h3 className="font-semibold text-stone-700">Vendor Research</h3>
                    <p className="text-sm text-stone-500">Find photographers, venues, and more.</p>
                     <a href="#" className="mt-1 text-sm font-semibold text-rose-600 hover:text-rose-800">Explore vendors &rarr;</a>
                </div>
            </div>
        </div>
    );
};

export default WeddingPlanner;