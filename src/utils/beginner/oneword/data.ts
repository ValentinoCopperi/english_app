import { Exercise } from "@/interface/exercises/interface";

// Ejercicios de Synonyms
const synonymsExercises: Exercise[] = [
  {
    id: 1,
    question: "Choose the synonym for 'happy'.",
    correct_answer: "joyful",
    options: ["sad", "angry", "joyful", "bored"],
    type: "multiplechoice",
    level: "beginner",
    topic: "synonyms"
  },
  {
    id: 2,
    question: "Choose the synonym for 'fast'.",
    correct_answer: "quick",
    options: ["slow", "quick", "late", "lazy"],
    type: "multiplechoice",
    level: "beginner",
    topic: "synonyms"
  },
  {
    id: 3,
    question: "Choose the synonym for 'smart'.",
    correct_answer: "intelligent",
    options: ["dull", "intelligent", "simple", "silly"],
    type: "multiplechoice",
    level: "beginner",
    topic: "synonyms"
  },
  {
    id: 4,
    question: "Choose the synonym for 'beautiful'.",
    correct_answer: "attractive",
    options: ["ugly", "dull", "attractive", "plain"],
    type: "multiplechoice",
    level: "beginner",
    topic: "synonyms"
  },
  {
    id: 5,
    question: "Choose the synonym for 'strong'.",
    correct_answer: "powerful",
    options: ["weak", "frail", "thin", "powerful"],
    type: "multiplechoice",
    level: "beginner",
    topic: "synonyms"
  }
];

// Ejercicios de Antonyms
const antonymsExercises: Exercise[] = [
  {
    id: 1,
    question: "Choose the antonym for 'hot'.",
    correct_answer: "cold",
    options: ["warm", "cold", "hotter", "cool"],
    type: "multiplechoice",
    level: "beginner",
    topic: "antonyms"
  },
  {
    id: 2,
    question: "Choose the antonym for 'big'.",
    correct_answer: "small",
    options: ["huge", "giant", "tiny", "small"],
    type: "multiplechoice",
    level: "beginner",
    topic: "antonyms"
  },
  {
    id: 3,
    question: "Choose the antonym for 'easy'.",
    correct_answer: "difficult",
    options: ["simple", "hard", "difficult", "clear"],
    type: "multiplechoice",
    level: "beginner",
    topic: "antonyms"
  },
  {
    id: 4,
    question: "Choose the antonym for 'rich'.",
    correct_answer: "poor",
    options: ["wealthy", "poor", "affluent", "well-off"],
    type: "multiplechoice",
    level: "beginner",
    topic: "antonyms"
  },
  {
    id: 5,
    question: "Choose the antonym for 'light'.",
    correct_answer: "dark",
    options: ["bright", "pale", "dim", "dark"],
    type: "multiplechoice",
    level: "beginner",
    topic: "antonyms"
  }
];

// Ejercicios de Phrasal Verbs
const phrasalverbsExercises: Exercise[] = [
  {
    id: 1,
    question: "Choose the correct meaning of 'give up'.",
    correct_answer: "stop trying",
    options: ["continue", "increase", "stop trying", "give a gift"],
    type: "multiplechoice",
    level: "beginner",
    topic: "phrasalverbs"
  },
  {
    id: 2,
    question: "What does 'look after' mean?",
    correct_answer: "take care of",
    options: ["ignore", "chase after", "take care of", "search for"],
    type: "multiplechoice",
    level: "beginner",
    topic: "phrasalverbs"
  },
  {
    id: 3,
    question: "What does 'run into' mean?",
    correct_answer: "meet by chance",
    options: ["avoid", "meet by chance", "run quickly", "fall into"],
    type: "multiplechoice",
    level: "beginner",
    topic: "phrasalverbs"
  },
  {
    id: 4,
    question: "What does 'turn up' mean?",
    correct_answer: "arrive",
    options: ["leave", "arrive", "increase volume", "rotate"],
    type: "multiplechoice",
    level: "beginner",
    topic: "phrasalverbs"
  },
  {
    id: 5,
    question: "What does 'get along with' mean?",
    correct_answer: "have a good relationship",
    options: ["argue with", "ignore", "have a good relationship", "go away"],
    type: "multiplechoice",
    level: "beginner",
    topic: "phrasalverbs"
  }
];

// Ejercicios de Idioms
const idiomsExercises: Exercise[] = [
  {
    id: 1,
    question: "What does 'break the ice' mean?",
    correct_answer: "make people feel comfortable",
    options: ["start a fight", "make people feel comfortable", "cool down", "break something"],
    type: "multiplechoice",
    level: "beginner",
    topic: "idioms"
  },
  {
    id: 2,
    question: "What does 'a piece of cake' mean?",
    correct_answer: "very easy",
    options: ["difficult", "tasty", "very easy", "expensive"],
    type: "multiplechoice",
    level: "beginner",
    topic: "idioms"
  },
  {
    id: 3,
    question: "What does 'hit the sack' mean?",
    correct_answer: "go to bed",
    options: ["exercise", "go to bed", "start working", "leave quickly"],
    type: "multiplechoice",
    level: "beginner",
    topic: "idioms"
  },
  {
    id: 4,
    question: "What does 'cost an arm and a leg' mean?",
    correct_answer: "very expensive",
    options: ["cheap", "painful", "very expensive", "difficult"],
    type: "multiplechoice",
    level: "beginner",
    topic: "idioms"
  },
  {
    id: 5,
    question: "What does 'under the weather' mean?",
    correct_answer: "feeling sick",
    options: ["feeling happy", "feeling sick", "feeling nervous", "feeling energetic"],
    type: "multiplechoice",
    level: "beginner",
    topic: "idioms"
  }
];

export {
  synonymsExercises,
  antonymsExercises,
  phrasalverbsExercises,
  idiomsExercises
};
