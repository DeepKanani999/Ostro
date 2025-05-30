const PWAmodal = ({ handleInstall, handleCloseModal }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10000,
        padding: "20px",
      }}
    >
      <div
        className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative"
        style={{
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        <h4 className="text-lg font-bold text-center mb-2">Install Our App</h4>
        <p className="text-sm text-gray-500 text-center mb-6 px-4">
          Install our app for a better experience! Get quick access to all
          features and stay updated.
        </p>

        <div className="flex gap-3 mt-6">
          <button
            onClick={handleInstall}
            style={{ backgroundColor: "#B62025" }}
            className="flex-1 text-white px-4 py-2 rounded hover:bg-opacity-90"
          >
            Install Now
          </button>
          <button
            onClick={handleCloseModal}
            style={{ backgroundColor: "gray" }}
            className="flex-1 text-white px-4 py-2 rounded hover:bg-opacity-90"
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
};

export default PWAmodal;
