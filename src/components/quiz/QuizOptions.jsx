import PropTypes from 'prop-types';

import {
  IconMoodCheck,
  IconMoodX,
  IconArrowNarrowLeft,
} from '@tabler/icons-react';

function QuizOptions({
  question,
  currentAnswer,
  handleAnswerSelection,
  handleAnswerSubmit,
  setCurrentAnswer,
}) {
  return (
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
            {currentAnswer &&
              !question.receivedAnswer &&
              currentAnswer === option && (
                <button
                  className="bg-slate-100 hover:shadow-md active:shadow-md text-black font-bold  px-4 rounded-xl border text-xs"
                  onClick={() => {
                    handleAnswerSubmit(question.id, currentAnswer);
                    setCurrentAnswer(null);
                  }}
                >
                  Bekreft Svar
                </button>
              )}
            {question.receivedAnswer &&
            question.receivedAnswer === option &&
            question.receivedAnswer === question.answer ? (
              <>
                <span className="text-sm">Ditt svar er riktig</span>
                <IconMoodCheck stroke={2} />
              </>
            ) : (
              ``
            )}
            {question.receivedAnswer &&
            question.receivedAnswer === option &&
            question.receivedAnswer !== question.answer ? (
              <>
                <span className="text-sm">Ditt svar er feil</span>
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
                <span className="text-sm">Dette er riktig!</span>
              </>
            ) : (
              ``
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

QuizOptions.propTypes = {
  question: PropTypes.object.isRequired,
  currentAnswer: PropTypes.string,
  handleAnswerSelection: PropTypes.func.isRequired,
  handleAnswerSubmit: PropTypes.func.isRequired,
  setCurrentAnswer: PropTypes.func.isRequired,
};

export default QuizOptions;
