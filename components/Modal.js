function Modal({ show, onClose, children }) {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-all duration-500 ${
        show ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
      }`}
    >
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={() => onClose(false)}
      />

      {/* Modal Content */}
      <div className="relative max-w-2xl w-full mx-4 md:mx-0 bg-white/10 backdrop-blur-lg rounded-3xl shadow-lg p-6 text-white transition-all duration-500">
        {/* Close Button */}
        <button
          onClick={() => onClose(false)}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-lg font-bold rounded-full bg-white/20 hover:bg-white/30 transition-all"
        >
          ✕
        </button>

        {/* Modal Content */}
        {children}
      </div>
    </div>
  );
}

export default Modal;
