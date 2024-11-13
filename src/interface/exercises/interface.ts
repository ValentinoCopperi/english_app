export interface Exercise {
    id : number;
    text? : string;
    question : string;
    correct_answer : string;
    level : ExerciseLevel,
    type : ExerciseType,
    topic : string;
    options : string[]
}

export type ExerciseType = 'multiplechoice' | 'reading' | 'oneword' | 'vocabulary';
export type ExerciseLevel = 'beginner'| 'intermediate' | 'advanced'

export type MultilpleChoiceTopics = 'presentsimple' | 'pastsimple' | 'futuresimple' | 'presentperfect';
export type ReadingTopics = 'stories' | 'articles' | 'news' | 'reviews' | 'essays';
export type OneWordTopic = 'synonyms' | 'antonyms' | 'phrasalverbs' | 'idioms'