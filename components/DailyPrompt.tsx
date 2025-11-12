import React, { useState } from 'react';
import { PaperAirplaneIcon } from './IconComponents';
import { User, PromptResponse } from '../types';

interface DailyPromptProps {
  prompt: string;
  onNewPrompt: () => void;
  responses: PromptResponse[];
  currentUser: User;
  onShareResponse: (text: string) => void;
}

const DailyPrompt: React.FC<DailyPromptProps> = ({ prompt, onNewPrompt, responses, currentUser, onShareResponse }) => {
  const [newResponse, setNewResponse] = useState('');

  const handleSend = () => {
    onShareResponse(newResponse);
    setNewResponse('');
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-stone-100">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-xl font-bold text-stone-800">Daily Reconnection</h2>
          <p className="text-sm text-stone-500">A new question each day to spark conversation.</p>
        </div>
        <button
          onClick={onNewPrompt}
          className="flex-shrink-0 text-sm font-semibold text-orange-600 hover:text-orange-800 transition-colors"
        >
          New Prompt
        </button>
      </div>
      <div className="bg-orange-50 p-4 rounded-lg">
        <p className="font-semibold text-stone-700">{prompt}</p>
      </div>
      
      <div className="mt-4 space-y-3 max-h-48 overflow-y-auto pr-2">
        {responses.map((res, index) => (
          <div key={index} className={`flex ${res.author === currentUser ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs md:max-w-md px-4 py-2 rounded-xl ${res.author === currentUser ? 'bg-orange-100 text-orange-900' : 'bg-cyan-100 text-cyan-900'}`}>
              <p className="text-sm">{res.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <textarea
          value={newResponse}
          onChange={(e) => setNewResponse(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
          rows={3}
          className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
          placeholder={`Responding as ${currentUser}...`}
        />
        <button onClick={handleSend} className="mt-2 w-full flex items-center justify-center gap-2 px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
          <PaperAirplaneIcon className="w-5 h-5" /> Share with Partner
        </button>
      </div>
    </div>
  );
};

export default DailyPrompt;
