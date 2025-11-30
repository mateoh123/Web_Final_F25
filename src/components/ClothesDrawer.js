const ClothesDrawer = ({ isOpen, onClose, children }) => {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 50 }}>
        <div
          className={`absolute inset-y-0 right-0 w-1/4 bg-gray-800 shadow-xl transform transition-transform duration-300 ease-in-out pointer-events-auto ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <h2 className="text-xl font-semibold text-white">Drawer Title</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-md hover:bg-gray-700"
                aria-label="Close drawer"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClothesDrawer;
