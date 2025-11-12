import React, { useState } from 'react';
import { PuzzlePieceIcon } from './IconComponents';
import { TRUTH_QUESTIONS, DARE_CHALLENGES, MORE_LIKELY_TO_QUESTIONS, WOULD_YOU_RATHER_QUESTIONS, NEVER_HAVE_I_EVER_QUESTIONS, CHARADES_IDEAS } from '../constants';
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

    const handleGetNeverHaveIEver = () => {
        onNewChallenge({ type: 'neverHaveIEver', text: getRandomItem(NEVER_HAVE_I_EVER_QUESTIONS) });
    };

    const handleGetCharades = () => {
        onNewChallenge({ type: 'charades', text: `Act out: "${getRandomItem(CHARADES_IDEAS)}"` });
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
            case 'truth': return { bgColor: 'bg-cyan-50', textColor: 'text-cyan-800', text: gameState.text };
            case 'dare': return { bgColor: 'bg-amber-50', textColor: 'text-amber-800', text: gameState.text };
            case 'moreLikely': return { bgColor: 'bg-violet-50', textColor: 'text-violet-800', text: gameState.text };
            case 'wouldYouRather': return { bgColor: 'bg-sky-50', textColor: 'text-sky-800', text: gameState.text };
            case 'neverHaveIEver': return { bgColor: 'bg-emerald-50', textColor: 'text-emerald-800', text: `Never have I ever ${gameState.text}` };
            case 'charades': return { bgColor: 'bg-fuchsia-50', textColor: 'text-fuchsia-800', text: gameState.text };
            default: return { bgColor: 'bg-stone-50', textColor: 'text-stone-400', text: "Choose a game to start!" };
        }
    };

    const { bgColor, textColor, text } = getChallengeUI();
    
    const gameTabs: { id: GameType, name: string }[] = [
        { id: 'truthOrDare', name: 'Truth/Dare' },
        { id: 'moreLikely', name: 'More Likely To...' },
        { id: 'wouldYouRather', name: 'Would You Rather...' },
        { id: 'neverHaveIEver', name: 'Never Have I Ever' },
        { id: 'charades', name: 'Charades' }
    ];

    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-stone-100">
            <div className="flex items-center gap-3">
                <PuzzlePieceIcon className="w-6 h-6 text-amber-500" />
                <h2 className="text-xl font-bold text-stone-800">Couple Games</h2>
            </div>
            
            <div className="my-4 border-b border-stone-200 flex flex-wrap gap-x-2 text-sm">
                {gameTabs.map(tab => (
                    <button 
                        key={tab.id} 
                        onClick={() => setActiveGame(tab.id)}
                        className={`px-3 py-1.5 font-semibold rounded-t-lg transition-colors ${activeGame === tab.id ? 'border-b-2 border-orange-500 text-orange-600' : 'text-stone-500 hover:text-stone-800'}`}
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
                        <button onClick={handleGetTruth} className="w-full px-4 py-2 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-colors">New Truth</button>
                        <button onClick={handleGetDare} className="w-full px-4 py-2 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors">New Dare</button>
                    </div>
                )}
                {activeGame === 'moreLikely' && (
                    <button onClick={handleGetMoreLikely} className="w-full px-4 py-2 bg-violet-500 text-white font-semibold rounded-lg hover:bg-violet-600 transition-colors">New Question</button>
                )}
                {activeGame === 'wouldYouRather' && (
                     <button onClick={handleGetWouldYouRather} className="w-full px-4 py-2 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition-colors">New Dilemma</button>
                )}
                {activeGame === 'neverHaveIEver' && (
                     <button onClick={handleGetNeverHaveIEver} className="w-full px-4 py-2 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors">New Prompt</button>
                )}
                {activeGame === 'charades' && (
                     <button onClick={handleGetCharades} className="w-full px-4 py-2 bg-fuchsia-500 text-white font-semibold rounded-lg hover:bg-fuchsia-600 transition-colors">New Challenge</button>
                )}
            </div>
        </div>
    );
};

export default CoupleGames;
