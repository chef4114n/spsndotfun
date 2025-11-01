'use client';

interface ChartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChartModal({ isOpen, onClose }: ChartModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg border-4 border-black w-full max-w-6xl h-[80vh] relative">
        {/* Header */}
        <div className="bg-red-600 text-white p-4 rounded-t-lg flex justify-between items-center">
          <h2 className="text-2xl font-bold">📊 $SPSN Live Chart</h2>
          <button 
            onClick={onClose}
            className="text-white hover:text-yellow-300 text-3xl font-bold transition-colors"
          >
            ×
          </button>
        </div>
        
        {/* Chart Content */}
        <div className="p-4 h-full">
          <div className="w-full h-full rounded-lg overflow-hidden border-2 border-gray-300">
            <iframe
              src="https://dexscreener.com/solana/Sg4k4iFaEeqhv5866cQmsFTMhRx8sVCPAq2j8Xcpump?embed=1&theme=dark"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              title="SPSN Chart"
              className="w-full h-full"
            />
          </div>
        </div>
        
        {/* Footer with links */}
        <div className="bg-gray-100 p-4 rounded-b-lg border-t-2 border-gray-300">
          <div className="flex justify-center space-x-4">
            <a
              href="https://pump.fun/coin/Sg4k4iFaEeqhv5866cQmsFTMhRx8sVCPAq2j8Xcpump"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-full transition-colors shadow-lg"
            >
              🚀 Buy on Pump.Fun
            </a>
            <a
              href="https://dexscreener.com/solana/Sg4k4iFaEeqhv5866cQmsFTMhRx8sVCPAq2j8Xcpump"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition-colors shadow-lg"
            >
              📈 Full Chart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}