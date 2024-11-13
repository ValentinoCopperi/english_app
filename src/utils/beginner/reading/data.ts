import { Exercise } from "@/interface/exercises/interface";

// Ejercicios de Stories
const storiesExercises: Exercise[] = [
  {
    id: 1,
    question: "What is the main theme of this story?",
    text: "Once upon a time, in a small village, there lived a young girl named Lily who loved to explore the forest near her home...",
    correct_answer: "Adventure",
    options: ["Sadness", "Adventure", "Fear", "Love"],
    type: "reading",
    level: "beginner",
    topic: "stories"
  },
  {
    id: 2,
    question: "Who is the protagonist of the story?",
    text: "In a land far away, King Arthur ruled with fairness and bravery. His knights protected the kingdom with their lives...",
    correct_answer: "King Arthur",
    options: ["Merlin", "King Arthur", "Sir Lancelot", "The villagers"],
    type: "reading",
    level: "beginner",
    topic: "stories"
  },
  {
    id: 3,
    question: "Where does the story take place?",
    text: "Emma walked through the enchanted forest, where trees whispered secrets and paths changed overnight...",
    correct_answer: "Enchanted forest",
    options: ["City park", "Village square", "Enchanted forest", "Castle garden"],
    type: "reading",
    level: "beginner",
    topic: "stories"
  },
  {
    id: 4,
    question: "What kind of animal helped the hero?",
    text: "Jack found himself lost in the mountains, but a wise old eagle guided him back to safety...",
    correct_answer: "Eagle",
    options: ["Wolf", "Eagle", "Bear", "Rabbit"],
    type: "reading",
    level: "beginner",
    topic: "stories"
  },
  {
    id: 5,
    question: "How does the story end?",
    text: "After a long journey, Maya finally found the lost amulet and returned it to the village, bringing peace once again...",
    correct_answer: "Maya returns the amulet and brings peace",
    options: ["Maya leaves the village", "The amulet is never found", "Maya returns the amulet and brings peace", "The village is destroyed"],
    type: "reading",
    level: "beginner",
    topic: "stories"
  }
];

// Ejercicios de Articles
const articlesExercises: Exercise[] = [
  {
    id: 1,
    question: "What is the main topic of the article?",
    text: "Scientists have recently discovered a new species of frog in the Amazon rainforest. This discovery highlights the importance of preserving biodiversity...",
    correct_answer: "New species discovery",
    options: ["Climate change", "New species discovery", "Deforestation", "Amazon fires"],
    type: "reading",
    level: "beginner",
    topic: "articles"
  },
  {
    id: 2,
    question: "What is the effect of deforestation according to the article?",
    text: "Deforestation in the Amazon is reducing biodiversity and affecting indigenous communities that rely on the forest...",
    correct_answer: "Reduces biodiversity and affects communities",
    options: ["Helps local economy", "Increases biodiversity", "Reduces biodiversity and affects communities", "Improves agriculture"],
    type: "reading",
    level: "beginner",
    topic: "articles"
  },
  {
    id: 3,
    question: "What technology is discussed in the article?",
    text: "The use of solar panels in remote areas is helping communities access electricity without harming the environment...",
    correct_answer: "Solar panels",
    options: ["Wind turbines", "Solar panels", "Hydroelectric power", "Fossil fuels"],
    type: "reading",
    level: "beginner",
    topic: "articles"
  },
  {
    id: 4,
    question: "How do scientists monitor animal populations?",
    text: "To monitor animal populations in the wild, scientists use tracking devices and drones, allowing them to collect data remotely...",
    correct_answer: "Tracking devices and drones",
    options: ["Cameras only", "Tracking devices and drones", "Satellites", "Observation towers"],
    type: "reading",
    level: "beginner",
    topic: "articles"
  },
  {
    id: 5,
    question: "What is the purpose of the new law mentioned?",
    text: "A new law aims to reduce plastic waste by banning single-use plastics in many regions...",
    correct_answer: "Reduce plastic waste",
    options: ["Increase recycling", "Reduce plastic waste", "Promote plastic production", "Ban all plastic"],
    type: "reading",
    level: "beginner",
    topic: "articles"
  }
];

// Ejercicios de News
const newsExercises: Exercise[] = [
  {
    id: 1,
    question: "What recent event does the news article describe?",
    text: "Last week, a major earthquake struck the coastal city, causing widespread damage and prompting international aid...",
    correct_answer: "A major earthquake",
    options: ["Flood", "Hurricane", "A major earthquake", "Forest fire"],
    type: "reading",
    level: "beginner",
    topic: "news"
  },
  {
    id: 2,
    question: "What is the government planning according to the news?",
    text: "The government announced a new initiative to plant trees across urban areas to improve air quality...",
    correct_answer: "Plant trees to improve air quality",
    options: ["Cut down trees", "Plant trees to improve air quality", "Build factories", "Limit urban development"],
    type: "reading",
    level: "beginner",
    topic: "news"
  },
  {
    id: 3,
    question: "What caused the recent traffic disruption?",
    text: "Heavy rains led to flash floods, disrupting traffic and damaging roads in the city center...",
    correct_answer: "Flash floods",
    options: ["Snowstorm", "Flash floods", "Road construction", "Parade"],
    type: "reading",
    level: "beginner",
    topic: "news"
  },
  {
    id: 4,
    question: "Who is mentioned as a hero in the news?",
    text: "A firefighter rescued a family trapped in a burning building, earning praise from the community...",
    correct_answer: "A firefighter",
    options: ["A police officer", "A firefighter", "A doctor", "A teacher"],
    type: "reading",
    level: "beginner",
    topic: "news"
  },
  {
    id: 5,
    question: "What is the new regulation about?",
    text: "A new traffic regulation will require cyclists to wear helmets in all major cities...",
    correct_answer: "Cyclists must wear helmets",
    options: ["Increase bike lanes", "Reduce car traffic", "Cyclists must wear helmets", "Ban bicycles"],
    type: "reading",
    level: "beginner",
    topic: "news"
  }
];

// Ejercicios de Reviews
const reviewsExercises: Exercise[] = [
  {
    id: 1,
    question: "What does the reviewer think of the movie?",
    text: "The movie is a thrilling experience with stunning visuals and a gripping storyline. A must-watch for fans of the genre...",
    correct_answer: "Positive review",
    options: ["Negative review", "Mixed review", "Positive review", "Neutral review"],
    type: "reading",
    level: "beginner",
    topic: "reviews"
  },
  {
    id: 2,
    question: "What product is being reviewed?",
    text: "This smartphone offers great battery life, a fantastic camera, and an intuitive user interface. Ideal for tech enthusiasts...",
    correct_answer: "Smartphone",
    options: ["Laptop", "Tablet", "Smartphone", "Smartwatch"],
    type: "reading",
    level: "beginner",
    topic: "reviews"
  },
  {
    id: 3,
    question: "What is the main criticism of the book?",
    text: "The book has an interesting premise but falls short with a predictable plot and underdeveloped characters...",
    correct_answer: "Predictable plot and underdeveloped characters",
    options: ["Lack of humor", "Predictable plot and underdeveloped characters", "Too short", "Complex language"],
    type: "reading",
    level: "beginner",
    topic: "reviews"
  },
  {
    id: 4,
    question: "Who is the target audience for this game?",
    text: "The game is challenging and requires strategic thinking, perfect for fans of tactical role-playing games...",
    correct_answer: "Fans of tactical role-playing games",
    options: ["Puzzle lovers", "Action fans", "Fans of tactical role-playing games", "Sports enthusiasts"],
    type: "reading",
    level: "beginner",
    topic: "reviews"
  },
  {
    id: 5,
    question: "What does the reviewer like about the restaurant?",
    text: "The restaurant has a cozy atmosphere, delicious food, and excellent service. Highly recommended for a pleasant dining experience...",
    correct_answer: "Atmosphere, food, and service",
    options: ["Prices", "Location", "Atmosphere, food, and service", "Decor"],
    type: "reading",
    level: "beginner",
    topic: "reviews"
    }
]
   

// Ejercicios de Essays
const essaysExercises: Exercise[] = [
    {
      id: 1,
      question: "What is the essay mainly about?",
      text: "This essay explores the impacts of technology on human interactions and how it shapes modern society...",
      correct_answer: "Impacts of technology on human interactions",
      options: ["Global warming", "Impacts of technology on human interactions", "Traditional education", "Food culture"],
      type: "reading",
      level: "beginner",
      topic: "essays"
    },
    {
      id: 2,
      question: "What is the author's perspective on online learning?",
      text: "The author argues that online learning offers flexibility but lacks the social engagement found in traditional classrooms...",
      correct_answer: "Online learning offers flexibility but lacks social engagement",
      options: ["Online learning is better", "Traditional classrooms are outdated", "Online learning is useless", "Online learning offers flexibility but lacks social engagement"],
      type: "reading",
      level: "beginner",
      topic: "essays"
    },
    {
      id: 3,
      question: "What historical event is discussed in the essay?",
      text: "The essay examines the causes and consequences of the industrial revolution, focusing on its impact on urbanization...",
      correct_answer: "The industrial revolution",
      options: ["World War I", "The industrial revolution", "French revolution", "Space race"],
      type: "reading",
      level: "beginner",
      topic: "essays"
    },
    {
      id: 4,
      question: "What is the author's stance on environmental conservation?",
      text: "The author advocates for stronger policies to protect natural habitats and reduce pollution, emphasizing sustainability...",
      correct_answer: "Supports stronger conservation policies",
      options: ["Neutral", "Opposes conservation", "Supports stronger conservation policies", "Against pollution reduction"],
      type: "reading",
      level: "beginner",
      topic: "essays"
    },
    {
      id: 5,
      question: "What future challenge is mentioned in the essay?",
      text: "With advancing technology, the essay suggests that managing artificial intelligence ethically will be a key challenge in coming years...",
      correct_answer: "Ethical management of artificial intelligence",
      options: ["Food shortages", "Ethical management of artificial intelligence", "Lack of job opportunities", "Climate change"],
      type: "reading",
      level: "beginner",
      topic: "essays"
    }
];

export {
    articlesExercises,
    essaysExercises,
    newsExercises,
    reviewsExercises,
    storiesExercises
}