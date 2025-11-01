'use client';

import Link from "next/link";
import Image from "next/image";
import ChartModal from "@/components/ChartModal";
import { useState } from "react";

export default function Home() {
  const [isChartModalOpen, setIsChartModalOpen] = useState(false);

  return (
    <div 
      className="min-h-screen relative bg-sky-300"
      style={{
        backgroundColor: '#000000ff'
      }}
    >
      {/* Background image with opacity */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(/South_park.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          opacity: 0.5
        }}
      />

      {/* Navigation */}
      <nav className="bg-orange-500 bg-opacity-95 backdrop-blur-sm text-black p-4 shadow-lg relative z-10 border-b-4 border-black">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black drop-shadow-md">🏔️ South Park Sucks Now</h1>
          <div className="space-x-6">
            <Link href="/" className="hover:text-blue-600 transition-colors font-bold text-black">Home</Link>
            <button 
              onClick={() => setIsChartModalOpen(true)}
              className="hover:text-blue-600 transition-colors bg-transparent border-none text-black cursor-pointer font-bold"
            >
              $SPSN Chart
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* SPSN Logo */}
          <div className="mb-8">
            <Image
              src="/spsnlogo.png"
              alt="SPSN Logo"
              width={200}
              height={200}
              className="mx-auto drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] logo-flip"
              priority
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] text-stroke leading-tight south-park-font">
            South Park 
            <br/>
            <span className="text-orange-400 block md:inline"> Sucks Now</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-bold bg-blue-600 bg-opacity-80 rounded-lg p-3 inline-block border-4 border-black south-park-text">
            "This isn't about a coin; it's about a movement!"
          </p>
          <p className="text-xl md:text-2xl text-orange-400 mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-bold south-park-text">
            - Kyle Broflovski
          </p>
          
          <p className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-bold south-park-text">
            Stan's trying to change our lives with cryptocurrency. Are you ready to ape in?
          </p>

          {/* Contract Address Section */}
          <div className="bg-blue-600 bg-opacity-90 backdrop-blur-sm rounded-lg p-4 mb-8 max-w-2xl mx-auto border-4 border-black shadow-lg">
            <div className="text-white text-sm font-bold mb-2 bg-orange-500 rounded p-2 border-2 border-black south-park-text">Contract Address (CA):</div>
            <div 
              className="bg-white rounded-lg p-3 font-mono text-black text-sm md:text-base break-all cursor-pointer hover:bg-gray-200 transition-colors border-2 border-black font-bold"
              onClick={() => {
                navigator.clipboard.writeText('Sg4k4iFaEeqhv5866cQmsFTMhRx8sVCPAq2j8Xcpump');
                // You could add a toast notification here
              }}
              title="Click to copy"
            >
              Sg4k4iFaEeqhv5866cQmsFTMhRx8sVCPAq2j8Xcpump
            </div>
            <div className="text-white text-xs mt-2 text-center font-bold south-park-text">
              📋 Click to copy • Always verify before trading!
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="https://pump.fun/coin/Sg4k4iFaEeqhv5866cQmsFTMhRx8sVCPAq2j8Xcpump"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-black font-bold py-4 px-10 rounded-lg text-xl md:text-2xl transition-colors shadow-lg transform hover:scale-105 border-4 border-black south-park-font"
            >
              🚀 Buy $SPSN Now!
            </a>
            <button 
              onClick={() => setIsChartModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-lg text-xl md:text-2xl transition-colors shadow-lg transform hover:scale-105 border-4 border-black south-park-font"
            >
              📊 View Chart
            </button>
            <a
              href="https://x.com/i/communities/1984448414046704096"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-lg text-xl md:text-2xl transition-colors shadow-lg transform hover:scale-105 border-4 border-black south-park-font"
            >
              🚀 Join the Movement
            </a>
          </div>
        </div>
      </section>

      {/* Rest of the content when scrolling down */}
      <main className="container mx-auto px-4 py-16 relative z-10">
        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-blue-600 bg-opacity-95 backdrop-blur-sm rounded-lg p-6 shadow-lg border-4 border-black">
            <h3 className="text-2xl font-bold text-black mb-4 bg-orange-500 rounded p-2 border-2 border-black south-park-font">🚀 Stan's Vision</h3>
            <p className="text-white font-bold text-lg south-park-text">
              "We can change our lives with cryptocurrency!" Stan's selling the dream and creating the hype to get you to FOMO in harder than ever.
            </p>
          </div>
          <div className="bg-green-600 bg-opacity-95 backdrop-blur-sm rounded-lg p-6 shadow-lg border-4 border-black">
            <h3 className="text-2xl font-bold text-black mb-4 bg-orange-500 rounded p-2 border-2 border-black south-park-font">💫 Kyle's Movement</h3>
            <p className="text-white font-bold text-lg south-park-text">
              "This isn't about a coin; it's about a movement!" Kyle's spreading the word that we're building something bigger than just another memecoin.
            </p>
          </div>
          <div className="bg-orange-600 bg-opacity-95 backdrop-blur-sm rounded-lg p-6 shadow-lg border-4 border-black">
            <h3 className="text-2xl font-bold text-white mb-4 bg-blue-600 rounded p-2 border-2 border-black south-park-font">📈 Early Adopters</h3>
            <p className="text-white font-bold text-lg south-park-text">
              We hit 6M in two hours with 500+ community members. People want to believe again. We're very early to something special.
            </p>
          </div>
        </div>

        {/* Community Section */}
        <div className="bg-red-600 bg-opacity-95 backdrop-blur-sm rounded-lg p-8 shadow-lg border-4 border-black mb-16 text-white">
          <h2 className="text-3xl font-bold text-center mb-6 bg-orange-500 rounded p-3 border-2 border-black text-black south-park-font">Join the Movement</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-700 rounded-lg p-4 border-2 border-black">
              <h3 className="text-2xl font-bold mb-4 text-yellow-300 south-park-font">🌟 Why We're Early to Something</h3>
              <ul className="space-y-2 text-lg font-bold text-white south-park-text">
                <li>• Memecoins are risky but can be very rewarding</li>
                <li>• They're changing people's lives at the tips of your fingers</li>
                <li>• Where else can you build an awesome community like this?</li>
                <li>• We've met amazing people in this space</li>
              </ul>
            </div>
            <div className="bg-green-700 rounded-lg p-4 border-2 border-black">
              <h3 className="text-2xl font-bold mb-4 text-yellow-300 south-park-font">📈 Movement Proof</h3>
              <ul className="space-y-2 text-lg font-bold text-white south-park-text">
                <li>• Hit $6M market cap in just 2 hours</li>
                <li>• Over 500 members in the X community</li>
                <li>• People want to believe again</li>
                <li>• Now is the time to join</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <a
              href="https://x.com/i/communities/1984448414046704096"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-black font-bold py-4 px-8 rounded-lg text-xl transition-colors shadow-lg border-4 border-black south-park-font"
            >
              🚀 Join the Movement Now!
            </a>
          </div>
        </div>

        {/* Footer Quote */}
        <div className="text-center bg-blue-600 bg-opacity-95 backdrop-blur-sm rounded-lg p-8 border-4 border-black">
          <p className="text-2xl font-bold text-black mb-2 bg-orange-500 rounded p-3 border-2 border-black south-park-font">
            "This isn't about a coin; it's about a movement!" 
          </p>
          <p className="text-lg text-white mb-4 font-bold south-park-text">
            - Kyle Broflovski, True Believer
          </p>
          <p className="text-base text-white font-bold south-park-text">
            We're very early to something. Where else can you build an awesome community and change lives at the tips of your fingers? Now is the time.
          </p>
        </div>
      </main>

      {/* Chart Modal */}
      <ChartModal 
        isOpen={isChartModalOpen} 
        onClose={() => setIsChartModalOpen(false)} 
      />
    </div>
  );
}
