const questionVersions = [
  //Norwegian question, korean answer
  { question: 'norwegian', answer: 'korean', description: 'nor-kor' },
  { question: 'korean', answer: 'norwegian', description: 'kor-nor' },
  { question: 'norwegian', answer: 'pic', description: 'nor-pic' },
  { question: 'pic', answer: 'norwegian', description: 'pic-nor' },
  { question: 'pic', answer: 'korean', description: 'pic-kor' },
  { question: 'korean', answer: 'pic', description: 'kor-pic' },
];

const generateQuizQuestions = (quizData) => {
  const questions = quizData.map((dataObj) => {
    return returnQuestionAndAnswer(dataObj, quizData);
  });
  return questions;
};

const returnQuestionAndAnswer = (dataObj, quizData) => {
  console.log('dataObj:', dataObj);
  console.log('quizData:', quizData);
  const questionType = dataObj.pic
    ? questionVersions[
        Math.floor(Math.random() * questionVersions.length)
      ]
    : questionVersions[Math.floor(Math.random() * 2)];
  const question = dataObj[questionType.question];
  const answer = dataObj[questionType.answer];
  const id = dataObj.id;
  const type = questionType.description;
  const otherOptionsArray = quizData.filter(
    (obj) => obj.id !== dataObj.id
  );
  const wrongOptions = otherOptionsArray.map(
    (obj) => obj[questionType.answer]
  );
  return { id, question, answer, wrongOptions, type };
};

const getQuizCircleColor = (question, index, currentQuestion) => {
  let circleColor;
  if (question.receivedAnswer === null) {
    circleColor = 'text-gray-200';
  }
  if (index === currentQuestion) {
    circleColor = 'text-gray-400';
  }
  if (question.receivedAnswer !== null) {
    if (question.receivedAnswer === question.answer) {
      circleColor = 'text-green-400';
    }
    if (question.receivedAnswer !== question.answer) {
      circleColor = 'text-red-400';
    }
  }
  return circleColor;
};

export { generateQuizQuestions, getQuizCircleColor };
