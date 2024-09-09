import PropTypes from 'prop-types';

import { getQuizCircleColor } from '../../utils/quizUtils';

function CircleMarkers({ currentQuiz, currentQuestion }) {
  return (
    <div className="flex gap-1 pl-2 mb-2">
      {currentQuiz.questions.map((q, index) => {
        const circleColor = getQuizCircleColor(
          q,
          index,
          currentQuestion
        );
        return (
          <svg
            key={index}
            className={`w-6 h-6 ${circleColor}`}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <circle cx="12" cy="12" r="10" />
          </svg>
        );
      })}
    </div>
  );
}

CircleMarkers.propTypes = {
  currentQuiz: PropTypes.object.isRequired,
  currentQuestion: PropTypes.number.isRequired,
};

export default CircleMarkers;
