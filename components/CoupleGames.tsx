import React, { useState } from 'react';
import { PuzzlePieceIcon } from './IconComponents';
import { TRUTH_QUESTIONS, DARE_CHALLENGES, MORE_LIKELY_TO_QUESTIONS, WOULD_YOU_RATHER_QUESTIONS } from '../constants';
import { GameState, GameType } from '../types';

interface CoupleGamesProps {
    gameState: GameState;
    onNewChallenge: (challenge: GameState) => void;
}

const CoupleGames: React.FC<CoupleGamesProps> = ({ gameState, onNewChallenge }) => {
    const [activeGame, setActiveGame] = useState<GameType>('truthOrDare');

    const getRandomItem = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

    const handleGetTruth = () => {
        onNewChallenge({ type: 'truth', text: getRandomItem(TRUTH_QUESTIONS) });
    };

    const handleGetDare = () => {
        onNewChallenge({ type: 'dare', text: getRandomItem(DARE_CHALLENGES) });
    };
    
    const handleGetMoreLikely = () => {
        onNewChallenge({ type: 'moreLikely', text: getRandomItem(MORE_LIKELY_TO_QUESTIONS) });
    };
    
    const handleGetWouldYouRather = () => {
        onNewChallenge({ type: 'wouldYouRather', text: getRandomItem(WOULD_YOU_RATHER_QUESTIONS) });
    };

    const getChallengeUI = () => {
        if (!gameState) {
            return {
                bgColor: 'bg-stone-50',
                textColor: 'text-stone-400',
                text: "Choose a game to start!"
            };
        }
        switch (gameState.type) {
            case 'truth': return { bgColor: 'bg-teal-50', textColor: 'text-teal-800', text: gameState.text };
            case 'dare': return { bgColor: 'bg-amber-50', textColor: 'text-amber-800', text: gameState.text };
            case 'moreLikely': return { bgColor: 'bg-purple-50', textColor: 'text-purple-800', text: gameState.text };
            case 'wouldYouRather': return { bgColor: 'bg-indigo-50', textColor: 'text-indigo-800', text: gameState.text };
            default: return { bgColor: 'bg-stone-50', textColor: 'text-stone-400', text: "Choose a game to start!" };
        }
    };

    const { bgColor, textColor, text } = getChallengeUI();
    
    const gameTabs: { id: GameType, name: string }[] = [
        { id: 'truthOrDare', name: 'Truth/Dare' },
        { id: 'moreLikely', name: 'More Likely To...' },
        { id: 'wouldYouRather', name: 'Would You Rather...' }
    ];

    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-stone-100">
            <div className="flex items-center gap-3">
                <PuzzlePieceIcon className="w-6 h-6 text-amber-500" />
                <h2 className="text-xl font-bold text-stone-800">Couple Games</h2>
            </div>
            
            <div className="my-4 border-b border-stone-200 flex space-x-2 text-sm">
                {gameTabs.map(tab => (
                    <button 
                        key={tab.id} 
                        onClick={() => setActiveGame(tab.id)}
                        className={`px-3 py-1.5 font-semibold rounded-t-lg transition-colors ${activeGame === tab.id ? 'border-b-2 border-rose-500 text-rose-600' : 'text-stone-500 hover:text-stone-800'}`}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>

            <div className={`p-4 rounded-lg min-h-[120px] flex items-center justify-center text-center transition-colors duration-300 ${bgColor} ${textColor}`}>
                <p className="font-semibold">{text}</p>
            </div>
            
            <div className="mt-4">
                {activeGame === 'truthOrDare' && (
                    <div className="grid grid-cols-2 gap-3">
                        <button onClick={handleGetTruth} className="w-full px-4 py-2 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition-colors">New Truth</button>
                        <button onClick={handleGetDare} className="w-full px-4 py-2 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors">New Dare</button>
                    </div>
                )}
                {activeGame === 'moreLikely' && (
                    <button onClick={handleGetMoreLikely} className="w-full px-4 py-2 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors">New Question</button>
                )}
                {activeGame === 'wouldYouRather' && (
                     <button onClick={handleGetWouldYouRather} className="w-full px-4 py-2 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition-colors">New Dilemma</button>
                )}
            </div>
        </div>
    );
};

export default CoupleGames;