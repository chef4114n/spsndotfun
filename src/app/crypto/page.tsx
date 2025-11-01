'use client';

import Link from "next/link";
import ChartModal from "@/components/ChartModal";
import { useState } from "react";

const cryptoFeatures = [
  {
    title: "MSB Registration Protocol",
    description: "We're registered with the Federal Government as a Money Service Business! This helps prevent money laundering and lets us screw people legally.",
    icon: "🏛️",
    technical: "Federal Compliance Framework",
    apy: "Government Approved%"
  },
  {
    title: "White House Corruption Network",
    description: "The crypto corruption at the White House is off the chain! We've got connections that let us get away with everything.",
    icon: "�️",
    technical: "Political Influence Protocol",
    apy: "Untouchable%"
  },
  {
    title: "Classic Rug Pull Strategy",
    description: "Our advisor's got the perfect plan: create maximum hype, get everyone to ape in, then execute the classic rug pull in a few days!",
    icon: "🪂",
    technical: "Exit Liquidity Optimization",
    apy: "∞% (for us)"
  },
  {
    title: "FOMO Amplification Engine",
    description: "We're designed to make you ape in harder than ever before. The hype is real, the movement is growing, and you don't want to miss out!",
    icon: "🚀",
    technical: "Psychological Pressure Algorithm",
    apy: "FOMO Level: Maximum"
  }
];

const roadmap = [
  {
    quarter: "Day 1",
    title: "Create Maximum Hype",
    description: "Launch the movement, get everyone believing, and watch the FOMO levels reach critical mass.",
    status: "completed"
  },
  {
    quarter: "Day 2-3", 
    title: "Hit 6M in Two Hours",
    description: "Achieve explosive growth with 500+ community members. People want to believe again!",
    status: "completed"
  },
  {
    quarter: "Day 4-5",
    title: "Peak FOMO Phase",
    description: "Everyone's aping in harder than ever. The movement is unstoppable. This is very early to something big.",
    status: "in-progress"
  },
  {
    quarter: "Day 6+",
    title: "Classic Rug Pull Execution",
    description: "The crypto advisor's master plan comes to fruition. Exit liquidity secured, MSB compliance maintained.",
    status: "planned"
  }
];

export default function Crypto() {
  const [isChartModalOpen, setIsChartModalOpen] = useState(false);

  return (
    <div className="min-h-screen relative">
      {/* Navigation */}
      <nav className="bg-red-600 bg-opacity-95 backdrop-blur-sm text-white p-4 shadow-lg relative z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">🏔️ South Park Sucks Now</h1>
          <div className="space-x-6">
            <Link href="/" className="hover:text-yellow-300 transition-colors">Home</Link>
            <Link href="/characters" className="hover:text-yellow-300 transition-colors">Characters</Link>
            <button 
              onClick={() => setIsChartModalOpen(true)}
              className="hover:text-yellow-300 transition-colors bg-transparent border-none text-white cursor-pointer"
            >
              $SPSN
            </button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg p-8 shadow-lg border-4 border-black">
            <h1 className="text-5xl font-bold text-black mb-4">
              <span className="text-yellow-500">$SPSN</span> Movement
            </h1>
            <p className="text-xl text-black max-w-3xl mx-auto mb-8">
              This isn't about a coin; it's about a movement! We're very early to something that's changing lives at the tips of your fingers.
            </p>
            
            {/* Current Price Widget */}
            <div className="bg-white rounded-lg p-6 shadow-lg border-4 border-black max-w-md mx-auto">
            <div className="text-4xl font-bold text-green-600 mb-2">$420.69</div>
            <div className="text-gray-600">$SPSN</div>
            <div className="text-2xl text-green-600 mt-2">+69.420% 📈</div>
            <div className="bg-gray-100 rounded-lg p-3 mt-4">
              <div className="text-xs text-gray-500 mb-1">Contract Address:</div>
              <div className="font-mono text-xs break-all">Sg4k4iFaEeqhv5866cQmsFTMhRx8sVCPAq2j8Xcpump</div>
            </div>
            <div className="flex space-x-2 mt-4">
              <a
                href="https://pump.fun/coin/Sg4k4iFaEeqhv5866cQmsFTMhRx8sVCPAq2j8Xcpump"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-full text-sm transition-colors shadow-lg"
              >
                🚀 Buy Now
              </a>
              <button
                onClick={() => setIsChartModalOpen(true)}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full text-sm transition-colors shadow-lg"
              >
                📊 Full Chart
              </button>
            </div>
            </div>
          </div>
        </div>

        {/* DeFi Features */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">
            Revolutionary Movement Features
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {cryptoFeatures.map((feature, index) => (
              <div key={index} className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg p-6 shadow-lg border-4 border-black">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-black mb-3">{feature.title}</h3>
                <p className="text-gray-700 mb-4">{feature.description}</p>
                
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-black">Technology:</span>
                    <span className="text-blue-600 font-mono text-sm">{feature.technical}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-black">APY:</span>
                    <span className="text-green-600 font-bold">{feature.apy}</span>
                  </div>
                </div>
                
                <button className="w-full mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded transition-colors">
                  <a
                    href="https://pump.fun/coin/Sg4k4iFaEeqhv5866cQmsFTMhRx8sVCPAq2j8Xcpump"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                  >
                    Stake Now (Probably Safe)
                  </a>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Tokenomics */}
        <div className="bg-white rounded-lg p-8 shadow-lg border-4 border-black mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-black">$SPSN Tokenomics</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎭</div>
              <h3 className="text-xl font-bold text-red-600 mb-2">50% - Cartman's Schemes</h3>
              <p className="text-gray-700">Reserved for various get-rich-quick plots and mom's basement operations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-green-600 mb-2">30% - Kyle's Smart Contracts</h3>
              <p className="text-gray-700">Actually functional code that prevents Cartman from stealing everything</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💀</div>
              <h3 className="text-xl font-bold text-orange-600 mb-2">20% - Kenny Burns</h3>
              <p className="text-gray-700">Permanently burned every time Kenny dies (so... frequently)</p>
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">
            Movement Timeline �
          </h2>
          <div className="space-y-6">
            {roadmap.map((item, index) => (
              <div key={index} className={`bg-white rounded-lg p-6 shadow-lg border-4 border-black ${
                item.status === 'completed' ? 'bg-green-50' : 
                item.status === 'in-progress' ? 'bg-yellow-50' : 
                item.status === 'inevitable' ? 'bg-red-50' : 'bg-blue-50'
              }`}>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-bold mr-4">
                        {item.quarter}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                        item.status === 'completed' ? 'bg-green-200 text-green-800' :
                        item.status === 'in-progress' ? 'bg-yellow-200 text-yellow-800' :
                        item.status === 'inevitable' ? 'bg-red-200 text-red-800' :
                        'bg-blue-200 text-blue-800'
                      }`}>
                        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Warning Section */}
        <div className="bg-yellow-400 border-4 border-black rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">⚠️ Important Disclaimer</h2>
          <p className="text-lg text-gray-800 mb-4">
            This is a parody website created for entertainment purposes. $SPSN is not a real cryptocurrency. 
            Please don't actually invest your life savings based on financial advice from cartoon fourth-graders.
          </p>
          <p className="text-base text-gray-700 italic">
            "Seriously guys, this whole thing is pretty f***ed up." - Stan Marsh, Voice of Reason
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