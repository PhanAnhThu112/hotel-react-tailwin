import React from "react";

const Modal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Sign Up Successful</h2>
        <p>Your account has been successfully created.</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
