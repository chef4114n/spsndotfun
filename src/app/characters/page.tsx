'use client';

import Link from "next/link";
import CharacterAvatar from "@/components/CharacterAvatar";
import ChartModal from "@/components/ChartModal";
import { useState } from "react";

const characters = [
  {
    name: "Stan Marsh",
    title: "Chief Evangelist & Life Changer",
    description: "Stan's selling cryptocurrency to change everyone's lives! He's creating the hype and getting people to FOMO into the movement harder than ever before.",
    crypto: "StanCoin (STAN)",
    color: "bg-blue-500",
    quote: "We can change our lives with cryptocurrency!",
    portfolio: "Leading the charge"
  },
  {
    name: "Kyle Broflovski",
    title: "Movement Leader & Tagline Creator",
    description: "Kyle coined the phrase that started it all. He's spreading the word that this is bigger than just another coin - we're building a movement!",
    crypto: "$SPSN Evangelist",
    color: "bg-green-500",
    quote: "This isn't about a coin; it's about a movement!",
    portfolio: "All-in believer"
  },
  {
    name: "The Crypto Advisor",
    title: "Professional Hype Creator",
    description: "The mysterious advisor behind the scenes, creating maximum FOMO and planning the perfect exit strategy. Registered with MSB and everything!",
    crypto: "RugPullCoin (RUG)",
    color: "bg-purple-500",
    quote: "The crypto corruption at the White House is off the chain!",
    portfolio: "Exit liquidity ready"
  },
  {
    name: "Eric Cartman",
    title: "Community Moderator",
    description: "Cartman's managing the community and making sure everyone stays hyped. He's got big plans for this movement... mostly involving his own profit.",
    crypto: "$SPSN Holder",
    color: "bg-red-500",
    quote: "Respect my authoritah in the Telegram!",
    portfolio: "Diamond hands (allegedly)"
  },
  {
    name: "Kenny McCormick",
    title: "Risk Assessment (Deceased)",
    description: "Kenny got rugged so hard he died. But somehow he's back for the next pump, ready to ape in again with diamond hands.",
    crypto: "$SPSN Victim",
    color: "bg-orange-500",
    quote: "Mmmph mmmph mmph! (HODL!)",
    portfolio: "Rugged but resilient"
  }
];

export default function Characters() {
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

      {/* Characters Section */}
      <main className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-16">
          <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg p-8 shadow-lg border-4 border-black">
            <h1 className="text-5xl font-bold text-black mb-4">
              Meet Our <span className="text-yellow-500">Movement Leaders</span>
            </h1>
            <p className="text-xl text-black max-w-3xl mx-auto">
              The team behind the crypto revolution that's changing lives at the tips of your fingers!
            </p>
          </div>
        </div>

        {/* Character Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {characters.map((character, index) => (
            <div key={index} className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg p-6 shadow-lg border-4 border-black">
              <div className="flex items-center mb-4">
                <CharacterAvatar 
                  name={character.name} 
                  color={character.color} 
                  size={80} 
                />
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-black">{character.name}</h3>
                  <p className="text-lg text-gray-600">{character.title}</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">{character.description}</p>
              
              <div className="bg-gray-100 rounded-lg p-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-black">Token:</span>
                  <span className="text-purple-600 font-mono">{character.crypto}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-black">Portfolio:</span>
                  <span className="text-green-600 font-mono">{character.portfolio}</span>
                </div>
              </div>
              
              <blockquote className="italic text-center text-gray-600 border-l-4 border-yellow-500 pl-4">
                "{character.quote}"
              </blockquote>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="bg-white rounded-lg p-8 shadow-lg border-4 border-black mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-black">Team Performance</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-red-600">∞</div>
              <div className="text-gray-600">Cartman's Schemes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">99.9%</div>
              <div className="text-gray-600">Stan's Accuracy</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">200 IQ</div>
              <div className="text-gray-600">Kyle's Intelligence</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">∞</div>
              <div className="text-gray-600">Kenny's Deaths</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-yellow-400 rounded-lg p-8 border-4 border-black">
          <h2 className="text-3xl font-bold text-black mb-4">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl text-black mb-6">
            Become a South Park Sucks Now investor today! (Warning: May result in financial ruin and/or Kenny's death)
          </p>
          <a
            href="https://pump.fun/coin/Sg4k4iFaEeqhv5866cQmsFTMhRx8sVCPAq2j8Xcpump"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-xl transition-colors shadow-lg"
          >
            🚀 Buy $SPSN Now!
          </a>
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