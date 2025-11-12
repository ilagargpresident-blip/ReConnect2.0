import React from 'react';
import { RingIcon } from './IconComponents';

const ProposalPlanner: React.FC = () => {
    const considerations = [
        "Pick the perfect ring (or a placeholder!)",
        "Choose a meaningful location.",
        "Decide if you want family/friends involved.",
        "Think about hiring a photographer/videographer.",
        "Plan what you're going to say from the heart.",
        "Incorporate elements of your shared culture."
    ];

    const ideas = [
        {
            title: "The Nostalgic Memory Lane",
            description: "Recreate your first date or visit a place filled with your most cherished memories. Set up photos or mementos along the way, leading to the proposal spot."
        },
        {
            title: "The Grand Family Affair",
            description: "Propose during a family gathering or a festival like Diwali or Eid, when loved ones are present to celebrate with you immediately. Get them to hold up signs or play a special song."
        },
        {
            title: "The Intimate 'At Home' Surprise",
            description: "Decorate your home with fairy lights, candles, and flower petals. Cook their favorite meal (or order in!), play your special song, and propose in the comfort of your shared space."
        },
        {
            title: "The Bollywood Movie Moment",
            description: "If you both love movies, arrange for a private screening of a custom video of your memories, ending with 'Will You Marry Me?'. Or, pop the question during a romantic song at a movie theatre."
        }
    ];

    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-stone-100">
            <div className="flex items-center gap-3 mb-4">
                <RingIcon className="w-6 h-6 text-rose-500" />
                <h2 className="text-xl font-bold text-stone-800">Proposal Planner & Ideas</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h3 className="font-bold text-lg text-stone-700">Key Considerations</h3>
                    <ul className="mt-2 space-y-2">
                        {considerations.map((item, index) => (
                            <li key={index} className="flex items-start">
                                <span className="text-rose-500 font-bold mr-2">&#10003;</span>
                                <span className="text-sm text-stone-600">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-lg text-stone-700">Creative Proposal Ideas</h3>
                    <div className="mt-2 space-y-3">
                        {ideas.map(idea => (
                            <div key={idea.title} className="bg-rose-50 p-3 rounded-lg border border-rose-100">
                                <h4 className="font-semibold text-rose-800">{idea.title}</h4>
                                <p className="text-sm text-rose-700 mt-1">{idea.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProposalPlanner;