import PropTypes from 'prop-types';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'; // Updated imports

export default function ConfirmModal({
  message,
  onConfirm,
  onCancel,
  show,
}) {
  return (
    <div
      className={`fixed inset-0 flex items-start p-12 justify-center bg-black bg-opacity-30 z-50 transition-opacity duration-300 ${
        show ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-slate-100 p-6 rounded-xl shadow-lg w-80">
        <p className="mb-4 text-center">{message}</p>
        <div className="flex justify-center gap-2">
          <button
            onClick={onCancel}
            className="bg-slate-100 hover:shadow-md active:shadow-lg text-black font-bold py-2 px-4 rounded-xl  border-2 border-red-300"
          >
            <XMarkIcon
              className="h-5 w-5 text-gray-600"
              aria-hidden="true"
            />
          </button>
          <button
            onClick={onConfirm}
            className="bg-slate-100 hover:shadow-md active:shadow-lg text-black font-bold py-2 px-4 rounded-xl  border-2 border-green-300"
          >
            <CheckIcon
              className="h-5 w-5 text-gray-600"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

ConfirmModal.propTypes = {
  message: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};
