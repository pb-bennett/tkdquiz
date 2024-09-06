const questionVersions = [
  //Norwegian question, korean answer
  { question: 'norwegian', answer: 'korean' },
  { question: 'korean', answer: 'norwegian' },
  { question: 'norwegian', answer: 'pic' },
  { question: 'pic', answer: 'norwegian' },
  { question: 'pic', answer: 'korean' },
  { question: 'korean', answer: 'pic' },
];

const generateQuizQuestions = (quizData) => {
  const questions = quizData.map((dataObj) => {
    return returnQuestionAndAnswer(dataObj, quizData);
  });
  return questions;
};

const returnQuestionAndAnswer = (dataObj, quizData) => {
  const questionType =
    questionVersions[
      Math.floor(Math.random() * questionVersions.length)
    ];
  const question = dataObj[questionType.question];
  const answer = dataObj[questionType.answer];
  const otherOptionsArray = quizData.filter(
    (obj) => obj.id !== dataObj.id
  );
  const wrongOptions = otherOptionsArray.map(
    (obj) => obj[questionType.answer]
  );
  return { question, answer, wrongOptions };
};

export { generateQuizQuestions };
