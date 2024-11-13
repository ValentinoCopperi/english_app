import { Exercise } from "@/interface/exercises/interface";

// Ejercicios de Present Simple
const presentsimpleExercises: Exercise[] = [
  {
    id: 1,
    question: "She ___ breakfast every morning.",
    correct_answer: "eats",
    options: ["eat", "eats", "eating", "eaten"],
    type: "multiplechoice",
    level: "beginner",
    topic: "presentsimple"
  },
  {
    id: 2,
    question: "They ___ to school by bus.",
    correct_answer: "go",
    options: ["goes", "go", "going", "went"],
    type: "multiplechoice",
    level: "beginner",
    topic: "presentsimple"
  },
  {
    id: 3,
    question: "He ___ a book every night before bed.",
    correct_answer: "reads",
    options: ["read", "reads", "reading", "readed"],
    type: "multiplechoice",
    level: "beginner",
    topic: "presentsimple"
  },
  {
    id: 4,
    question: "We ___ English on Mondays.",
    correct_answer: "study",
    options: ["study", "studies", "studying", "studied"],
    type: "multiplechoice",
    level: "beginner",
    topic: "presentsimple"
  },
  {
    id: 5,
    question: "The dog ___ when it sees strangers.",
    correct_answer: "barks",
    options: ["bark", "barks", "barking", "barked"],
    type: "multiplechoice",
    level: "beginner",
    topic: "presentsimple"
  }
];

// Ejercicios de Past Simple
const pastsimpleExercises: Exercise[] = [
  {
    id: 1,
    question: "They ___ to the cinema yesterday.",
    correct_answer: "went",
    options: ["go", "went", "gone", "going"],
    type: "multiplechoice",
    level: "beginner",
    topic: "pastsimple"
  },
  {
    id: 2,
    question: "She ___ a letter last night.",
    correct_answer: "wrote",
    options: ["write", "wrote", "writes", "writing"],
    type: "multiplechoice",
    level: "beginner",
    topic: "pastsimple"
  },
  {
    id: 3,
    question: "We ___ a movie last weekend.",
    correct_answer: "watched",
    options: ["watch", "watched", "watches", "watching"],
    type: "multiplechoice",
    level: "beginner",
    topic: "pastsimple"
  },
  {
    id: 4,
    question: "He ___ a new car last month.",
    correct_answer: "bought",
    options: ["buys", "buy", "bought", "buying"],
    type: "multiplechoice",
    level: "beginner",
    topic: "pastsimple"
  },
  {
    id: 5,
    question: "I ___ dinner for my family yesterday.",
    correct_answer: "cooked",
    options: ["cook", "cooked", "cooking", "cooks"],
    type: "multiplechoice",
    level: "beginner",
    topic: "pastsimple"
  }
];

// Ejercicios de Future Simple
const futuresimpleExercises: Exercise[] = [
  {
    id: 1,
    question: "He ___ his homework tomorrow.",
    correct_answer: "will do",
    options: ["does", "did", "do", "will do"],
    type: "multiplechoice",
    level: "beginner",
    topic: "futuresimple"
  },
  {
    id: 2,
    question: "They ___ to the park next weekend.",
    correct_answer: "will go",
    options: ["go", "goes", "went", "will go"],
    type: "multiplechoice",
    level: "beginner",
    topic: "futuresimple"
  },
  {
    id: 3,
    question: "She ___ you later.",
    correct_answer: "will call",
    options: ["call", "called", "calls", "will call"],
    type: "multiplechoice",
    level: "beginner",
    topic: "futuresimple"
  },
  {
    id: 4,
    question: "We ___ pizza for dinner tonight.",
    correct_answer: "will have",
    options: ["have", "has", "will have", "having"],
    type: "multiplechoice",
    level: "beginner",
    topic: "futuresimple"
  },
  {
    id: 5,
    question: "I ___ my friends after work.",
    correct_answer: "will meet",
    options: ["meet", "meets", "met", "will meet"],
    type: "multiplechoice",
    level: "beginner",
    topic: "futuresimple"
  }
];

// Ejercicios de Present Perfect
const presentperfectExercises: Exercise[] = [
  {
    id: 1,
    question: "They ___ the movie already.",
    correct_answer: "have seen",
    options: ["see", "saw", "have seen", "sees"],
    type: "multiplechoice",
    level: "beginner",
    topic: "presentperfect"
  },
  {
    id: 2,
    question: "She ___ her homework yet.",
    correct_answer: "has not finished",
    options: ["has finished", "have finished", "has not finished", "did finished"],
    type: "multiplechoice",
    level: "beginner",
    topic: "presentperfect"
  },
  {
    id: 3,
    question: "I ___ to Italy several times.",
    correct_answer: "have been",
    options: ["been", "have been", "was", "am"],
    type: "multiplechoice",
    level: "beginner",
    topic: "presentperfect"
  },
  {
    id: 4,
    question: "We ___ this movie twice.",
    correct_answer: "have watched",
    options: ["watch", "watched", "have watched", "watches"],
    type: "multiplechoice",
    level: "beginner",
    topic: "presentperfect"
  },
  {
    id: 5,
    question: "He ___ his car recently.",
    correct_answer: "has washed",
    options: ["washes", "wash", "washed", "has washed"],
    type: "multiplechoice",
    level: "beginner",
    topic: "presentperfect"
  }
];

export { presentsimpleExercises, pastsimpleExercises, futuresimpleExercises, presentperfectExercises };
