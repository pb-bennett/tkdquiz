import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import {
  IconArrowBigRightLine,
  IconArrowBigLeftLine,
  IconX,
} from '@tabler/icons-react';

import QuizQuestion from './QuizQuestion';
import ActionButton from '../ActionButton';

import { getRandomElements } from '../../utils/utils';
import CircleMarkers from './CircleMarkers';

export default function QuizInstance({
  questions,
  optionCount = 4,
  handleExitClick,
}) {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentQuiz, setCurrentQuiz] = useState({});

  const handleAnswerSubmit = (questionId, answer) => {
    const updatedQuestions = currentQuiz.questions.map((question) => {
      if (question.id === questionId) {
        return {
          ...question,
          receivedAnswer: answer,
        };
      }
      return question;
    });
    setCurrentQuiz({
      ...currentQuiz,
      questions: updatedQuestions,
    });
  };

  useEffect(() => {
    const quizQuestions = questions.map((dataObj) => {
      const { id, question, answer, wrongOptions, type } = dataObj;
      const currentWrongOptions = getRandomElements(
        wrongOptions,
        optionCount - 1
      );

      const options = getRandomElements(
        [answer, ...currentWrongOptions],
        optionCount
      );

      return {
        id,
        question,
        answer,
        options,
        type,
        receivedAnswer: null,
      };
    });

    const quiz = {
      questions: quizQuestions,
    };
    console.log(quiz);
    setCurrentQuiz(quiz);
  }, [optionCount, questions]);

  if (!currentQuiz.questions || !currentQuiz.questions.length) {
    return <div>Loading questions...</div>;
  }
  if (!quizStarted) {
    return (
      <>
        <ActionButton
          topText="Start Quiz"
          handleClick={() => setQuizStarted(true)}
        />
        <ActionButton
          topText="Avslutte Quiz"
          handleClick={handleExitClick}
        />
      </>
    );
  }

  return (
    <div className="flex flex-col items-center min-w-96 ">
      <div className="flex justify-between">
        <div className="flex flex-col justify-center">
          <div className="flex justify-start gap-2 p-2 ">
            <span>Spørsmål</span>
            {currentQuestion + 1} av {questions.length}
          </div>
          <CircleMarkers
            currentQuestion={currentQuestion}
            currentQuiz={currentQuiz}
          />
        </div>
        <button
          className="flex justify-center items-center pl-4"
          onClick={handleExitClick}
        >
          <IconX
            className="text-gray-600 hover:border-2 hover:border-red-200 rounded-xl border"
            size="48"
            stroke={1}
          />
        </button>
      </div>
      <QuizQuestion
        handleAnswerSubmit={handleAnswerSubmit}
        question={currentQuiz.questions[currentQuestion]}
      />
      <div className="flex justify-between px-4 w-full">
        {currentQuestion > 0 ? (
          <button className="flex justify-center">
            <IconArrowBigLeftLine
              stroke={1}
              size="48"
              className="text-gray-400"
              onClick={() => {
                const previousQuestion = currentQuestion;
                setCurrentQuestion(previousQuestion - 1);
              }}
            />
          </button>
        ) : (
          <div className="flex justify-center ">
            <IconArrowBigLeftLine
              stroke={1}
              size="48"
              className="text-gray-200 "
            />
          </div>
        )}

        {currentQuiz.questions[currentQuestion].receivedAnswer &&
        currentQuestion < currentQuiz.questions.length - 1 ? (
          <button
            className="flex justify-center"
            onClick={() => {
              const previousQuestion = currentQuestion;
              setCurrentQuestion(previousQuestion + 1);
            }}
          >
            <IconArrowBigRightLine
              stroke={1}
              size="48"
              className="text-gray-400"
            />
          </button>
        ) : (
          <div className="flex justify-center ">
            <IconArrowBigRightLine
              stroke={1}
              size="48"
              className="text-gray-200 "
            />
          </div>
        )}
      </div>
    </div>
  );
}

QuizInstance.propTypes = {
  questions: PropTypes.array.isRequired,
  optionCount: PropTypes.number,
};
