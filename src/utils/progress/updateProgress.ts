import { ExerciseLevel, ExerciseType, MultilpleChoiceTopics, OneWordTopic, ReadingTopics } from '@/interface/exercises/interface';
import { Progress, VocabularyTopic } from '@/interface/progress/interface';
import Cookies from 'js-cookie';

// Define a type that maps exercise types to their topic types
type TopicType<T extends ExerciseType> = 
  T extends 'multiplechoice' ? MultilpleChoiceTopics :
  T extends 'reading' ? ReadingTopics :
  T extends 'oneword' ? OneWordTopic :
  T extends 'vocabulary' ? VocabularyTopic :
  never;

// Define a type for the exercise data structure
type ExerciseData<T extends ExerciseType> = {
  [K in TopicType<T>]: number;
};

// Helper function to safely access and update nested properties
function updateNestedProperty<T extends ExerciseType>(
  obj: Progress,
  level: ExerciseLevel,
  type: T,
  topic: TopicType<T>,
  value: number
): void {
  const exerciseData = obj[level][type] as ExerciseData<T>;
  exerciseData[topic] = value;
}

export const updateProgress = <T extends ExerciseType>(
  per: number,
  level: ExerciseLevel,
  type: T,
  topic: TopicType<T>
) => {
  const progress = Cookies.get('progress');

  if (!progress) {
    const initialProgress: Progress = {
      beginner: {
        multiplechoice: {
          presentsimple: 0,
          pastsimple: 0,
          futuresimple: 0,
          presentperfect: 0
        },
        reading: {
          stories: 0,
          articles: 0,
          news: 0,
          reviews: 0,
          essays: 0
        },
        oneword: {
          synonyms: 0,
          antonyms: 0,
          phrasalverbs: 0,
          idioms: 0
        },
        vocabulary: {
          trips: 0,
          family: 0,
          school: 0,
          food: 0,
          sports: 0,
          weather: 0,
          work: 0
        }
      },
      intermediate: {
        multiplechoice: {
          presentsimple: 0,
          pastsimple: 0,
          futuresimple: 0,
          presentperfect: 0
        },
        reading: {
          stories: 0,
          articles: 0,
          news: 0,
          reviews: 0,
          essays: 0
        },
        oneword: {
          synonyms: 0,
          antonyms: 0,
          phrasalverbs: 0,
          idioms: 0
        },
        vocabulary: {
          trips: 0,
          family: 0,
          school: 0,
          food: 0,
          sports: 0,
          weather: 0,
          work: 0
        }
      },
      advanced: {
        multiplechoice: {
          presentsimple: 0,
          pastsimple: 0,
          futuresimple: 0,
          presentperfect: 0
        },
        reading: {
          stories: 0,
          articles: 0,
          news: 0,
          reviews: 0,
          essays: 0
        },
        oneword: {
          synonyms: 0,
          antonyms: 0,
          phrasalverbs: 0,
          idioms: 0
        },
        vocabulary: {
          trips: 0,
          family: 0,
          school: 0,
          food: 0,
          sports: 0,
          weather: 0,
          work: 0
        }
      }
    };

    updateNestedProperty(initialProgress, level, type, topic, per);
    Cookies.set('progress', JSON.stringify(initialProgress), { expires: 8 });
    console.log(per);
  } else {
    const currentProgress: Progress = JSON.parse(progress);
    const value = per !== 0 ? per : 0;
    
    updateNestedProperty(currentProgress, level, type, topic, value);
    Cookies.set('progress', JSON.stringify(currentProgress), { expires: 8 });
    console.log(per);
  }
};