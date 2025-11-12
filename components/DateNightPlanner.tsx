import React from 'react';
import { DATE_NIGHT_IDEAS } from '../constants';

const DateNightPlanner: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-stone-100">
      <h2 className="text-xl font-bold text-stone-800 mb-4">Virtual Date Night Planner</h2>
      <div className="space-y-4">
        {DATE_NIGHT_IDEAS.map((idea) => (
          <div key={idea.title} className="flex items-center gap-4">
            <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden shadow-sm">
                <img src={idea.image} alt={idea.title} className="w-full h-full object-cover bg-stone-100" />
            </div>
            <div>
              <h3 className="font-semibold text-stone-800">{idea.title}</h3>
              <p className="text-sm text-stone-500">{idea.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DateNightPlanner;