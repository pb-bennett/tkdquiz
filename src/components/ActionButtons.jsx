import PropTypes from 'prop-types';

import ActionButton from './ActionButton';
function ActionButtons({ handleStartQuiz }) {
  const handleLogin = () => {
    console.log('login');
  };
  return (
    <>
      <ActionButton
        topText="Ny Quiz"
        bottomText="새로운 퀴즈"
        handleClick={handleStartQuiz}
      />
      <ActionButton
        topText="Logge Inn"
        bottomText="로그인"
        handleClick={handleLogin}
      />
    </>
  );
}
ActionButtons.propTypes = {
  handleStartQuiz: PropTypes.func,
};

export default ActionButtons;
