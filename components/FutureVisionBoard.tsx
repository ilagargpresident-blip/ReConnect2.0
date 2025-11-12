import React, { useState } from 'react';
import { EyeIcon, PlusIcon } from './IconComponents';
import { VisionBoard, User } from '../types';

interface FutureVisionBoardProps {
    board: VisionBoard;
    onAddItem: (categoryName: string, text: string) => void;
    currentUser: User;
}

const FutureVisionBoard: React.FC<FutureVisionBoardProps> = ({ board, onAddItem, currentUser }) => {
  const [newItemText, setNewItemText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(board[0]?.name || '');

  const handleAddItem = () => {
    onAddItem(selectedCategory, newItemText);
    setNewItemText('');
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-stone-100 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <EyeIcon className="w-6 h-6 text-rose-500" />
        <h2 className="text-xl font-bold text-stone-800">Future Vision Board</h2>
      </div>
      <div className="space-y-4 flex-grow">
        {board.map(category => (
          <div key={category.name}>
            <h3 className="font-semibold text-stone-700">{category.name}</h3>
            <div className="space-y-2 mt-1">
              {category.items.map(item => (
                <div key={item.id} className="flex items-center gap-3 bg-stone-50 p-2 rounded-lg">
                    <img src={item.image} alt={item.text} className="w-10 h-10 rounded-md object-cover flex-shrink-0" />
                    <div className="text-sm">
                        <p className="text-stone-700">{item.text}</p>
                        <p className="text-xs text-stone-400">Added by {item.author}</p>
                    </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
       <div className="mt-4 pt-4 border-t border-stone-100">
        <div className="flex gap-2">
            <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="p-2 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition text-sm"
            >
                {board.map(cat => <option key={cat.name} value={cat.name}>{cat.name}</option>)}
            </select>
            <input
                type="text"
                value={newItemText}
                onChange={(e) => setNewItemText(e.target.value)}
                placeholder={`Add as ${currentUser}...`}
                className="flex-grow p-2 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition text-sm"
            />
            <button onClick={handleAddItem} className="px-3 bg-rose-500 text-white rounded-lg hover:bg-rose-600">
                <PlusIcon className="w-5 h-5" />
            </button>
        </div>
      </div>
    </div>
  );
};

export default FutureVisionBoard;