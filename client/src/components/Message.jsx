

const MessageModal = ({ isOpen, onClose, subject }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-xl font-bold">×</button>
        <h2 className="text-xl font-semibold text-center mb-4">Send Message</h2>
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gray-300 rounded-full mr-3"></div>
          <span className="font-bold">Piyush Gupta</span>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Subject</label>
          <input
            type="text"
            value={subject}
            readOnly
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Message</label>
          <textarea
            placeholder="Write a message..."
            className="w-full border border-gray-300 p-2 rounded"
            rows={4}
          />
        </div>
        <button className="bg-black text-white px-4 py-2 rounded flex items-center">
          <i className="fas fa-paper-plane mr-2"></i> Send
        </button>
      </div>
    </div>
  );
};

export default MessageModal;
