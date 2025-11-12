import React, { useState, useCallback, useMemo } from 'react';
import Header from './components/Header';
import LevelTabs from './components/LevelTabs';
import DailyPrompt from './components/DailyPrompt';
import MemoryLane from './components/MemoryLane';
import DateNightPlanner from './components/DateNightPlanner';
import LoveLanguageExplorer from './components/LoveLanguageExplorer';
import FutureVisionBoard from './components/FutureVisionBoard';
import ConflictResolution from './components/ConflictResolution';
import HealthCheckin from './components/HealthCheckin';
import FutureStoryJournal from './components/FutureStoryJournal';
import PremaritalGuide from './components/PremaritalGuide';
import WeddingPlanner from './components/WeddingPlanner';
import ReasonsJournal from './components/ReasonsJournal';
import CoupleGames from './components/CoupleGames';
import UserSwitcher from './components/UserSwitcher';
import ProposalPlanner from './components/ProposalPlanner';
import { DAILY_PROMPTS, IMAGE_PLACEHOLDERS } from './constants';
import { User, Memory, Reason, VisionBoard, PromptResponse, GameState, Level } from './types';

const App: React.FC = () => {
  const [activeLevel, setActiveLevel] = useState<Level>(Level.Rekindle);
  const [currentUser, setCurrentUser] = useState<User>('Partner 1');

  // --- SHARED STATE ---
  const [promptIndex, setPromptIndex] = useState(0);
  const [promptResponses, setPromptResponses] = useState<PromptResponse[]>([]);
  const [memories, setMemories] = useState<Memory[]>([
    { text: "Our first coffee date where we talked for hours.", author: 'Partner 1', image: IMAGE_PLACEHOLDERS[0] },
    { text: "That time we got caught in the rain and just laughed.", author: 'Partner 2', image: IMAGE_PLACEHOLDERS[1] },
  ]);
   const [reasons, setReasons] = useState<Reason[]>([
    { text: "The way you smile when you talk about something you love.", author: 'Partner 1', icon: '😊', timestamp: Date.now() - 10000 },
    { text: "You always know how to make me laugh, even on tough days.", author: 'Partner 2', icon: '😂', timestamp: Date.now() },
  ]);
  const [visionBoard, setVisionBoard] = useState<VisionBoard>([
    { name: 'Travel', items: [{ id: 1, text: 'Visit Japan for the cherry blossoms', author: 'Partner 1', image: IMAGE_PLACEHOLDERS[2] }] },
    { name: 'Home', items: [{ id: 1, text: 'Adopt a puppy', author: 'Partner 2', image: IMAGE_PLACEHOLDERS[3] }] },
    { name: 'Goals', items: [{ id: 1, text: 'Run a half-marathon together', author: 'Partner 1', image: IMAGE_PLACEHOLDERS[4] }] },
  ]);
  const [gameState, setGameState] = useState<GameState>(null);

  // --- HANDLERS ---
  const handleNewPrompt = useCallback(() => {
    setPromptIndex((prevIndex) => (prevIndex + 1) % DAILY_PROMPTS.length);
    setPromptResponses([]); // Clear responses for new prompt
  }, []);

  const handleShareResponse = (text: string) => {
    if (text.trim()) {
      setPromptResponses(prev => [...prev, { text, author: currentUser }]);
    }
  };
  
  const handleAddMemory = (text: string) => {
    if(text.trim()){
      const newImage = IMAGE_PLACEHOLDERS[memories.length % IMAGE_PLACEHOLDERS.length];
      setMemories(prev => [{ text, author: currentUser, image: newImage }, ...prev]);
    }
  };

  const handleAddReason = (text: string, icon: string) => {
    if(text.trim()){
      setReasons(prev => [{text, author: currentUser, icon, timestamp: Date.now()}, ...prev]);
    }
  };

  const handleAddVisionItem = (categoryName: string, text: string) => {
    if (text.trim() === '') return;
    const allItemsCount = visionBoard.reduce((acc, cat) => acc + cat.items.length, 0);
    const newImage = IMAGE_PLACEHOLDERS[allItemsCount % IMAGE_PLACEHOLDERS.length];
    setVisionBoard(board => board.map(cat => {
      if (cat.name === categoryName) {
        return {
          ...cat,
          items: [...cat.items, { id: Date.now(), text: text, author: currentUser, image: newImage }]
        };
      }
      return cat;
    }));
  };
  
  const handleNewGameChallenge = (challenge: GameState) => {
    setGameState(challenge);
  };

  const currentPrompt = useMemo(() => DAILY_PROMPTS[promptIndex], [promptIndex]);

  const renderLevelContent = () => {
    switch (activeLevel) {
      case Level.Rekindle:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="lg:col-span-2 space-y-6 lg:space-y-8">
              <DailyPrompt
                prompt={currentPrompt}
                onNewPrompt={handleNewPrompt}
                responses={promptResponses}
                currentUser={currentUser}
                onShareResponse={handleShareResponse}
              />
              <MemoryLane 
                memories={memories}
                onAddMemory={handleAddMemory}
                currentUser={currentUser}
              />
            </div>
            <div className="lg:col-span-1 space-y-6 lg:space-y-8">
              <DateNightPlanner />
              <CoupleGames
                gameState={gameState}
                onNewChallenge={handleNewGameChallenge}
              />
              <LoveLanguageExplorer />
            </div>
          </div>
        );
      case Level.Reinforce:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <FutureVisionBoard 
              board={visionBoard}
              onAddItem={handleAddVisionItem}
              currentUser={currentUser}
            />
            <ConflictResolution />
            <HealthCheckin />
            <FutureStoryJournal />
          </div>
        );
      case Level.Commit:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
             <div className="lg:col-span-2 space-y-6 lg:space-y-8">
              <PremaritalGuide />
              <ProposalPlanner />
            </div>
             <div className="lg:col-span-1 space-y-6 lg:space-y-8">
              <WeddingPlanner />
              <ReasonsJournal 
                reasons={reasons}
                onAddReason={handleAddReason}
                currentUser={currentUser}
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Header />
        <UserSwitcher currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <LevelTabs activeLevel={activeLevel} setActiveLevel={setActiveLevel} />
        <div className="mt-8">
          {renderLevelContent()}
        </div>
      </main>
    </div>
  );
};

export default App;