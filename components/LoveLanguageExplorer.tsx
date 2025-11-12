import React, { useState } from 'react';
import { HeartIcon, LightbulbIcon, SparklesIcon, XCircleIcon } from './IconComponents';
import { LOVE_LANGUAGES, LOVE_LANGUAGE_QUIZ_QUESTIONS } from '../constants';
import { LoveLanguage } from '../types';

const LoveLanguageExplorer: React.FC = () => {
    const [view, setView] = useState<'explorer' | 'quiz' | 'result'>('explorer');
    const [expandedLanguage, setExpandedLanguage] = useState<string | null>(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<string, number>>({});
    const [result, setResult] = useState<LoveLanguage | null>(null);

    const toggleLanguage = (name: string) => {
        setExpandedLanguage(expandedLanguage === name ? null : name);
    };

    const handleAnswer = (languageKey: string) => {
        setAnswers(prev => ({ ...prev, [languageKey]: (prev[languageKey] || 0) + 1 }));
        if (currentQuestionIndex < LOVE_LANGUAGE_QUIZ_QUESTIONS.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            calculateResult();
            setView('result');
        }
    };
    
    const calculateResult = () => {
        const finalAnswers = { ...answers, [LOVE_LANGUAGE_QUIZ_QUESTIONS[currentQuestionIndex].answers[0].languageKey]: (answers[LOVE_LANGUAGE_QUIZ_QUESTIONS[currentQuestionIndex].answers[0].languageKey] || 0) };
        const topLanguageKey = Object.keys(finalAnswers).reduce((a, b) => finalAnswers[a] > finalAnswers[b] ? a : b);
        const topLanguage = LOVE_LANGUAGES.find(lang => lang.quizKey === topLanguageKey);
        setResult(topLanguage || null);
    };

    const startQuiz = () => {
        setAnswers({});
        setCurrentQuestionIndex(0);
        setView('quiz');
    };

    const resetExplorer = () => {
        setResult(null);
        setView('explorer');
    }

    if (view === 'quiz') {
        const question = LOVE_LANGUAGE_QUIZ_QUESTIONS[currentQuestionIndex];
        const progress = ((currentQuestionIndex + 1) / LOVE_LANGUAGE_QUIZ_QUESTIONS.length) * 100;
        return (
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-stone-100">
                <h3 className="text-lg font-bold text-stone-700 text-center mb-1">Love Language Quiz</h3>
                 <p className="text-sm text-stone-500 text-center mb-4">This or That? Pick what you'd prefer.</p>
                <p className="font-semibold text-stone-800 text-center mb-4">{question.question}</p>
                <div className="space-y-3">
                    {question.answers.map(answer => (
                        <button 
                            key={answer.text}
                            onClick={() => handleAnswer(answer.languageKey)}
                            className="w-full text-left p-4 bg-stone-50 border border-stone-200 rounded-lg hover:bg-orange-50 hover:border-orange-300 transition-all duration-200"
                        >
                           {answer.text}
                        </button>
                    ))}
                </div>
                <div className="w-full bg-stone-200 rounded-full h-2.5 mt-6">
                    <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                </div>
            </div>
        );
    }
    
    if (view === 'result' && result) {
        return (
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-stone-100 text-center">
                 <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <SparklesIcon className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-lg font-bold text-stone-700">Your primary love language is:</h3>
                <h2 className="text-2xl font-bold text-orange-600 mb-2">{result.name}</h2>
                <p className="text-sm text-stone-500 mb-4">{result.description}</p>
                <button onClick={resetExplorer} className="w-full px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">Explore All Languages</button>
            </div>
        )
    }

    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-stone-100">
            <div className="flex items-center gap-3 mb-4">
                <HeartIcon className="w-6 h-6 text-orange-500" />
                <h2 className="text-xl font-bold text-stone-800">Love Languages</h2>
            </div>

            <button onClick={startQuiz} className="w-full mb-4 px-4 py-2 bg-orange-50 text-orange-700 font-semibold rounded-lg hover:bg-orange-100 transition-colors">
                Discover Your Love Language
            </button>

            <div className="space-y-2">
                {LOVE_LANGUAGES.map((lang) => (
                    <div key={lang.name} className="border-b border-stone-100 last:border-b-0 pb-2">
                        <button
                            onClick={() => toggleLanguage(lang.name)}
                            className="w-full flex justify-between items-center text-left py-2"
                        >
                            <h3 className="font-semibold text-stone-800">{lang.name}</h3>
                             <svg className={`w-5 h-5 text-stone-400 transition-transform ${expandedLanguage === lang.name ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                        {expandedLanguage === lang.name && (
                            <div className="px-2 pb-2 text-sm text-stone-600 space-y-4">
                               <p className="italic">{lang.details}</p>
                               <div>
                                   <h4 className="font-semibold text-cyan-700 flex items-center gap-2"><LightbulbIcon className="w-4 h-4" /> How to Show (Long-Distance)</h4>
                                   <ul className="list-disc list-inside pl-2 mt-1 space-y-1">
                                       {lang.howToShow.map(ex => <li key={ex}>{ex}</li>)}
                                   </ul>
                               </div>
                               <div>
                                   <h4 className="font-semibold text-amber-700 flex items-center gap-2"><XCircleIcon className="w-4 h-4" /> What to Avoid</h4>
                                   <ul className="list-disc list-inside pl-2 mt-1 space-y-1">
                                       {lang.whatToAvoid.map(ex => <li key={ex}>{ex}</li>)}
                                   </ul>
                               </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LoveLanguageExplorer;
