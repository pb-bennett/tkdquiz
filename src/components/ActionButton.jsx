import PropTypes from 'prop-types';

export default function ActionButton({
  topText,
  bottomText,
  handleClick = () => {},
}) {
  return (
    <button
      className="bg-slate-100 hover:shadow-md active:shadow-lg text-black font-bold py-2 px-4 rounded-xl min-w-36 w-auto border border-gray-300"
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
