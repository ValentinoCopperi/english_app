import { Exercise } from "@/interface/exercises/interface";

// Ejercicios de Synonyms - Nivel avanzado
const synonymsExercises: Exercise[] = [
  {
    id: 1,
    question: "Choose the synonym for 'ephemeral'.",
    correct_answer: "transient",
    options: ["permanent", "lasting", "ephemeral", "transient"],
    type: "multiplechoice",
    level: "advanced",
    topic: "synonyms"
  },
  {
    id: 2,
    question: "Choose the synonym for 'ubiquitous'.",
    correct_answer: "omnipresent",
    options: ["rare", "scarce", "ubiquitous", "omnipresent"],
    type: "multiplechoice",
    level: "advanced",
    topic: "synonyms"
  },
  {
    id: 3,
    question: "Choose the synonym for 'perfidious'.",
    correct_answer: "treacherous",
    options: ["loyal", "faithful", "perfidious", "treacherous"],
    type: "multiplechoice",
    level: "advanced",
    topic: "synonyms"
  },
  {
    id: 4,
    question: "Choose the synonym for 'ineffable'.",
    correct_answer: "indescribable",
    options: ["clear", "obvious", "ineffable", "indescribable"],
    type: "multiplechoice",
    level: "advanced",
    topic: "synonyms"
  },
  {
    id: 5,
    question: "Choose the synonym for 'surreptitious'.",
    correct_answer: "clandestine",
    options: ["obvious", "surreptitious", "clandestine", "overt"],
    type: "multiplechoice",
    level: "advanced",
    topic: "synonyms"
  }
];

// Ejercicios de Antonyms - Nivel avanzado
const antonymsExercises: Exercise[] = [
  {
    id: 1,
    question: "Choose the antonym for 'magnanimous'.",
    correct_answer: "petty",
    options: ["generous", "magnanimous", "petty", "noble"],
    type: "multiplechoice",
    level: "advanced",
    topic: "antonyms"
  },
  {
    id: 2,
    question: "Choose the antonym for 'fastidious'.",
    correct_answer: "careless",
    options: ["meticulous", "fastidious", "careless", "precise"],
    type: "multiplechoice",
    level: "advanced",
    topic: "antonyms"
  },
  {
    id: 3,
    question: "Choose the antonym for 'pellucid'.",
    correct_answer: "opaque",
    options: ["clear", "pellucid", "opaque", "transparent"],
    type: "multiplechoice",
    level: "advanced",
    topic: "antonyms"
  },
  {
    id: 4,
    question: "Choose the antonym for 'equanimous'.",
    correct_answer: "volatile",
    options: ["composed", "equanimous", "volatile", "serene"],
    type: "multiplechoice",
    level: "advanced",
    topic: "antonyms"
  },
  {
    id: 5,
    question: "Choose the antonym for 'propitious'.",
    correct_answer: "inauspicious",
    options: ["favorable", "propitious", "inauspicious", "fortunate"],
    type: "multiplechoice",
    level: "advanced",
    topic: "antonyms"
  }
];

// Ejercicios de Phrasal Verbs - Nivel avanzado
const phrasalverbsExercises: Exercise[] = [
  {
    id: 1,
    question: "What does 'cotton on to' mean?",
    correct_answer: "begin to understand",
    options: ["reject", "cotton on to", "ignore", "begin to understand"],
    type: "multiplechoice",
    level: "advanced",
    topic: "phrasalverbs"
  },
  {
    id: 2,
    question: "What does 'hash out' mean?",
    correct_answer: "discuss in detail",
    options: ["avoid", "forget", "discuss in detail", "postpone"],
    type: "multiplechoice",
    level: "advanced",
    topic: "phrasalverbs"
  },
  {
    id: 3,
    question: "What does 'pan out' mean?",
    correct_answer: "develop successfully",
    options: ["fail", "pan out", "disappear", "develop successfully"],
    type: "multiplechoice",
    level: "advanced",
    topic: "phrasalverbs"
  },
  {
    id: 4,
    question: "What does 'zero in on' mean?",
    correct_answer: "focus precisely",
    options: ["ignore", "avoid", "focus precisely", "forget"],
    type: "multiplechoice",
    level: "advanced",
    topic: "phrasalverbs"
  },
  {
    id: 5,
    question: "What does 'flesh out' mean?",
    correct_answer: "develop fully",
    options: ["remove", "develop fully", "simplify", "abandon"],
    type: "multiplechoice",
    level: "advanced",
    topic: "phrasalverbs"
  }
];

// Ejercicios de Idioms - Nivel avanzado
const idiomsExercises: Exercise[] = [
  {
    id: 1,
    question: "What does 'beat around the bush' mean?",
    correct_answer: "avoid speaking directly",
    options: ["speak clearly", "be confused", "avoid speaking directly", "waste time"],
    type: "multiplechoice",
    level: "advanced",
    topic: "idioms"
  },
  {
    id: 2,
    question: "What does 'jump the shark' mean?",
    correct_answer: "decline in quality",
    options: ["improve suddenly", "decline in quality", "take risks", "make progress"],
    type: "multiplechoice",
    level: "advanced",
    topic: "idioms"
  },
  {
    id: 3,
    question: "What does 'throw in the towel' mean?",
    correct_answer: "admit defeat",
    options: ["start fighting", "admit defeat", "clean up", "continue trying"],
    type: "multiplechoice",
    level: "advanced",
    topic: "idioms"
  },
  {
    id: 4,
    question: "What does 'bite the bullet' mean?",
    correct_answer: "face something difficult",
    options: ["avoid problems", "face something difficult", "get injured", "show courage"],
    type: "multiplechoice",
    level: "advanced",
    topic: "idioms"
  },
  {
    id: 5,
    question: "What does 'cut corners' mean?",
    correct_answer: "do something poorly to save time",
    options: ["be efficient", "do something poorly to save time", "take shortcuts", "be precise"],
    type: "multiplechoice",
    level: "advanced",
    topic: "idioms"
  }
];

export {
  synonymsExercises,
  antonymsExercises,
  phrasalverbsExercises,
  idiomsExercises
};