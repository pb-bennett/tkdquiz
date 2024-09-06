import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import ActionButton from './ActionButton';
import ConfirmModal from './ConfirmModal';

import { generateQuizQuestions } from '../utils/quizUtils';

export default function Quiz({ quizData, handleExitQuiz }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentQuestions, setCurrentQuestions] = useState({});

  console.log(generateQuizQuestions(quizData));

  useEffect(() => {
    setCurrentQuestions(quizData[0]);
  }, [quizData]);

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
      <ActionButton topText="Tilbake" handleClick={handleExitClick} />
      {modalVisible && (
        <ConfirmModal
          message="Er du sikker på at du vil avslutte quizen? "
          onConfirm={handleConfirmExit}
          onCancel={handleCancelExit}
          show={showConfirm}
        />
      )}
    </>
  );
}

Quiz.propTypes = {
  quizData: PropTypes.array.isRequired,
  handleExitQuiz: PropTypes.func.isRequired,
};
