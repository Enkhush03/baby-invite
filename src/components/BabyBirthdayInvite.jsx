import React, { useState } from 'react';
import { Rocket, Star, MapPin, Calendar, Clock, Gift, Moon } from 'lucide-react';

export default function BabyBirthdayInvite() {
  const [isOpened, setIsOpened] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleOpenEnvelope = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsOpened(true);
    }, 800);
  };

  if (!isOpened) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] flex items-center justify-center p-4 relative overflow-hidden text-white">
        {/* Shooting stars */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-white rounded-full animate-shoot`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 3}s`,
              opacity: Math.random() * 0.8 + 0.2
            }}
          ></div>
        ))}

        <div className="text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-8 animate-pulse">
            Урилга ирлээ! 
          </h1>

          {/* Envelope */}
          <div 
            className={`relative cursor-pointer transition-transform duration-700 hover:scale-105 ${isAnimating ? 'animate-bounce' : ''}`}
            onClick={handleOpenEnvelope}
          >
            <div className="relative w-80 h-56 mx-auto">
              {/* Back of envelope */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-indigo-900 rounded-lg shadow-2xl"></div>
              
              {/* Flap */}
              <div 
                className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-purple-700 to-blue-800 origin-top transition-transform duration-800 ${isAnimating ? '-rotate-180' : ''}`}
                style={{
                  clipPath: 'polygon(0 0, 50% 60%, 100% 0)',
                  transformOrigin: 'top center'
                }}
              ></div>
              
              {/* Letter */}
              <div 
                className={`absolute left-8 right-8 bg-[#0f172a] rounded-t-lg shadow-lg transition-all duration-800 ${isAnimating ? 'top-0 h-64' : 'top-20 h-40'}`}
              >
                <div className="p-6 text-center">
                  <Rocket className="w-12 h-12 text-yellow-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-yellow-400">Б.Тэнүүнгүн</p>
                  <p className="text-lg text-gray-300">Би 1 нас хүрлээ! 🚀</p>
                  {isAnimating && (
                    <div className="mt-4 text-yellow-400 animate-pulse">
                      <p className="text-sm">...</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Moon seal */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full shadow-lg flex items-center justify-center border-4 border-gray-500">
                <Moon className="w-8 h-8 text-white" fill="currentColor" />
              </div>
            </div>

            <p className="mt-8 text-xl font-semibold text-yellow-400 animate-bounce">
              👆 Дарж сансрын адал явдалд нэгдээрэй!
            </p>
          </div>
        </div>

        <style jsx>{`
          @keyframes shoot {
            0% { transform: translate(0, 0) scale(0.5); opacity: 1; }
            100% { transform: translate(200px, 100px) scale(0); opacity: 0; }
          }
          .animate-shoot {
            animation: shoot linear infinite;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] py-8 px-4 animate-fadeIn text-white">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 relative">
          <div className="inline-block animate-bounce">
            <Rocket className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
          </div>
          <h1 className="text-5xl font-bold text-yellow-400 mb-2">Нэг одны адал явдал!</h1>
          <p className="text-2xl text-gray-300 font-medium">Та урилгад оролцоно уу!</p>
        </div>

        {/* Invitation card */}
        <div className="bg-[#1e293b] rounded-3xl shadow-2xl p-8 mb-6 border-4 border-indigo-600 relative overflow-hidden">
          {/* Floating stars */}
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-bounce opacity-50"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`
              }}
            ></div>
          ))}

          <div className="relative z-10">
            {/* Baby photo placeholder */}
            <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-700 to-purple-700 flex items-center justify-center border-4 border-yellow-400 shadow-lg">
              <Rocket className="w-20 h-20 text-yellow-400" fill="currentColor" />
            </div>

            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-yellow-400 mb-2">Б.Тэнүүнгүн</h2>
              <p className="text-xl text-gray-300">1 нас хүрлээ! 🚀</p>
            </div>

            {/* Event details */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start bg-blue-900/40 p-4 rounded-xl">
                <Calendar className="w-6 h-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">1 сарын 18, 2026</p>
                </div>
              </div>

              <div className="flex items-start bg-blue-900/30 p-4 rounded-xl">
                <Clock className="w-6 h-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">13:30 PM - 17:00 PM</p>
                </div>
              </div>

              <div className="flex items-start bg-blue-900/20 p-4 rounded-xl">
                <MapPin className="w-6 h-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Sunny kids cafe</p>
                  <p className="text-gray-300 text-sm">123 Celebration Lane, Happy Town</p>
                </div>
              </div>

              <div className="flex items-start bg-blue-900/10 p-4 rounded-xl">
                <Gift className="w-6 h-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Таны ирц хамгийн том бэлэг!</p>
                  <p className="text-gray-300 text-sm">Хэрэв хүсвэл, номны бэлэг бас урамтай</p>
                </div>
              </div>
            </div>

            {/* RSVP */}
            <div className="bg-gradient-to-r from-indigo-800 to-purple-900 p-6 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-yellow-400 mb-3">RSVP хийнэ үү</h3>
              <p className="text-gray-300 text-lg mb-2">Та ирэх боломжтой эсэхээ мэдэгдэнэ үү!</p>
              <p className="text-gray-400">Утас болон и-мэйлээр холбоо барина уу</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-400 space-y-2">
          <p className="font-medium">Асуулт байвал холбоо барина уу:</p>
          <p>Болдсүх, Анхцэцэг</p>
          <p>📧 smith.family@email.com | 📱 (555) 123-4567</p>
        </div>
      </div>
    </div>
  );
}
