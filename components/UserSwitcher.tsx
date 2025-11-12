import React from 'react';
import { User } from '../types';
import { RaviMascot, PriyaMascot } from './Mascots';

interface UserSwitcherProps {
  currentUser: User;
  setCurrentUser: (user: User) => void;
}

const UserSwitcher: React.FC<UserSwitcherProps> = ({ currentUser, setCurrentUser }) => {
  const users: User[] = ['Partner 1', 'Partner 2'];

  return (
    <div className="flex justify-center items-center my-6">
      <div className="flex items-center gap-4 p-2 bg-white rounded-full shadow-md">
        <button
          onClick={() => setCurrentUser('Partner 1')}
          className={`transition-transform duration-300 transform ${currentUser === 'Partner 1' ? 'scale-110' : 'scale-90 opacity-60 hover:opacity-100'}`}
          aria-label="Switch to Partner 1"
        >
          <RaviMascot className="w-16 h-16" />
           <span className={`block text-xs font-semibold mt-1 ${currentUser === 'Partner 1' ? 'text-orange-600' : 'text-stone-500'}`}>Partner 1</span>
        </button>
        <div className="w-px h-10 bg-stone-200"></div>
        <button
          onClick={() => setCurrentUser('Partner 2')}
          className={`transition-transform duration-300 transform ${currentUser === 'Partner 2' ? 'scale-110' : 'scale-90 opacity-60 hover:opacity-100'}`}
          aria-label="Switch to Partner 2"
        >
          <PriyaMascot className="w-16 h-16" />
           <span className={`block text-xs font-semibold mt-1 ${currentUser === 'Partner 2' ? 'text-cyan-600' : 'text-stone-500'}`}>Partner 2</span>
        </button>
      </div>
    </div>
  );
};

export default UserSwitcher;
