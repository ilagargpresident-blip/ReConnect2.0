import { DateNightIdea, LoveLanguage, HealthCheckTopic, PremaritalTopic, LoveLanguageQuizQuestion } from './types';

export const DAILY_PROMPTS: string[] = [
  "What's your favourite memory of us having chai together?",
  "If we were in a Bollywood movie, what would our song be?",
  "Share a favourite memory of a festival we celebrated together.",
  "What's a small thing I can do to make your day better tomorrow?",
  "What's your all-time favourite street food we've had together?",
  "Describe a dream you have for our future.",
  "What's one thing you admire about my relationship with my family?",
];

// Custom, Indian-themed SVG images for Date Night ideas
export const DATE_NIGHT_IDEAS: DateNightIdea[] = [
    {
        title: 'Bollywood Movie Night',
        description: 'Pick a classic or new movie, grab some popcorn, and enjoy.',
        image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZGIyNzdiIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2EtbGluZWpvaW49InJvdW5kIj48cmVjdCB4PSIyIiB5PSIyIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHJ4PSIyLjE4IiByeT0iMi4xOCIvPjxwYXRoIGQ9Ik03IDE4bDUgLTRM NyA1djEzWm0xMCAxaC0zIi8+PC9zdmc+',
    },
    {
        title: 'Virtual Chai & Samosa Date',
        description: 'Make your favourite snacks and catch up over video call.',
        image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjM2I4MmY2IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2EtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNNiA4aDhBNiA2IDAgMCAxIDE0IDE5SDZBNiA2IDAgMCAxIDYgOG0xNCA0djRjMCAxLjctMS4zIDMtMyAzSDRjLTEuNyAwLTMtMS4zLTMtM1Y4YzAtMS43IDEuMy0zIDMtM2g0bTIgMlY0bTEgMFYybS0xIDJWNCIvPjwvc3ZnPg==',
    },
    {
        title: 'Online Antakshari',
        description: 'Challenge each other to a classic game of Antakshari online.',
        image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZjU5ZTAwIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2EtbGluZWpvaW49InJvdW5kIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxwYXRoIGQ9Ik0xMiw4djRtMCA0YTEgMSAwIDAgMCAxLjc0LjY1bDEuNzYtMS4xN2ExIDEgMCAwIDAgLjAwLTEuMzRsLTEuNzYtMS4xN0ExIDEgMCAwIDAgMTIgOHoiLz48L3N2Zz4=',
    },
    {
        title: 'Plan a Future Trip in India',
        description: 'Dream about your next getaway, from the mountains to the beaches.',
        image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTRiODc5IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2EtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNOSAxMGEzIDMgMCAxIDAgNiAwYTMgMyAwIDAgMC02IDBaIi8+PHBhdGggZD0iTTIxIDljLTIuNC0yLjcgLTYuMy00LTktNC0yLjcgMC02LjYgMS4zLTkgNGwuMDkgMS45Yy4zIDEuNCAuNSAzIDEuNCA0LjdMMTIgMjFsLjAxLTQuMjctMi40Ny0xLjI2Ii8+PC9zdmc+',
    },
    {
        title: 'Cook a Meal Together',
        description: 'Choose a recipe, video call, and cook the same dish together.',
        image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTBiOTgxIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2EtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMgoMTJoMjAiLz48cGF0aCBkPSJNNCAxMlY2YTQgNCAwIDAgMSA0LTRoOGE0IDQgMCAwIDEgNCA0djYiLz48cGF0aCBkPSJNNiAxMnY4YTII MiAwIDAgMCAyIDJoOGEyIDIgMCAwIDAgMi0ydi04Ii8+PHBhdGggZD0iTTkgMTZoNiIvPjwvc3ZnPg==',
    },
    {
        title: 'Online Ludo/Carrom Game',
        description: 'Relive childhood memories with a competitive online board game.',
        image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjM2I4MmY2IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2EtbGluZWpvaW49InJvdW5kIj48cmVjdCB4PSIzIiB5PSIzIiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHJ4PSIyIiByeT0iMiIvPjxwYXRoIGQ9Ik0xMiAzbTE4TTMgMTJoMTgiLz48Y2lyY2xlIGN4PSI4IiBjeT0iOCIgcj0iMSIvPjxjaXJjbGUgY3g9IjE2IiBjeT0iOCIgcj0iMSIvPjxjaXJjbGUgY3g9IjgiIGN5PSIxNiIgcj0iMSIvPjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIHI9IjEiLz48L3N2Zz4=',
    },
    {
        title: 'Share Childhood Photos',
        description: 'Go through old albums and share sweet memories from your past.',
        image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYTg1NWY3IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2EtbGluZWpvaW49InJvdW5kIj48cmVjdCB4PSI0IiB5PSIyIiB3aWR0aD0iMTYiIGhlaWdodD0iMjAiIHJ4PSIyIiByeT0iMiIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTAiIHI9IjMiLz48cGF0aCBkPSJNMTIgMTNjLTEuNjYgMC0zIDEuMzQtMyAzbDJoNnYtMmMwLTEuNjYtMS4zNC0zLTMtM3oiLz48L3N2Zz4=',
    }
];


export const TRUTH_QUESTIONS: string[] = [
    "What's a secret family recipe you'd share with me?",
    "What was your first impression of my family?",
    "What's the most embarrassing Bollywood song you love?",
    "If you could have any Indian street food right now, what would it be?",
    "What's a childhood nickname you've never told me?",
    "What's one thing you appreciate about our cultural backgrounds?",
    "What's your biggest fear about our future together?",
    "Who was your first celebrity crush from Bollywood?",
];

export const DARE_CHALLENGES: string[] = [
    "Sing the chorus of your favourite Hindi song.",
    "Send me a voice note saying 'I love you' in your mother tongue.",
    "Do your best impression of a famous Bollywood actor.",
    "Show me the most 'desi' thing in your room right now.",
    "Wear a traditional outfit (or accessory) for our next video call.",
    "Write a short, cheesy shayri (poem) for me.",
    "Try to perfectly recite a tongue-twister in any Indian language.",
    "Order my favorite Indian sweet for yourself.",
];

export const MORE_LIKELY_TO_QUESTIONS: string[] = [
    "...binge-watch a whole series in one weekend?",
    "...be the first to apologize after a fight?",
    "...win at a game of carrom?",
    "...sing loudly in the shower to Bollywood hits?",
    "...insist on stopping for street food on a road trip?",
    "...spend an hour bargaining for a good price?",
    "...fall asleep during a cricket match?",
    "...talk to a complete stranger like a long-lost friend?",
];

export const WOULD_YOU_RATHER_QUESTIONS: string[] = [
    "...give up chai or cricket for a month?",
    "...live in a Himalayan mountain cottage or a Goa beach house?",
    "...have the ability to talk to animals or speak every Indian language fluently?",
    "...attend a grand Bollywood wedding or a quiet, traditional temple wedding?",
    "...eat only street food for a week or only home-cooked food for a week?",
    "...have unlimited golgappas for life or unlimited jalebis for life?",
    "...be a famous Bollywood star or a celebrated classical musician?",
];

export const NEVER_HAVE_I_EVER_QUESTIONS: string[] = [
    "...re-gifted a present someone gave me.",
    "...eaten a whole tub of ice cream by myself after a movie.",
    "...pretended to like a dish your partner cooked.",
    "...snooped on your partner's social media.",
    "...blamed the traffic for being late when I just left late.",
    "...told a tiny lie to get out of a family video call.",
    "...finished a series on my own and pretended I waited for you.",
    "...practiced a fake 'surprised' face for a gift I knew was coming.",
];

export const CHARADES_IDEAS: string[] = [
    "Making chai",
    "Dilwale Dulhania Le Jayenge (DDLJ)",
    "Playing cricket",
    "Bargaining with a street vendor",
    "Riding in an auto-rickshaw",
    "Doing a Bollywood dance number",
    "Eating pani puri",
    "Shah Rukh Khan's signature pose",
];


export const LOVE_LANGUAGES: LoveLanguage[] = [
  {
    name: "Words of Affirmation",
    quizKey: 'words',
    description: "This language is all about expressing affection through spoken words, praise, and appreciation. Hearing 'I love you' and other compliments is most important.",
    details: "For people who prefer this language, words are powerful. They feel loved when they are told, complimented, and appreciated verbally. It's not just about 'I love you'; it's about hearing the 'why'. Unkind or insulting words can be particularly hurtful to them.",
    howToShow: [
        "Send a good morning message with a genuine compliment.",
        "Leave a loving comment on their social media post.",
        "During a call, specifically mention something you admire about them.",
        "Write and send a short, heartfelt email or letter.",
    ],
    whatToAvoid: [
        "Giving generic, thoughtless compliments.",
        "Criticizing them in front of others.",
        "Forgetting to say 'thank you' for their efforts.",
        "Not speaking to them for long periods after a disagreement.",
    ]
  },
  {
    name: "Acts of Service",
    quizKey: 'acts',
    description: "For these people, actions speak louder than words. They feel loved when their partner does thoughtful things for them.",
    details: "This language is for people who believe that actions speak louder than words. Helping with tasks or chores is a way of showing you care. It’s about anticipating their needs and doing something to ease their burden. They feel loved when you do things for them without being asked.",
    howToShow: [
        "Order their favorite meal to be delivered on a busy day.",
        "Help them research something they need for work or a project.",
        "Offer to help their family with a task if possible.",
        "Take care of a shared bill or responsibility without a reminder.",
    ],
    whatToAvoid: [
        "Making promises to help but not following through.",
        "Ignoring their requests for help.",
        "Creating more work or stress for them.",
        "A lazy or un-invested attitude in shared responsibilities.",
    ]
  },

  {
    name: "Receiving Gifts",
    quizKey: 'gifts',
    description: "This person feels loved when they receive thoughtful, tangible gifts. It's the thought and effort behind the gift that matters.",
    details: "It's not about materialism, but about the thoughtfulness and effort behind the gift. A meaningful gift shows they are known, cared for, and prized. The gift itself is a symbol of love. Forgetting special occasions like birthdays or anniversaries is a big issue for them.",
    howToShow: [
        "Surprise them by sending a small, thoughtful gift from an online store.",
        "Curate a playlist of songs that remind you of them.",
        "Send them a care package with their favourite snacks or comforts.",
        "Gift an online course or workshop for a hobby they love.",
    ],
    whatToAvoid: [
        "Forgetting their birthday or your anniversary.",
        "Giving a thoughtless, last-minute gift.",
        "Putting no effort into the presentation of the gift.",
        "Feeling that gifts are a waste of money.",
    ]
  },
  {
    name: "Quality Time",
    quizKey: 'quality',
    description: "This language is about giving your partner your undivided attention. No phones, no TV, just focused time together.",
    details: "This language is all about being present. When you are together, you are really *together*. This means putting away distractions and focusing on each other. It’s about sharing experiences and conversations. For them, time is the most precious commodity.",
    howToShow: [
        "Schedule a 'no-distraction' video call where you both put your phones away.",
        "Watch a movie or series simultaneously and discuss it.",
        "Play an online game together, focusing on the interaction.",
        "Simply listen to them talk about their day without interrupting.",
    ],
    whatToAvoid: [
        "Being constantly on your phone when you're talking.",
        "Canceling scheduled virtual dates frequently.",
        "Long periods without meaningful one-on-one conversation.",
        "Seeming distracted or uninterested during your calls.",
    ]
  },
  {
    name: "Physical Touch",
    quizKey: 'touch',
    description: "A person with this love language feels loved through physical affection, like hugs, holding hands, and thoughtful touches.",
    details: "Nothing speaks more deeply than appropriate physical touch for this person. They feel secure and loved through hugs, kisses, and holding hands. It's a powerful emotional connector for them. Physical presence and accessibility are crucial.",
    howToShow: [
        "Describe a hug you want to give them the next time you meet.",
        "Send 'virtual hug' or 'virtual kiss' messages or emojis.",
        "Plan your next visit and talk about all the things you'll do.",
        "Acknowledge how much you miss being with them physically.",
    ],
    whatToAvoid: [
        "Long periods without physical contact (if possible).",
        "Ignoring their need for affection when you are together.",
        "A physically distant or cold demeanor.",
        "Treating physical intimacy as just a routine.",
    ]
  }
];

export const LOVE_LANGUAGE_QUIZ_QUESTIONS: LoveLanguageQuizQuestion[] = [
    {
        question: "Which of these makes you feel most loved?",
        answers: [
            { text: "Someone telling you how much they appreciate you.", languageKey: 'words' },
            { text: "Someone surprising you with a thoughtful gift.", languageKey: 'gifts' },
        ],
    },
    {
        question: "You've had a long, stressful week. What would mean the most to you?",
        answers: [
            { text: "Your partner clearing your schedule to have a long, uninterrupted video call.", languageKey: 'quality' },
            { text: "Your partner ordering your favourite comfort food to be delivered to you.", languageKey: 'acts' },
        ],
    },
     {
        question: "How do you prefer to celebrate a special occasion like your birthday?",
        answers: [
            { text: "Receiving a heartfelt message or letter from your partner.", languageKey: 'words' },
            { text: "Spending the entire day together, just the two of you, even if it's virtual.", languageKey: 'quality' },
        ],
    },
     {
        question: "What would make you feel better after a disagreement?",
        answers: [
            { text: "A warm hug and knowing you're physically close again soon.", languageKey: 'touch' },
            { text: "Your partner doing a small chore or task for you to make your life easier.", languageKey: 'acts' },
        ],
    },
      {
        question: "When your partner wants to show they are proud of you, you'd prefer they:",
        answers: [
            { text: "Buy you a small gift to celebrate your achievement.", languageKey: 'gifts' },
            { text: "Tell you exactly what they admire about what you did.", languageKey: 'words' },
        ],
    },
     {
        question: "Which is more important to you?",
        answers: [
            { text: "Feeling physically connected and close.", languageKey: 'touch' },
            { text: "Having deep, focused conversations.", languageKey: 'quality' },
        ],
    },
     {
        question: "A partner's love is best shown by:",
        answers: [
            { text: "Anticipating your needs and helping you out.", languageKey: 'acts' },
            { text: "Remembering and celebrating important dates with a token of love.", languageKey: 'gifts' },
        ],
    },
];


export const HEALTH_CHECK_TOPICS: HealthCheckTopic[] = [
  { id: 'communication', name: 'Communication' },
  { id: 'intimacy', name: 'Intimacy & Affection' },
  { id: 'finances', name: 'Shared Finances' },
  { id: 'goals', name: 'Future Goals' },
  { id: 'fun', name: 'Fun & Recreation' },
  { id: 'support', name: 'Emotional Support' },
];

export const PREMARITAL_TOPICS: PremaritalTopic[] = [
    {
        category: "Finances",
        questions: [
            "How do you view debt? Are you comfortable taking it on?",
            "What are your long-term financial goals (retirement, homeownership)?",
            "Should we have joint or separate bank accounts, or a mix?",
            "How will we make major financial decisions together?"
        ]
    },
    {
        category: "Family & Children",
        questions: [
            "Do you want to have children? If so, how many and when?",
            "What are your philosophies on discipline and parenting?",
            "How will we handle holidays and time with extended families?",
            "What role will our parents play in our lives and our children's lives?"
        ]
    },
    {
        category: "Career & Personal Growth",
        questions: [
            "What are your career aspirations for the next 5-10 years?",
            "How will we support each other's professional development?",
            "Are you open to relocating for a job opportunity?",
            "How do we ensure we both have time for personal hobbies and interests?"
        ]
    },
     {
        category: "Conflict & Communication",
        questions: [
            "How do you prefer to handle disagreements?",
            "What does a healthy argument look like to you?",
            "How can we ensure we both feel heard and respected during a conflict?",
            "Are there any topics that are off-limits for discussion?"
        ]
    }
];

// Placeholder images for dynamic content
export const IMAGE_PLACEHOLDERS: string[] = [
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZmY2RkNTsiLz48L3N2Zz4=',
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2M0ZjZmYyIvPjwvc3ZnPg==',
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2I3ZTNmYiIvPjwvc3ZnPg==',
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZmZGFlYSIvPjwvc3ZnPg==',
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2M5ZDBmZiIvPjwvc3ZnPg==',
];