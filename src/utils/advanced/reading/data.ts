import { Exercise } from "@/interface/exercises/interface";
// Advanced Stories Exercises
const storiesExercises: Exercise[] = [
    {
        id: 1,
        question: "Analyze the symbolism of the forest in relation to the protagonist's internal journey.",
        text: "Through the dense, ever-shifting mists of the ancient forest, Isabella traced paths that seemed to mirror the labyrinth of her own doubts. Each gnarled tree trunk bore witness to her transformation, while shadows danced with memories of her past life in the city. The deeper she ventured, the more the forest seemed to whisper forgotten truths, its very essence intertwined with her quest for identity...",
        correct_answer: "The forest represents psychological transformation and self-discovery",
        options: ["The forest is merely a dangerous obstacle", "The forest represents psychological transformation and self-discovery", "The forest symbolizes human destruction of nature", "The forest is just a scenic backdrop"],
        type: "reading",
        level: "advanced",
        topic: "stories"
    },
    {
        id: 2,
        question: "How does the author's use of parallel narratives contribute to the theme of fate versus free will?",
        text: "As Marcus descended into the catacombs beneath Paris, Elena ascended Mount Kilimanjaro. Neither knew of the other's existence, yet their decisions, separated by continents, would inevitably converge to alter the course of history. While Marcus discovered ancient prophecies foretelling global catastrophe, Elena uncovered evidence of a solution hidden in tribal legends...",
        correct_answer: "The parallel journeys show how individual choices intersect with predetermined destiny",
        options: ["The narratives are unrelated and confusing", "The parallel journeys show how individual choices intersect with predetermined destiny", "The dual narratives are merely stylistic choices", "The stories contradict each other"],
        type: "reading",
        level: "advanced",
        topic: "stories"
    },
    {
        id: 3,
        question: "What literary devices are employed to convey the theme of time's relativity?",
        text: "The grandfather clock in the hall struck thirteen as Sarah stepped through the mirror. In the reflected world, decades passed like minutes, while in her own realm, seconds stretched into eternities. The roses in the garden bloomed and withered in rapid succession, their petals marking the discord between temporal planes...",
        correct_answer: "Paradox, symbolism, and metaphorical imagery",
        options: ["Only simple metaphors", "Basic descriptions and dialogue", "Paradox, symbolism, and metaphorical imagery", "Direct narrative exposition"],
        type: "reading",
        level: "advanced",
        topic: "stories"
    },
    {
        id: 4,
        question: "How does the unreliable narrator affect the interpretation of events in the story?",
        text: "I remember it clearly—or perhaps I don't. The letters arrived on Tuesday, though Mother insists it was Friday. The photographs show a green door, but in my mind, it's always been blue. Dr. Harrison says my memories are trustworthy, but his office seems to change location every time I visit...",
        correct_answer: "It creates uncertainty about the truth and questions reality versus perception",
        options: ["It simply confuses the reader", "It makes the story more exciting", "It creates uncertainty about the truth and questions reality versus perception", "It has no significant impact"],
        type: "reading",
        level: "advanced",
        topic: "stories"
    },
    {
        id: 5,
        question: "Analyze the postmodern elements in the story's structure and themes.",
        text: "The story begins on page 47, though the protagonist doesn't realize she's in a story until page 23. The author frequently interrupts to argue with the characters about their choices, while footnotes reveal an entirely different narrative occurring in parallel universes. Reality fragments and reassembles with each turn of the page...",
        correct_answer: "Meta-narrative awareness, fragmentation, and reality deconstruction",
        options: ["Traditional linear storytelling", "Meta-narrative awareness, fragmentation, and reality deconstruction", "Simple plot twists", "Historical references"],
        type: "reading",
        level: "advanced",
        topic: "stories"
    }
];

// Advanced Articles Exercises
const articlesExercises: Exercise[] = [
    {
        id: 1,
        question: "Evaluate the article's argument regarding quantum computing's impact on cryptography.",
        text: "Recent developments in quantum computing have demonstrated the potential to break current encryption standards through Shor's algorithm implementation. While the technology remains in its infancy, the implications for cybersecurity infrastructure and blockchain technology present immediate concerns for financial institutions and national security...",
        correct_answer: "The article argues that quantum computing poses an imminent threat to current encryption methods",
        options: ["Quantum computing is irrelevant to security", "The article argues that quantum computing poses an imminent threat to current encryption methods", "Encryption is unbreakable", "The threat is purely theoretical"],
        type: "reading",
        level: "advanced",
        topic: "articles"
    },
    {
        id: 2,
        question: "Analyze the methodology used in the research on neuroplasticity.",
        text: "The longitudinal study employed fMRI scanning combined with cognitive behavioral therapy in 150 participants over five years. Control groups received traditional treatment methods, while experimental groups underwent novel neural feedback protocols. The results challenge conventional understanding of brain adaptation rates...",
        correct_answer: "The study uses a complex combination of imaging and behavioral analysis with control groups",
        options: ["Simple observation of patients", "The study uses a complex combination of imaging and behavioral analysis with control groups", "Only statistical analysis", "Purely theoretical research"],
        type: "reading",
        level: "advanced",
        topic: "articles"
    },
    {
        id: 3,
        question: "What are the implications of the findings on climate feedback loops?",
        text: "Research indicates that methane release from thawing permafrost creates a positive feedback loop, accelerating global temperature rise beyond previous models' predictions. This suggests that current climate mitigation strategies may be insufficient to prevent cascading effects...",
        correct_answer: "Current climate models may underestimate the rate of global warming due to compound effects",
        options: ["Climate change is not real", "The situation is easily reversible", "Current climate models may underestimate the rate of global warming due to compound effects", "There are no significant implications"],
        type: "reading",
        level: "advanced",
        topic: "articles"
    },
    {
        id: 4,
        question: "How does the article address the philosophical implications of artificial consciousness?",
        text: "The emergence of complex neural networks exhibiting unexpected behavioral patterns raises fundamental questions about consciousness and self-awareness. The article examines the intersection of information processing, emergence theory, and philosophical zombies in the context of artificial intelligence development...",
        correct_answer: "It explores the relationship between information processing and consciousness in AI systems",
        options: ["It dismisses AI consciousness as impossible", "It explores the relationship between information processing and consciousness in AI systems", "It only focuses on technical aspects", "It avoids philosophical questions"],
        type: "reading",
        level: "advanced",
        topic: "articles"
    },
    {
        id: 5,
        question: "Evaluate the economic theory presented regarding wealth inequality dynamics.",
        text: "The paper presents a novel mathematical model suggesting that wealth inequality follows fractal patterns influenced by both systemic factors and individual behavior. Using complexity theory and agent-based modeling, it challenges traditional economic assumptions about market efficiency...",
        correct_answer: "The theory combines complexity science with economic behavior to explain wealth distribution patterns",
        options: ["It only discusses traditional economic theories", "The theory combines complexity science with economic behavior to explain wealth distribution patterns", "It focuses solely on individual wealth", "It ignores mathematical models"],
        type: "reading",
        level: "advanced",
        topic: "articles"
    }
];

// Advanced News Exercises
const newsExercises: Exercise[] = [
    {
        id: 1,
        question: "Analyze the geopolitical implications of the diplomatic crisis described in the article.",
        text: "The unprecedented withdrawal of ambassadors from five major powers has created a diplomatic vacuum in the region. Trade agreements worth billions hang in the balance, while cybersecurity concerns and military exercises near disputed territories escalate tensions...",
        correct_answer: "The crisis threatens global economic stability and regional security arrangements",
        options: ["The situation is purely symbolic", "The crisis threatens global economic stability and regional security arrangements", "It only affects tourism", "There are no serious implications"],
        type: "reading",
        level: "advanced",
        topic: "news"
    },
    {
        id: 2,
        question: "How does the article frame the intersection of technological innovation and privacy rights?",
        text: "The implementation of citywide facial recognition systems has sparked debate over the balance between security and privacy. Civil rights groups argue that the AI-driven surveillance network violates constitutional protections, while law enforcement cites reduced crime rates...",
        correct_answer: "It presents the conflict between public safety benefits and fundamental privacy rights",
        options: ["It only supports surveillance", "It only discusses technology", "It presents the conflict between public safety benefits and fundamental privacy rights", "It ignores privacy concerns"],
        type: "reading",
        level: "advanced",
        topic: "news"
    },
    {
        id: 3,
        question: "Evaluate the economic analysis of the new trade agreement's impact.",
        text: "The multilateral trade pact introduces complex tariff structures based on carbon emissions, while implementing blockchain-verified supply chain tracking. Economists project significant shifts in global manufacturing patterns and potential disruption to emerging market economies...",
        correct_answer: "The agreement combines environmental standards with economic incentives, potentially restructuring global trade",
        options: ["It only affects local businesses", "The agreement combines environmental standards with economic incentives, potentially restructuring global trade", "It has no economic impact", "It only discusses tariffs"],
        type: "reading",
        level: "advanced",
        topic: "news"
    },
    {
        id: 4,
        question: "What are the sociological implications of the educational reform described?",
        text: "The revolutionary education bill integrates artificial intelligence tutoring with traditional teaching methods, while introducing universal basic income for students. Critics argue it could exacerbate social stratification, while supporters claim it democratizes access to quality education...",
        correct_answer: "The reform could fundamentally alter social mobility and educational equality",
        options: ["It only affects teachers", "The reform could fundamentally alter social mobility and educational equality", "It has no social impact", "It only changes curriculum"],
        type: "reading",
        level: "advanced",
        topic: "news"
    },
    {
        id: 5,
        question: "Analyze the environmental impact assessment of the new energy policy.",
        text: "The controversial energy framework mandates quantum-enhanced grid systems and fusion power integration, while phasing out traditional renewables. Environmental scientists debate the long-term implications for biodiversity and climate stability...",
        correct_answer: "The policy presents complex trade-offs between technological advancement and environmental protection",
        options: ["It only discusses energy prices", "The policy presents complex trade-offs between technological advancement and environmental protection", "It has no environmental impact", "It only affects power companies"],
        type: "reading",
        level: "advanced",
        topic: "news"
    }
];

// Advanced Reviews Exercises
const reviewsExercises: Exercise[] = [
    {
        id: 1,
        question: "Analyze how the film's narrative structure contributes to its thematic exploration of memory.",
        text: "The director's latest work employs non-linear storytelling and nested narratives, with scenes that fold into themselves like a temporal Möbius strip. Through fragmented memories and unreliable perspectives, the film challenges our understanding of truth and consciousness...",
        correct_answer: "The complex structure mirrors the fragmented nature of memory and perception",
        options: ["The structure is randomly chosen", "The complex structure mirrors the fragmented nature of memory and perception", "It follows a traditional narrative", "The structure detracts from the theme"],
        type: "reading",
        level: "advanced",
        topic: "reviews"
    },
    {
        id: 2,
        question: "Evaluate the novel's use of metafictional elements in relation to its central themes.",
        text: "The author's experimental approach breaks the fourth wall repeatedly, with characters becoming aware of their fictional nature. The narrative includes fictional academic papers analyzing the story itself, while the protagonist struggles with determinism versus free will...",
        correct_answer: "The metafictional elements reinforce themes of reality, authorship, and free will",
        options: ["The elements are purely decorative", "The metafictional elements reinforce themes of reality, authorship, and free will", "It confuses the reader", "The approach fails entirely"],
        type: "reading",
        level: "advanced",
        topic: "reviews"
    },
    {
        id: 3,
        question: "How does the game's mechanical design reflect its philosophical themes?",
        text: "This groundbreaking title integrates player choice with quantum mechanics, where multiple playthroughs exist simultaneously in superposition. The gameplay mechanics mirror concepts of determinism and multiple worlds theory, while the AI adapts to player decisions in unprecedented ways...",
        correct_answer: "The mechanics are intrinsically linked to the game's exploration of choice and quantum reality",
        options: ["The mechanics are purely for entertainment", "The mechanics are intrinsically linked to the game's exploration of choice and quantum reality", "There is no connection to themes", "The mechanics are traditional"],
        type: "reading",
        level: "advanced",
        topic: "reviews"
    },
    {
        id: 4,
        question: "Analyze the restaurant's fusion cuisine in the context of cultural appropriation versus innovation.",
        text: "The chef's controversial approach combines indigenous cooking techniques with molecular gastronomy, raising questions about cultural authenticity and culinary evolution. Traditional recipes are deconstructed and reimagined through a postmodern culinary lens...",
        correct_answer: "The cuisine represents a complex dialogue between tradition and innovation",
        options: ["It's simple fusion food", "The cuisine represents a complex dialogue between tradition and innovation", "It's purely traditional", "It's complete appropriation"],
        type: "reading",
        level: "advanced",
        topic: "reviews"
    },
    {
        id: 5,
        question: "Evaluate how the exhibition challenges conventional artistic paradigms.",
        text: "The retrospective combines augmented reality with traditional media, creating layered experiences that question the nature of art itself. Visitors become part of the installations, while AI systems generate unique interactions based on collective audience responses...",
        correct_answer: "The exhibition blurs boundaries between viewer, artist, and artwork while incorporating technological innovation",
        options: ["It's a traditional exhibition", "The exhibition blurs boundaries between viewer, artist, and artwork while incorporating technological innovation", "It fails to innovate", "It's purely digital art"],
        type: "reading",
        level: "advanced",
        topic: "reviews"
    }
];

const essaysExercises: Exercise[] = [
    {
        id: 1,
        question: "Analyze the ethical implications of human genetic modification in light of recent CRISPR advances.",
        text: "Consider the societal, ethical, and biological implications of human genetic modification. Address issues of accessibility, inequality, and the philosophical questions of human identity and evolution...",
        correct_answer: "Genetic modification presents complex ethical challenges involving human rights, inequality, and the future of human evolution while raising questions about species identity and biological determinism",
        options: [
            "Genetic modification should be completely banned without exceptions",
            "Genetic modification presents complex ethical challenges involving human rights, inequality, and the future of human evolution while raising questions about species identity and biological determinism",
            "Genetic modification should be unrestricted and available to all",
            "Only therapeutic modifications should be considered, ignoring enhancement possibilities"
        ],
        type: "reading",
        level: "advanced",
        topic: "essays"
    },
    {
        id: 2,
        question: "Evaluate the role of artificial intelligence in judicial decision-making systems from legal and ethical perspectives.",
        text: "Examine the implications of implementing AI in judicial systems, considering algorithmic bias, transparency, due process, and the fundamental nature of justice...",
        correct_answer: "AI in judiciary systems presents a complex interplay between technological efficiency and fundamental rights, raising crucial questions about bias, transparency, accountability, and the essential human elements of justice",
        options: [
            "AI should replace human judges entirely to eliminate bias",
            "AI in judiciary systems presents a complex interplay between technological efficiency and fundamental rights, raising crucial questions about bias, transparency, accountability, and the essential human elements of justice",
            "AI has no place in judicial systems as it lacks human empathy",
            "AI should only be used for administrative tasks in courts"
        ],
        type: "reading",
        level: "advanced",
        topic: "essays"
    },
    {
        id: 3,
        question: "Discuss the philosophical implications of consciousness uploading and digital immortality in relation to personal identity and consciousness theories.",
        text: "Analyze the concept of consciousness uploading considering theories of mind, personal identity, consciousness continuity, and the nature of human experience...",
        correct_answer: "Digital consciousness raises fundamental questions about the nature of identity, consciousness continuity, and authenticity while challenging traditional concepts of mortality and human experience",
        options: [
            "Consciousness uploading is technically impossible and shouldn't be discussed",
            "Digital consciousness raises fundamental questions about the nature of identity, consciousness continuity, and authenticity while challenging traditional concepts of mortality and human experience",
            "Digital copies would be identical to original consciousness in every way",
            "The concept only has implications for computer science, not philosophy"
        ],
        type: "reading",
        level: "advanced",
        topic: "essays"
    },
    {
        id: 4,
        question: "Analyze the intersection of quantum computing, cryptography, and national sovereignty in the digital age.",
        text: "Examine how quantum computing capabilities affect national security, digital privacy, and international relations in an interconnected world...",
        correct_answer: "The advent of quantum computing fundamentally challenges current cryptographic security paradigms while raising complex questions about national sovereignty, privacy rights, and global power dynamics in the digital sphere",
        options: [
            "Quantum computing only affects scientific research",
            "The advent of quantum computing fundamentally challenges current cryptographic security paradigms while raising complex questions about national sovereignty, privacy rights, and global power dynamics in the digital sphere",
            "Traditional encryption methods will remain effective",
            "The impact is limited to commercial applications"
        ],
        type: "reading",
        level: "advanced",
        topic: "essays"
    },
    {
        id: 5,
        question: "Evaluate the sociological and psychological implications of immersive virtual reality on human relationships and society.",
        text: "Consider how widespread adoption of immersive virtual reality technologies might affect human psychology, social interactions, and societal structures...",
        correct_answer: "Immersive virtual reality presents profound implications for human psychological development, social connectivity, and societal organization, while raising questions about authenticity, reality perception, and the nature of human experience",
        options: [
            "Virtual reality is just another form of entertainment",
            "Immersive virtual reality presents profound implications for human psychological development, social connectivity, and societal organization, while raising questions about authenticity, reality perception, and the nature of human experience",
            "Virtual reality will completely replace physical interaction",
            "The technology has no significant social impact"
        ],
        type: "reading",
        level: "advanced",
        topic: "essays"
    }
];

export {
    articlesExercises,
    essaysExercises,
    newsExercises,
    reviewsExercises,
    storiesExercises
};