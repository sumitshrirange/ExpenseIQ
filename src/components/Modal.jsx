import React, { useEffect } from "react";
import { LuX } from "react-icons/lu";

const Modal = ({ children, isOpen, onClose, title }) => {
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden"; // lock scroll
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto"; // unlock scroll
    };
  }, [isOpen, onClose]);

  // Don't render if not open
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-2xl mx-4 rounded-xl shadow-xl animate-fadeIn">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-b-gray-400">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>

          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-200 text-gray-700 transition cursor-pointer"
          >
            <LuX />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 max-h-[70vh] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
