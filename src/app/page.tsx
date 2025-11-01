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
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] text-stroke leading-tight">
            South Park 
            <br/>
            <span className="text-yellow-400 block md:inline"> Sucks Now</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-semibold">
            "This isn't about a coin; it's about a movement!"
          </p>
          <p className="text-xl md:text-2xl text-white-400 mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-medium">
            - Kyle Broflovski
          </p>
          
          <p className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Stan's trying to change our lives with cryptocurrency. Are you ready to ape in?
          </p>

          {/* Contract Address Section */}
          <div className="bg-black bg-opacity-80 backdrop-blur-sm rounded-lg p-4 mb-8 max-w-2xl mx-auto border-2 border-yellow-400">
            <div className="text-yellow-400 text-sm font-bold mb-2">Contract Address (CA):</div>
            <div 
              className="bg-gray-800 rounded-lg p-3 font-mono text-white text-sm md:text-base break-all cursor-pointer hover:bg-gray-700 transition-colors"
              onClick={() => {
                navigator.clipboard.writeText('Sg4k4iFaEeqhv5866cQmsFTMhRx8sVCPAq2j8Xcpump');
                // You could add a toast notification here
              }}
              title="Click to copy"
            >
              Sg4k4iFaEeqhv5866cQmsFTMhRx8sVCPAq2j8Xcpump
            </div>
            <div className="text-gray-300 text-xs mt-2 text-center">
              📋 Click to copy • Always verify before trading!
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="https://pump.fun/coin/Sg4k4iFaEeqhv5866cQmsFTMhRx8sVCPAq2j8Xcpump"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-10 rounded-full text-xl md:text-2xl transition-colors shadow-lg transform hover:scale-105"
            >
              🚀 Buy $SPSN Now!
            </a>
            <button 
              onClick={() => setIsChartModalOpen(true)}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full text-xl md:text-2xl transition-colors shadow-lg transform hover:scale-105"
            >
              📊 View Chart
            </button>
            <a
              href="https://x.com/i/communities/1984448414046704096"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-10 rounded-full text-xl md:text-2xl transition-colors shadow-lg transform hover:scale-105"
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
          <div className="bg-black bg-opacity-70 backdrop-blur-sm rounded-lg p-6 shadow-lg border-2 border-yellow-400">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">🚀 Stan's Vision</h3>
            <p className="text-white">
              "We can change our lives with cryptocurrency!" Stan's selling the dream and creating the hype to get you to FOMO in harder than ever.
            </p>
          </div>
          <div className="bg-black bg-opacity-70 backdrop-blur-sm rounded-lg p-6 shadow-lg border-2 border-yellow-400">
            <h3 className="text-2xl font-bold text-green-400 mb-4">💫 Kyle's Movement</h3>
            <p className="text-white">
              "This isn't about a coin; it's about a movement!" Kyle's spreading the word that we're building something bigger than just another memecoin.
            </p>
          </div>
          <div className="bg-black bg-opacity-70 backdrop-blur-sm rounded-lg p-6 shadow-lg border-2 border-yellow-400">
            <h3 className="text-2xl font-bold text-red-400 mb-4">📈 Early Adopters</h3>
            <p className="text-white">
              We hit 6M in two hours with 500+ community members. People want to believe again. We're very early to something special.
            </p>
          </div>
        </div>

        {/* Community Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 bg-opacity-90 backdrop-blur-sm rounded-lg p-8 shadow-lg border-4 border-black mb-16 text-white">
          <h2 className="text-3xl font-bold text-center mb-6">Join the Movement</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">🌟 Why We're Early to Something</h3>
              <ul className="space-y-2 text-lg">
                <li>• Memecoins are risky but can be very rewarding</li>
                <li>• They're changing people's lives at the tips of your fingers</li>
                <li>• Where else can you build an awesome community like this?</li>
                <li>• We've met amazing people in this space</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">📈 Movement Proof</h3>
              <ul className="space-y-2 text-lg">
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
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-full text-xl transition-colors shadow-lg"
            >
              🚀 Join the Movement Now!
            </a>
          </div>
        </div>

        {/* Footer Quote */}
        <div className="text-center bg-black bg-opacity-70 backdrop-blur-sm rounded-lg p-8 border-2 border-yellow-400">
          <p className="text-2xl font-bold text-yellow-400 mb-2">
            "This isn't about a coin; it's about a movement!" 
          </p>
          <p className="text-lg text-white mb-4">
            - Kyle Broflovski, True Believer
          </p>
          <p className="text-base text-gray-300">
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
