
import { Exercise } from "@/interface/exercises/interface";

// Ejercicios de Present Simple (Nivel intermedio)
const presentsimpleExercises: Exercise[] = [
  {
    id: 1,
    question: "She ___ often to the gym after work.",
    correct_answer: "goes",
    options: ["go", "goes", "going", "gone"],
    type: "multiplechoice",
    level: "intermediate",
    topic: "presentsimple"
  },
  {
    id: 2,
    question: "They ___ always arrive late on Mondays.",
    correct_answer: "do",
    options: ["does", "do", "is", "are"],
    type: "multiplechoice",
    level: "intermediate",
    topic: "presentsimple"
  },
  {
    id: 3,
    question: "I ___ my keys every time I leave the house.",
    correct_answer: "forget",
    options: ["forget", "forgets", "forgot", "forgetting"],
    type: "multiplechoice",
    level: "intermediate",
    topic: "presentsimple"
  },
  {
    id: 4,
    question: "He ___ lunch at 1 PM every day.",
    correct_answer: "has",
    options: ["have", "has", "having", "had"],
    type: "multiplechoice",
    level: "intermediate",
    topic: "presentsimple"
  },
  {
    id: 5,
    question: "We ___ a new project at work this week.",
    correct_answer: "start",
    options: ["start", "starts", "starting", "started"],
    type: "multiplechoice",
    level: "intermediate",
    topic: "presentsimple"
  }
];

// Ejercicios de Past Simple (Nivel intermedio)
const pastsimpleExercises: Exercise[] = [
  {
    id: 1,
    question: "I ___ to Paris last summer.",
    correct_answer: "went",
    options: ["go", "went", "gone", "going"],
    type: "multiplechoice",
    level: "intermediate",
    topic: "pastsimple"
  },
  {
    id: 2,
    question: "They ___ a great time at the party yesterday.",
    correct_answer: "had",
    options: ["have", "had", "has", "having"],
    type: "multiplechoice",
    level: "intermediate",
    topic: "pastsimple"
  },
  {
    id: 3,
    question: "She ___ to the meeting without any preparation.",
    correct_answer: "came",
    options: ["came", "come", "comes", "coming"],
    type: "multiplechoice",
    level: "intermediate",
    topic: "pastsimple"
  },
  {
    id: 4,
    question: "We ___ the test last week.",
    correct_answer: "took",
    options: ["take", "took", "taken", "taking"],
    type: "multiplechoice",
    level: "intermediate",
    topic: "pastsimple"
  },
  {
    id: 5,
    question: "He ___ a lot of money on his trip to Japan.",
    correct_answer: "spent",
    options: ["spend", "spent", "spending", "spends"],
    type: "multiplechoice",
    level: "intermediate",
    topic: "pastsimple"
  }
];

// Ejercicios de Future Simple (Nivel intermedio)
const futuresimpleExercises: Exercise[] = [
  {
    id: 1,
    question: "I ___ my homework later today.",
    correct_answer: "will finish",
    options: ["finish", "finishes", "finished", "will finish"],
    type: "multiplechoice",
    level: "intermediate",
    topic: "futuresimple"
  },
  {
    id: 2,
    question: "We ___ the project next week.",
    correct_answer: "will start",
    options: ["start", "started", "will start", "starting"],
    type: "multiplechoice",
    level: "intermediate",
    topic: "futuresimple"
  },
  {
    id: 3,
    question: "They ___ on vacation next month.",
    correct_answer: "will go",
    options: ["go", "going", "went", "will go"],
    type: "multiplechoice",
    level: "intermediate",
    topic: "futuresimple"
  },
  {
    id: 4,
    question: "She ___ to visit her grandparents next summer.",
    correct_answer: "will travel",
    options: ["travel", "travels", "will travel", "traveled"],
    type: "multiplechoice",
    level: "intermediate",
    topic: "futuresimple"
  },
  {
    id: 5,
    question: "We ___ you as soon as we receive the information.",
    correct_answer: "will contact",
    options: ["contact", "contacts", "will contact", "contacted"],
    type: "multiplechoice",
    level: "intermediate",
    topic: "futuresimple"
  }
];

// Ejercicios de Present Perfect (Nivel intermedio)
const presentperfectExercises: Exercise[] = [
  {
    id: 1,
    question: "I ___ never been to Japan.",
    correct_answer: "have",
    options: ["have", "had", "has", "having"],
    type: "multiplechoice",
    level: "intermediate",
    topic: "presentperfect"
  },
  {
    id: 2,
    question: "They ___ already completed the task.",
    correct_answer: "have",
    options: ["has", "have", "had", "having"],
    type: "multiplechoice",
    level: "intermediate",
    topic: "presentperfect"
  },
  {
    id: 3,
    question: "She ___ visited five countries in the last year.",
    correct_answer: "has",
    options: ["has", "have", "had", "having"],
    type: "multiplechoice",
    level: "intermediate",
    topic: "presentperfect"
  },
  {
    id: 4,
    question: "We ___ studied the material for weeks before the exam.",
    correct_answer: "have",
    options: ["have", "had", "has", "having"],
    type: "multiplechoice",
    level: "intermediate",
    topic: "presentperfect"
  },
  {
    id: 5,
    question: "He ___ just finished his lunch.",
    correct_answer: "has",
    options: ["has", "had", "have", "having"],
    type: "multiplechoice",
    level: "intermediate",
    topic: "presentperfect"
  }
];

export { presentsimpleExercises, pastsimpleExercises, futuresimpleExercises, presentperfectExercises };
