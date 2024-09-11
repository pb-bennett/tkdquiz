import PropTypes from 'prop-types';

import { useState } from 'react';

import QuizOptions from './QuizOptions';
import QuizOptionsPic from './QuizOptionsPic';

export default function QuizQuestion({
  question,
  handleAnswerSubmit,
}) {
  const [currentAnswer, setCurrentAnswer] = useState(null);

  if (!question) return <div>No Question Found</div>;

  const handleAnswerSelection = (answer) => {
    if (currentAnswer === answer) {
      setCurrentAnswer(null);
    } else {
      setCurrentAnswer(answer);
    }
  };
  // console.log(question);
  // console.log(question.type.slice(0, 3) === 'pic');
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col p-2 border-2 rounded-xl mx-2 ">
        {question.type.slice(0, 3) === 'pic' ? (
          <>
            <div className="mb-2 text-xl">
              Hva er følgende teknikk?
            </div>

            <img
              src={question.question}
              className="rounded-xl max-h-96 object-contain"
              alt="Taekwondo Teknikk"
            />
          </>
        ) : (
          <div className="text-xl">
            Hva er
            <span className="font-bold text-xl">
              {' '}
              {question.question}
            </span>
            ?
          </div>
        )}
      </div>
      {question.type.slice(-3) !== 'pic' ? (
        <QuizOptions
          question={question}
          currentAnswer={currentAnswer}
          handleAnswerSelection={handleAnswerSelection}
          handleAnswerSubmit={handleAnswerSubmit}
          setCurrentAnswer={setCurrentAnswer}
        />
      ) : (
        <QuizOptionsPic
          question={question}
          currentAnswer={currentAnswer}
          handleAnswerSelection={handleAnswerSelection}
          handleAnswerSubmit={handleAnswerSubmit}
          setCurrentAnswer={setCurrentAnswer}
        />
      )}
    </div>
  );
}

QuizQuestion.propTypes = {
  question: PropTypes.object.isRequired,
  handleAnswerSubmit: PropTypes.func.isRequired,
};
