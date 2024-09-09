import PropTypes from 'prop-types';
import {
  IconArrowBigRightLine,
  IconArrowBigLeftLine,
  IconThumbUp,
  IconThumbDown,
  IconMoodCheck,
  IconMoodX,
  IconArrowNarrowLeft,
} from '@tabler/icons-react';
import { useState, useEffect } from 'react';

import ActionButton from '../ActionButton';

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
  console.log(question);
  console.log(question.type.slice(0, 3) === 'pic');
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
      <div className="flex flex-col p-2 gap-1">
        {question.options.map((option, index) => (
          <div
            key={index}
            className={`flex justify-between p-2 px-4 border-2 rounded-xl mx-2 select-none transition-colors duration-300
              ${
                currentAnswer === option && !question.receivedAnswer
                  ? ' bg-gray-300'
                  : ''
              }
              ${
                question.answer === option && question.receivedAnswer
                  ? ' bg-green-300'
                  : ''
              }
              ${
                question.answer !== option &&
                question.receivedAnswer &&
                question.receivedAnswer === option
                  ? ' bg-red-300'
                  : ''
              }
              `}
            onClick={
              !question.receivedAnswer
                ? () => handleAnswerSelection(option)
                : null
            }
          >
            <div>{option}</div>
            <div className="flex gap-2 text-md italic">
              {question.receivedAnswer &&
              question.receivedAnswer === option &&
              question.receivedAnswer === question.answer ? (
                <>
                  <span>Ditt svar er riktig</span>
                  <IconMoodCheck stroke={2} />
                </>
              ) : (
                ``
              )}
              {question.receivedAnswer &&
              question.receivedAnswer === option &&
              question.receivedAnswer !== question.answer ? (
                <>
                  <span>Ditt svar er feil</span>
                  <IconMoodX stroke={2} />
                </>
              ) : (
                ``
              )}
              {question.receivedAnswer &&
              question.receivedAnswer !== option &&
              option === question.answer ? (
                <>
                  <IconArrowNarrowLeft stroke={2} />
                  <span>Dette er riktig!</span>
                </>
              ) : (
                ``
              )}
            </div>
          </div>
        ))}
        <div className="flex px-4 gap-2 justify-between items-center">
          <IconArrowBigLeftLine
            stroke={1}
            size="48"
            className="text-gray-200"
          />
          {currentAnswer && !question.receivedAnswer && (
            <button
              className="bg-slate-100 hover:shadow-md active:shadow-lg text-black font-bold py-2 px-4 rounded-xl border"
              onClick={() => {
                handleAnswerSubmit(question.id, currentAnswer);
                setCurrentAnswer(null);
              }}
            >
              Bekreft Svar
            </button>
          )}
          <IconArrowBigRightLine
            stroke={1}
            size="48"
            className="text-gray-200"
          />
        </div>
      </div>
    </div>
  );
}

QuizQuestion.propTypes = {
  question: PropTypes.object.isRequired,
  handleAnswerSubmit: PropTypes.func.isRequired,
};
