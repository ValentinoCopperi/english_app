import { Exercise } from "@/interface/exercises/interface";

// Ejercicios de Synonyms - Nivel intermedio
const synonymsExercises: Exercise[] = [
  {
    id: 1,
    question: "Choose the synonym for 'important'.",
    correct_answer: "significant",
    options: ["trivial", "insignificant", "important", "significant"],
    type: "multiplechoice",
    level: "intermediate",
    topic: "synonyms"
  },
  {
    id: 2,
    question: "Choose the synonym for 'angry'.",
    correct_answer: "furious",
    options: ["calm", "joyful", "angry", "furious"],
    type: "multiplechoice",
    level: "intermediate",
    topic: "synonyms"
  },
  {
    id: 3,
    question: "Choose the synonym for 'easy'.",
    correct_answer: "simple",
    options: ["difficult", "complicated", "easy", "simple"],
    type: "multiplechoice",
    level: "intermediate",
    topic: "synonyms"
  },
  {
    id: 4,
    question: "Choose the synonym for 'strong'.",
    correct_answer: "sturdy",
    options: ["weak", "delicate", "strong", "sturdy"],
    type: "multiplechoice",
    level: "intermediate",
    topic: "synonyms"
  },
  {
    id: 5,
    question: "Choose the synonym for 'beautiful'.",
    correct_answer: "gorgeous",
    options: ["plain", "beautiful", "gorgeous", "ugly"],
    type: "multiplechoice",
    level: "intermediate",
    topic: "synonyms"
  }
];

// Ejercicios de Antonyms - Nivel intermedio
const antonymsExercises: Exercise[] = [
  {
    id: 1,
    question: "Choose the antonym for 'generous'.",
    correct_answer: "selfish",
    options: ["kind", "generous", "selfish", "helpful"],
    type: "multiplechoice",
    level: "intermediate",
    topic: "antonyms"
  },
  {
    id: 2,
    question: "Choose the antonym for 'brave'.",
    correct_answer: "cowardly",
    options: ["brave", "cowardly", "fearless", "bold"],
    type: "multiplechoice",
    level: "intermediate",
    topic: "antonyms"
  },
  {
    id: 3,
    question: "Choose the antonym for 'honest'.",
    correct_answer: "dishonest",
    options: ["truthful", "honest", "dishonest", "trustworthy"],
    type: "multiplechoice",
    level: "intermediate",
    topic: "antonyms"
  },
  {
    id: 4,
    question: "Choose the antonym for 'optimistic'.",
    correct_answer: "pessimistic",
    options: ["hopeful", "optimistic", "pessimistic", "joyful"],
    type: "multiplechoice",
    level: "intermediate",
    topic: "antonyms"
  },
  {
    id: 5,
    question: "Choose the antonym for 'hard'.",
    correct_answer: "soft",
    options: ["solid", "rough", "hard", "soft"],
    type: "multiplechoice",
    level: "intermediate",
    topic: "antonyms"
  }
];

// Ejercicios de Phrasal Verbs - Nivel intermedio
const phrasalverbsExercises: Exercise[] = [
  {
    id: 1,
    question: "What does 'bring up' mean?",
    correct_answer: "mention",
    options: ["ignore", "bring up", "discuss", "mention"],
    type: "multiplechoice",
    level: "intermediate",
    topic: "phrasalverbs"
  },
  {
    id: 2,
    question: "What does 'put up with' mean?",
    correct_answer: "tolerate",
    options: ["endure", "reject", "tolerate", "examine"],
    type: "multiplechoice",
    level: "intermediate",
    topic: "phrasalverbs"
  },
  {
    id: 3,
    question: "What does 'get ahead' mean?",
    correct_answer: "advance",
    options: ["fall behind", "get ahead", "stay put", "backtrack"],
    type: "multiplechoice",
    level: "intermediate",
    topic: "phrasalverbs"
  },
  {
    id: 4,
    question: "What does 'call off' mean?",
    correct_answer: "cancel",
    options: ["postpone", "cancel", "delay", "prepare"],
    type: "multiplechoice",
    level: "intermediate",
    topic: "phrasalverbs"
  },
  {
    id: 5,
    question: "What does 'hold on' mean?",
    correct_answer: "wait",
    options: ["wait", "ignore", "decide", "advance"],
    type: "multiplechoice",
    level: "intermediate",
    topic: "phrasalverbs"
  }
];

// Ejercicios de Idioms - Nivel intermedio
const idiomsExercises: Exercise[] = [
  {
    id: 1,
    question: "What does 'spill the beans' mean?",
    correct_answer: "reveal a secret",
    options: ["spill food", "tell a lie", "reveal a secret", "keep a secret"],
    type: "multiplechoice",
    level: "intermediate",
    topic: "idioms"
  },
  {
    id: 2,
    question: "What does 'hit the nail on the head' mean?",
    correct_answer: "describe exactly",
    options: ["fail", "describe exactly", "make a mistake", "guess"],
    type: "multiplechoice",
    level: "intermediate",
    topic: "idioms"
  },
  {
    id: 3,
    question: "What does 'bark up the wrong tree' mean?",
    correct_answer: "pursue the wrong course",
    options: ["argue", "pursue the wrong course", "be successful", "make peace"],
    type: "multiplechoice",
    level: "intermediate",
    topic: "idioms"
  },
  {
    id: 4,
    question: "What does 'the ball is in your court' mean?",
    correct_answer: "it's your responsibility",
    options: ["the game is over", "it's your turn", "it's your responsibility", "the game has started"],
    type: "multiplechoice",
    level: "intermediate",
    topic: "idioms"
  },
  {
    id: 5,
    question: "What does 'under the radar' mean?",
    correct_answer: "not noticed",
    options: ["out of sight", "under the radar", "distracting", "in plain sight"],
    type: "multiplechoice",
    level: "intermediate",
    topic: "idioms"
  }
];

export {
  synonymsExercises,
  antonymsExercises,
  phrasalverbsExercises,
  idiomsExercises
};
