import React from 'react';
import { Level } from '../types';

interface LevelTabsProps {
  activeLevel: Level;
  setActiveLevel: (level: Level) => void;
}

const LevelTabs: React.FC<LevelTabsProps> = ({ activeLevel, setActiveLevel }) => {
  const levels = Object.values(Level);
  const levelNames = ["Level 1", "Level 2", "Level 3"];

  return (
    <div className="flex justify-center bg-white rounded-full shadow-md p-1.5 max-w-lg mx-auto">
      {levels.map((level, index) => (
        <button
          key={level}
          onClick={() => setActiveLevel(level)}
          className={`w-full text-center px-3 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2
            ${activeLevel === level
              ? 'bg-rose-500 text-white shadow'
              : 'text-stone-600 hover:bg-rose-50'
            }`}
        >
          <span className="font-bold">{`${levelNames[index]}:`}</span><span className="hidden sm:inline">{` ${level}`}</span>
        </button>
      ))}
    </div>
  );
};

export default LevelTabs;