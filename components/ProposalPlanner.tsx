import React, { useState } from 'react';
import { RingIcon, PlusIcon } from './IconComponents';

interface Idea {
    title: string;
    description: string;
    checklist: string[];
}

interface CustomIdea {
    title: string;
    items: { text: string; completed: boolean }[];
}

const ProposalPlanner: React.FC = () => {
    const initialIdeas: Idea[] = [
        {
            title: "The Nostalgic Memory Lane",
            description: "Recreate your first date or visit a place filled with your most cherished memories. Set up photos or mementos along the way, leading to the proposal spot.",
            checklist: ["Choose the perfect location", "Gather memorable photos", "Plan the route/story", "Arrange for a private moment"]
        },
        {
            title: "The Grand Family Affair",
            description: "Propose during a family gathering or a festival like Diwali or Eid, when loved ones are present to celebrate with you immediately. Get them to hold up signs or play a special song.",
            checklist: ["Coordinate with both families", "Pick the right occasion", "Plan the surprise signal", "Arrange for celebratory sweets/food"]
        },
        {
            title: "The Intimate 'At Home' Surprise",
            description: "Decorate your home with fairy lights, candles, and flower petals. Cook their favorite meal (or order in!), play your special song, and propose in the comfort of your shared space.",
            checklist: ["Buy decorations (lights, flowers)", "Plan the menu", "Create a romantic playlist", "Ensure total privacy"]
        },
        {
            title: "The Bollywood Movie Moment",
            description: "If you both love movies, arrange for a private screening of a custom video of your memories, ending with 'Will You Marry Me?'. Or, pop the question during a romantic song at a movie theatre.",
            checklist: ["Create a video montage", "Book a private screening room", "Coordinate with theatre staff", "Prepare a post-movie surprise"]
        }
    ];

    const considerations = [
        "Pick the perfect ring (or a placeholder!)",
        "Choose a meaningful location.",
        "Decide if you want family/friends involved.",
        "Think about hiring a photographer/videographer.",
        "Plan what you're going to say from the heart.",
        "Incorporate elements of your shared culture."
    ];

    const [checkedItems, setCheckedItems] = useState<Record<string, Record<string, boolean>>>({});
    const [customIdeas, setCustomIdeas] = useState<CustomIdea[]>([]);
    const [newIdeaTitle, setNewIdeaTitle] = useState('');
    const [newItemText, setNewItemText] = useState('');
    const [currentCustomItems, setCurrentCustomItems] = useState<{ text: string; completed: boolean }[]>([]);

    const handleCheck = (ideaTitle: string, itemText: string) => {
        setCheckedItems(prev => ({
            ...prev,
            [ideaTitle]: {
                ...prev[ideaTitle],
                [itemText]: !prev[ideaTitle]?.[itemText]
            }
        }));
    };

    const handleCustomItemCheck = (ideaIndex: number, itemIndex: number) => {
        const newCustomIdeas = [...customIdeas];
        newCustomIdeas[ideaIndex].items[itemIndex].completed = !newCustomIdeas[ideaIndex].items[itemIndex].completed;
        setCustomIdeas(newCustomIdeas);
    };
    
    const handleAddNewItem = () => {
        if(newItemText.trim()){
            setCurrentCustomItems([...currentCustomItems, { text: newItemText, completed: false }]);
            setNewItemText('');
        }
    };

    const handleSaveCustomIdea = () => {
        if(newIdeaTitle.trim() && currentCustomItems.length > 0){
            setCustomIdeas([...customIdeas, { title: newIdeaTitle, items: currentCustomItems }]);
            setNewIdeaTitle('');
            setCurrentCustomItems([]);
        }
    };


    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-stone-100">
            <div className="flex items-center gap-3 mb-4">
                <RingIcon className="w-6 h-6 text-orange-500" />
                <h2 className="text-xl font-bold text-stone-800">Proposal Planner & Ideas</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h3 className="font-bold text-lg text-stone-700">Key Considerations</h3>
                    <ul className="mt-2 space-y-2">
                        {considerations.map((item, index) => (
                            <li key={index} className="flex items-start">
                                <span className="text-orange-500 font-bold mr-2 mt-1">&#10003;</span>
                                <span className="text-sm text-stone-600">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-lg text-stone-700">Creative Proposal Ideas</h3>
                    <div className="mt-2 space-y-3">
                        {initialIdeas.map(idea => (
                            <div key={idea.title} className="bg-orange-50 p-3 rounded-lg border border-orange-100">
                                <h4 className="font-semibold text-orange-800">{idea.title}</h4>
                                <p className="text-sm text-orange-700 mt-1">{idea.description}</p>
                                <div className="mt-2 space-y-1">
                                    {idea.checklist.map(item => (
                                        <label key={item} className="flex items-center text-sm cursor-pointer">
                                            <input type="checkbox" checked={!!checkedItems[idea.title]?.[item]} onChange={() => handleCheck(idea.title, item)} className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500"/>
                                            <span className={`ml-2 ${checkedItems[idea.title]?.[item] ? 'line-through text-stone-400' : 'text-stone-600'}`}>{item}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-6 pt-6 border-t border-stone-200">
                 <h3 className="font-bold text-lg text-stone-700">Customize Your Proposal</h3>
                 <div className="bg-stone-50 p-4 rounded-lg mt-2">
                    <input 
                        type="text" 
                        value={newIdeaTitle}
                        onChange={(e) => setNewIdeaTitle(e.target.value)}
                        placeholder="Your Proposal Idea Title"
                        className="w-full p-2 bg-white border border-stone-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition text-sm font-semibold"
                    />
                    <div className="mt-2 space-y-1">
                        {currentCustomItems.map((item, index) => (
                             <div key={index} className="text-sm text-stone-600 bg-white p-2 rounded-md">{item.text}</div>
                        ))}
                    </div>
                     <div className="mt-2 flex gap-2">
                        <input 
                            type="text"
                            value={newItemText}
                            onChange={(e) => setNewItemText(e.target.value)}
                            placeholder="Add a checklist item..."
                            className="flex-grow p-2 bg-white border border-stone-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition text-sm"
                        />
                         <button onClick={handleAddNewItem} className="flex-shrink-0 px-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600">
                            <PlusIcon className="w-5 h-5" />
                        </button>
                    </div>
                    <button onClick={handleSaveCustomIdea} className="mt-3 w-full px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
                        Save My Proposal Idea
                    </button>
                 </div>
            </div>

            {customIdeas.length > 0 && (
                 <div className="mt-6">
                    <h3 className="font-bold text-lg text-stone-700">My Custom Ideas</h3>
                    <div className="mt-2 space-y-3">
                        {customIdeas.map((idea, ideaIndex) => (
                             <div key={idea.title} className="bg-cyan-50 p-3 rounded-lg border border-cyan-100">
                                <h4 className="font-semibold text-cyan-800">{idea.title}</h4>
                                <div className="mt-2 space-y-1">
                                    {idea.items.map((item, itemIndex) => (
                                        <label key={item.text} className="flex items-center text-sm cursor-pointer">
                                            <input type="checkbox" checked={item.completed} onChange={() => handleCustomItemCheck(ideaIndex, itemIndex)} className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"/>
                                            <span className={`ml-2 ${item.completed ? 'line-through text-stone-400' : 'text-stone-600'}`}>{item.text}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProposalPlanner;
