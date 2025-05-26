// components/Modal.jsx
const Modal = ({ open, onClose, content }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-[600px] relative text-center">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        {content}
      </div>
    </div>
  );
};

export default Modal;
