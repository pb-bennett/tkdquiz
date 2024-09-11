import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import ActionButton from '../ActionButton';
import ConfirmModal from '../ConfirmModal';
import QuizInstance from './QuizInstance';

import { generateQuizQuestions } from '../../utils/quizUtils';

export default function Quiz({ quizData, handleExitQuiz }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentQuestions, setCurrentQuestions] = useState([]);

  useEffect(() => {
    const questions = shuffleQuestions(
      generateQuizQuestions(quizData)
    );
    setCurrentQuestions(questions);
  }, [quizData]);

  const shuffleQuestions = (questions) => {
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
    }
    return questions;
  };

  const handleExitClick = () => {
    setShowConfirm(true);
    setModalVisible(true);
  };
  const handleConfirmExit = () => {
    setShowConfirm(false);
    setTimeout(() => {
      setModalVisible(false);
      handleExitQuiz();
    }, 300);
  };
  const handleCancelExit = () => {
    setShowConfirm(false);
    setTimeout(() => {
      setModalVisible(false);
    }, 300);
  };

  return (
    <>
      {modalVisible && (
        <ConfirmModal
          message="Er du sikker på at du vil avslutte quizen? "
          onConfirm={handleConfirmExit}
          onCancel={handleCancelExit}
          show={showConfirm}
        />
      )}
      <QuizInstance
        questions={currentQuestions}
        handleExitClick={handleExitClick}
      />
      {/* <ActionButton
        topText="Avslutte Quiz"
        handleClick={handleExitClick}
      /> */}
    </>
  );
}

Quiz.propTypes = {
  quizData: PropTypes.array.isRequired,
  handleExitQuiz: PropTypes.func.isRequired,
};
