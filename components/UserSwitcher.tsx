import React from 'react';
import { User } from '../types';

interface UserSwitcherProps {
  currentUser: User;
  setCurrentUser: (user: User) => void;
}

const UserSwitcher: React.FC<UserSwitcherProps> = ({ currentUser, setCurrentUser }) => {
  const users: User[] = ['Partner 1', 'Partner 2'];

  return (
    <div className="flex justify-center items-center my-6 p-2 bg-white rounded-full shadow-md max-w-xs mx-auto">
      <span className="text-sm font-semibold text-stone-500 mr-4">Viewing as:</span>
      <div className="flex bg-stone-100 rounded-full p-1">
        {users.map((user) => (
          <button
            key={user}
            onClick={() => setCurrentUser(user)}
            className={`px-4 py-1.5 text-sm font-semibold rounded-full transition-colors duration-300 ${
              currentUser === user
                ? 'bg-rose-500 text-white shadow'
                : 'text-stone-600 hover:bg-rose-50'
            }`}
          >
            {user}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserSwitcher;