import { Exercise } from "@/interface/exercises/interface";

// Ejercicios de Trips
const tripsExercises: Exercise[] = [
  {
    id: 1,
    question: "What is the meaning of 'destination'?",
    correct_answer: "The place someone is going to",
    options: ["A method of transport", "The place someone is going to", "A type of luggage", "A ticket"],
    type: "vocabulary",
    level: "beginner",
    topic: "Trips"
  },
  {
    id: 2,
    question: "What do you call a place where planes take off and land?",
    correct_answer: "Airport",
    options: ["Bus station", "Hotel", "Airport", "Harbor"],
    type: "vocabulary",
    level: "beginner",
    topic: "Trips"
  },
  {
    id: 3,
    question: "What is a 'passport' used for?",
    correct_answer: "Identification for international travel",
    options: ["Ticket for a bus", "Identification for international travel", "Map of the city", "Invitation to a party"],
    type: "vocabulary",
    level: "beginner",
    topic: "Trips"
  },
  {
    id: 4,
    question: "What is a 'suitcase'?",
    correct_answer: "A bag to carry belongings",
    options: ["A map", "A bag to carry belongings", "A train ticket", "A guidebook"],
    type: "vocabulary",
    level: "beginner",
    topic: "Trips"
  },
  {
    id: 5,
    question: "What does 'tourist' mean?",
    correct_answer: "A person visiting a place",
    options: ["A local resident", "A tour guide", "A person visiting a place", "A hotel manager"],
    type: "vocabulary",
    level: "beginner",
    topic: "Trips"
  }
];

// Ejercicios de Family
const familyExercises: Exercise[] = [
  {
    id: 1,
    question: "What do you call the son of your brother or sister?",
    correct_answer: "Nephew",
    options: ["Niece", "Nephew", "Cousin", "Uncle"],
    type: "vocabulary",
    level: "beginner",
    topic: "Family"
  },
  {
    id: 2,
    question: "Who is the father of your mother or father?",
    correct_answer: "Grandfather",
    options: ["Grandfather", "Uncle", "Father-in-law", "Brother"],
    type: "vocabulary",
    level: "beginner",
    topic: "Family"
  },
  {
    id: 3,
    question: "What is the term for the wife of your father?",
    correct_answer: "Mother",
    options: ["Aunt", "Sister", "Mother", "Cousin"],
    type: "vocabulary",
    level: "beginner",
    topic: "Family"
  },
  {
    id: 4,
    question: "What do you call the daughter of your sibling?",
    correct_answer: "Niece",
    options: ["Niece", "Nephew", "Granddaughter", "Sister"],
    type: "vocabulary",
    level: "beginner",
    topic: "Family"
  },
  {
    id: 5,
    question: "What do you call the brother of your mother or father?",
    correct_answer: "Uncle",
    options: ["Uncle", "Father", "Cousin", "Nephew"],
    type: "vocabulary",
    level: "beginner",
    topic: "Family"
  }
];

// Ejercicios de School
const schoolExercises: Exercise[] = [
  {
    id: 1,
    question: "What is the meaning of 'classroom'?",
    correct_answer: "A room where students are taught",
    options: ["A sports area", "A room where students are taught", "The school office", "A library section"],
    type: "vocabulary",
    level: "beginner",
    topic: "School"
  },
  {
    id: 2,
    question: "What is a 'pencil' used for?",
    correct_answer: "Writing or drawing",
    options: ["Writing or drawing", "Carrying books", "Reading", "Painting"],
    type: "vocabulary",
    level: "beginner",
    topic: "School"
  },
  {
    id: 3,
    question: "What is the job of a 'teacher'?",
    correct_answer: "To educate students",
    options: ["To educate students", "To serve food", "To clean the school", "To repair equipment"],
    type: "vocabulary",
    level: "beginner",
    topic: "School"
  },
  {
    id: 4,
    question: "What is a 'library'?",
    correct_answer: "A place with books for reading or borrowing",
    options: ["A place with sports equipment", "A place with food", "A place with books for reading or borrowing", "A playground"],
    type: "vocabulary",
    level: "beginner",
    topic: "School"
  },
  {
    id: 5,
    question: "What is 'homework'?",
    correct_answer: "Schoolwork done at home",
    options: ["Schoolwork done at home", "A test at school", "Group activity", "A school sport"],
    type: "vocabulary",
    level: "beginner",
    topic: "School"
  }
];

// Ejercicios de Food
const foodExercises: Exercise[] = [
  {
    id: 1,
    question: "What is an 'apple'?",
    correct_answer: "A type of fruit",
    options: ["A vegetable", "A type of fruit", "A spice", "A grain"],
    type: "vocabulary",
    level: "beginner",
    topic: "Food"
  },
  {
    id: 2,
    question: "What is 'bread' made from?",
    correct_answer: "Flour and water",
    options: ["Sugar and milk", "Flour and water", "Butter and eggs", "Meat and vegetables"],
    type: "vocabulary",
    level: "beginner",
    topic: "Food"
  },
  {
    id: 3,
    question: "What do you call a person who doesn’t eat meat?",
    correct_answer: "Vegetarian",
    options: ["Carnivore", "Herbivore", "Vegetarian", "Omnivore"],
    type: "vocabulary",
    level: "beginner",
    topic: "Food"
  },
  {
    id: 4,
    question: "What type of food is a 'carrot'?",
    correct_answer: "Vegetable",
    options: ["Fruit", "Spice", "Vegetable", "Grain"],
    type: "vocabulary",
    level: "beginner",
    topic: "Food"
  },
  {
    id: 5,
    question: "What is 'pasta' usually made of?",
    correct_answer: "Wheat",
    options: ["Corn", "Rice", "Wheat", "Potato"],
    type: "vocabulary",
    level: "beginner",
    topic: "Food"
  }
];

// Ejercicios de Sports
const sportsExercises: Exercise[] = [
  {
    id: 1,
    question: "What is 'soccer'?",
    correct_answer: "A team sport played with a ball",
    options: ["A team sport played with a ball", "A water sport", "An individual sport", "A winter sport"],
    type: "vocabulary",
    level: "beginner",
    topic: "Sports"
  },
  {
    id: 2,
    question: "What do you call the place where swimmers compete?",
    correct_answer: "Swimming pool",
    options: ["Basketball court", "Swimming pool", "Tennis court", "Soccer field"],
    type: "vocabulary",
    level: "beginner",
    topic: "Sports"
  },
  {
    id: 3,
    question: "What is a 'coach'?",
    correct_answer: "A person who trains athletes",
    options: ["An athlete", "A person who trains athletes", "A referee", "A team captain"],
    type: "vocabulary",
    level: "beginner",
    topic: "Sports"
  },
  {
    id: 4,
    question: "What equipment is used in 'tennis'?",
    correct_answer: "Racket and ball",
    options: ["Racket and ball", "Puck and stick", "Ball and net", "Helmet and gloves"],
    type: "vocabulary",
    level: "beginner",
    topic: "Sports"
  },
  {
    id: 5,
    question: "What do you call the person who oversees a game?",
    correct_answer: "Referee",
    options: ["Coach", "Captain", "Referee", "Fan"],
    type: "vocabulary",
    level: "beginner",
    topic: "Sports"
  }
];

// Ejercicios de Weather
const weatherExercises: Exercise[] = [
  {
    id: 1,
    question: "What does 'sunny' mean?",
    correct_answer: "When the sun is shining",
    options: ["Cloudy day", "When the sun is shining", "Rainy day", "Snowing"],
    type: "vocabulary",
    level: "beginner",
    topic: "Weather"
  },
  {
    id: 2,
    question: "What is a 'storm'?",
    correct_answer: "A period of violent weather with thunder and lightning",
    options: ["Sunny day", "Windy weather", "A period of violent weather with thunder and lightning", "Snowing"],
    type: "vocabulary",
    level: "beginner",
    topic: "Weather"
  },
  {
    id: 3,
    question: "What does 'foggy' mean?",
    correct_answer: "When there is thick mist in the air",
    options: ["Sunny day", "When there is thick mist in the air", "Rainy day", "Cold weather"],
    type: "vocabulary",
    level: "beginner",
    topic: "Weather"
  },
  {
    id: 4,
    question: "What is 'humidity'?",
    correct_answer: "Moisture in the air",
    options: ["Wind", "Moisture in the air", "Sunlight", "Cold temperature"],
    type: "vocabulary",
    level: "beginner",
    topic: "Weather"
  },
  {
    id: 5,
    question: "What is 'temperature' a measure of?",
    correct_answer: "How hot or cold it is",
    options: ["Air pressure", "Wind speed", "How hot or cold it is", "Altitude"],
    type: "vocabulary",
    level: "beginner",
    topic: "Weather"
  }
];

// Ejercicios de Work
const workExercises: Exercise[] = [
  {
    id: 1,
    question: "What does 'job' mean?",
    correct_answer: "A paid position of employment",
    options: ["A hobby", "A paid position of employment", "A vacation", "A sport"],
    type: "vocabulary",
    level: "beginner",
    topic: "Work"
  },
  {
    id: 2,
    question: "Who is a 'manager'?",
    correct_answer: "A person who supervises employees",
    options: ["An employee", "A person who supervises employees", "A customer", "A supplier"],
    type: "vocabulary",
    level: "beginner",
    topic: "Work"
  },
  {
    id: 3,
    question: "What is a 'salary'?",
    correct_answer: "The money earned from a job",
    options: ["A type of job", "A workplace", "The money earned from a job", "A day off"],
    type: "vocabulary",
    level: "beginner",
    topic: "Work"
  },
  {
    id: 4,
    question: "What is a 'resume'?",
    correct_answer: "A document showing one's work experience and skills",
    options: ["A job contract", "A document showing one's work experience and skills", "A work ID", "A break time schedule"],
    type: "vocabulary",
    level: "beginner",
    topic: "Work"
  },
  {
    id: 5,
    question: "What is the meaning of 'promotion'?",
    correct_answer: "A higher position in the workplace",
    options: ["A day off", "A type of work", "A higher position in the workplace", "A workplace location"],
    type: "vocabulary",
    level: "beginner",
    topic: "Work"
  }
];

export {
  tripsExercises,
  familyExercises,
  schoolExercises,
  foodExercises,
  sportsExercises,
  weatherExercises,
  workExercises
};
