'use client'

import { FaWhatsapp, FaArrowRight, FaNewspaper } from 'react-icons/fa';
import { SiNextdotjs, SiVercel, SiN8N } from 'react-icons/si';
import { useState, useEffect } from 'react';

// Client component wrapper
function ClientOnly({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  
  return <>{children}</>;
}

export default function Home() {
  const features = [
    {
      icon: <FaWhatsapp className="text-4xl" />,
      title: "WhatsApp Integration",
      description: "Receive news updates directly in your WhatsApp messages"
    },
    {
      icon: <SiN8N className="text-4xl" />,
      title: "Smart Automation",
      description: "Powered by n8n for seamless workflow automation"
    },
    {
      icon: <FaNewspaper className="text-4xl" />,
      title: "Latest News",
      description: "Curated news from trusted sources worldwide"
    }
  ];

  const commands = [
    { command: "digest on", description: "Enable daily news digest" },
    { command: "digest off", description: "Disable daily news digest" },
    { command: "sport news", description: "Get latest sports updates" },
    { command: "tech news", description: "Get latest tech news" },
    { command: "business", description: "Business and finance updates" },
  ];

  return (
    <ClientOnly>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <header className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-24 shadow-lg">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          </div>
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">WhatsApp AI Daily News Agent</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get personalized news updates delivered straight to your WhatsApp.
            </p>
            <a 
              href="#get-started" 
              className="bg-white text-emerald-600 px-8 py-4 rounded-full font-bold hover:bg-gray-50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center border-2 border-transparent hover:border-emerald-100"
            >
              Get Started <FaArrowRight className="ml-2" />
            </a>
          </div>
        </header>

        {/* Features Section */}
        <section className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Our intelligent system fetches, filters, and delivers the news that matters to you, right in WhatsApp.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-emerald-100">
                  <div className="text-4xl text-blue-500 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Get Started Section */}
        <section id="get-started" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Get Started in 3 Easy Steps</h2>
            
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">1</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Add Twilio Sandbox Number</h3>
                    <p className="text-gray-700">Save this number to your contacts: <span className="font-mono bg-blue-50 px-3 py-1 rounded-md">+1 (415) 5238886</span></p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">2</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Join the Sandbox</h3>
                    <p className="text-gray-700">Send a WhatsApp message to the number with the text: <span className="font-mono bg-blue-50 px-3 py-1 rounded-md">join is-language</span></p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">3</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Start Using the Bot</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {commands.map((cmd, i) => (
                        <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-200">
                          <code className="font-mono text-blue-600 bg-blue-50 px-2 py-1 rounded text-sm">{cmd.command}</code>
                          <p className="text-gray-600 mt-1 text-sm">{cmd.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">WhatsApp News Agent</h3>
                <p className="text-gray-400">Stay informed, stay ahead</p>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors duration-200">Privacy Policy</a>
                <a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors duration-200">Terms of Service</a>
                <a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors duration-200">Contact Us</a>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>Powered by</p>
              <div className="flex justify-center space-x-8 mt-6">
                <SiNextdotjs size={28} className="text-gray-400 hover:text-white transition-colors hover:scale-110" />
                <SiVercel size={28} className="text-gray-400 hover:text-white transition-colors hover:scale-110" />
                <SiN8N size={28} className="text-gray-400 hover:text-white transition-colors hover:scale-110" />
                <FaNewspaper size={28} className="text-gray-400 hover:text-white transition-colors hover:scale-110" />
              </div>
              <p className="mt-4">© {new Date().getFullYear()} WhatsApp AI Daily News Agent. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </ClientOnly>
  );
}