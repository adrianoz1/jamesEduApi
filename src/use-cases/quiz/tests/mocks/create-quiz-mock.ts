export function createMockQuiz(changes = {}) {
  const quiz = {
    title: 'Quiz 1',
    level: 1,
    questions: [
      {
        content: 'question 1',
        alternatives: [
          {
            content: 'alternative 1',
            isCorrect: false,
          },
          {
            content: 'alternative 2',
            isCorrect: true,
          },
        ],
      },
    ],
  }

  Object.assign(quiz, changes)
  return quiz
}
