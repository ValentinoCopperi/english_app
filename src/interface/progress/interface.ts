export type Level = 'beginner' | 'intermediate' | 'advanced';
export type ActivityType = 'multiplechoice' | 'reading' | 'oneword' | 'vocabulary';

export type MultilpleChoiceTopics = 'presentsimple' | 'pastsimple' | 'futuresimple' | 'presentperfect';
export type ReadingTopics = 'stories' | 'articles' | 'news' | 'reviews' | 'essays';
export type OneWordTopic = 'synonyms' | 'antonyms' | 'phrasalverbs' | 'idioms'
export type VocabularyTopic = 'trips' | 'family' | 'school' | 'food' | 'sports' | 'weather' | 'work'

export type AllTopics = 'presentsimple' | 'pastsimple' | 'futuresimple' | 'presentperfect' | 'stories' | 'articles' | 'news' | 'reviews' | 'essays' |'synonyms' | 'antonyms' | 'phrasalverbs' | 'idioms'|'trips' | 'family' | 'school' | 'food' | 'sports' | 'weather' | 'work';

export type Progress = {
    [key in Level]: {
        multiplechoice: { [key in MultilpleChoiceTopics] : number };
        reading: { [key in ReadingTopics] : number };
        oneword: { [key in OneWordTopic] : number };
        vocabulary: { [key in VocabularyTopic] : number };
    };
};