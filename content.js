// ============================================================
// DEMO content — generic sample data only.
// The real, private lessons are NOT here. They live only on the
// local Mac copy and in the private repo (english-study-app).
// This public version exists just to run/show the app online.
// ============================================================

const study_allDecksMap = {
  demo_vocab: {
    title: "Sample Vocabulary",
    reversible: true,
    cards: [
      { term: "ubiquitous", definition: "Wszechobecny. (present everywhere)" },
      { term: "to procrastinate", definition: "Zwlekać, odkładać na później. (to delay doing something)" },
      { term: "resilient", definition: "Odporny, wytrzymały. (able to recover quickly)" },
      { term: "meticulous", definition: "Skrupulatny, dokładny. (very careful and precise)" },
      { term: "to thrive", definition: "Prosperować, rozwijać się. (to grow or do well)" },
      { term: "ambiguous", definition: "Niejednoznaczny. (open to more than one meaning)" },
    ],
  },
  demo_idioms: {
    title: "Sample Idioms",
    reversible: false,
    cards: [
      { term: "break the ice", definition: "Przełamać lody. (to start a conversation)" },
      { term: "a piece of cake", definition: "Bułka z masłem. (very easy)" },
      { term: "hit the books", definition: "Wziąć się do nauki. (to study hard)" },
      { term: "under the weather", definition: "Czuć się kiepsko. (feeling ill)" },
      { term: "the ball is in your court", definition: "Piłka jest po Twojej stronie. (it's your decision now)" },
    ],
  },
};

const study_lessons = [
  {
    lessonTitle: "Demo Lesson",
    lessonSubtitle: "Sample vocabulary & idioms",
    deckIds: ["demo_vocab", "demo_idioms"],
  },
];

const translation_allLessons = [
  {
    lessonTitle: "Demo Lesson",
    lessonSubtitle: "Sample sentences",
    texts: [
      {
        title: "Everyday Sentences",
        pairs: [
          { source: "Jak się masz?", translation: "How are you?" },
          { source: "Czy mógłbyś mi pomóc?", translation: "Could you help me?" },
          { source: "Nie ma sensu się martwić.", translation: "There's no point in worrying." },
          { source: "Spróbujmy jeszcze raz.", translation: "Let's try again." },
          { source: "To była świetna decyzja.", translation: "That was a great decision." },
        ],
      },
    ],
  },
];
