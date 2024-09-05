import PropTypes from 'prop-types';
function ActionButtons() {
  const handleNewQuiz = () => {
    console.log('new quiz');
  };
  const handleLogin = () => {
    console.log('login');
  };
  return (
    <>
      <ActionButton
        topText="Ny Quiz"
        bottomText="새로운 퀴즈"
        handleClick={handleNewQuiz}
      />
      <ActionButton
        topText="Logge Inn"
        bottomText="로그인"
        handleClick={handleLogin}
      />
    </>
  );
}

function ActionButton({ topText, bottomText, handleClick }) {
  return (
    <button
      className="bg-slate-100 hover:shadow-lg text-black font-bold py-2 px-4 rounded-xl min-w-36 w-auto shadow-md"
      aria-label={`${topText} - ${bottomText ? bottomText : ''}`}
      onClick={handleClick}
    >
      <div
        className={`flex flex-col divide-black ${
          bottomText ? 'divide-y' : ''
        }`}
      >
        <div>{topText}</div>
        {bottomText && <div>{bottomText}</div>}
      </div>
    </button>
  );
}

ActionButton.propTypes = {
  topText: PropTypes.string.isRequired,
  bottomText: PropTypes.string,
  handleClick: PropTypes.func,
};

export default ActionButtons;
