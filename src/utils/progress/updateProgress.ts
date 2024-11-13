import { ExerciseLevel, ExerciseType, MultilpleChoiceTopics, OneWordTopic, ReadingTopics } from '@/interface/exercises/interface';
import { Progress, VocabularyTopic } from '@/interface/progress/interface';
import Cookies from 'js-cookie';


type TopicType<T extends ExerciseType> = 
  T extends 'multiplechoice' ? MultilpleChoiceTopics :
  T extends 'reading' ? ReadingTopics :
  T extends 'oneword' ? OneWordTopic :
  T extends 'vocabulary' ? VocabularyTopic :
  never;


  
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

    (initialProgress[level][type] as any)[topic] = per;
    Cookies.set('progress', JSON.stringify(initialProgress), { expires: 8 });

    console.log(per)
  } else {
    const currentProgress: Progress = JSON.parse(progress);
    
    if (per !== 0) {
      (currentProgress[level][type] as any)[topic] = per;
    } else {
      (currentProgress[level][type] as any)[topic] = 0;
    }

    Cookies.set('progress', JSON.stringify(currentProgress), { expires: 8 });

    console.log(per)

  }

};
