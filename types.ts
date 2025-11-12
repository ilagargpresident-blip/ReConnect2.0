export type User = 'Partner 1' | 'Partner 2';

export enum Level {
  Rekindle = 'Re-Ignite',
  Reinforce = 'Build',
  Commit = 'Cherish',
}

export type DateNightIdea = {
  title: string;
  description: string;
  image: string;
};

export type LoveLanguage = {
    name: string;
    quizKey: 'words' | 'acts' | 'gifts' | 'quality' | 'touch';
    description: string;
    details: string;
    howToShow: string[];
    whatToAvoid: string[];
};

export type LoveLanguageQuizQuestion = {
    question: string;
    answers: {
        text: string;
        languageKey: LoveLanguage['quizKey'];
    }[];
};

export type HealthCheckTopic = {
    id: string;
    name: string;
};

export type PremaritalTopic = {
    category: string;
    questions: string[];
};

export type Memory = {
    text: string;
    author: User;
    image?: string;
};

export type Reason = {
    text: string;
    author: User;
};

export type VisionItem = {
  id: number;
  text: string;
  author: User;
  image?: string;
};

export type VisionCategory = {
  name: string;
  items: VisionItem[];
};

export type VisionBoard = VisionCategory[];

export type PromptResponse = {
    text: string;
    author: User;
};

export type GameType = 'truthOrDare' | 'moreLikely' | 'wouldYouRather';

export type GameState = { type: 'truth' | 'dare' | 'moreLikely' | 'wouldYouRather'; text: string } | null;
