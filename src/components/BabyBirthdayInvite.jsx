import React, { useState } from 'react';
import { Cake, MapPin, Calendar, Clock, Gift, Heart } from 'lucide-react';

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
      <div className="min-h-screen bg-gradient-to-br from-green-200 via-teal-200 to-blue-200 flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-600 mb-8 animate-pulse">
            You've Got an Invitation! 💌
          </h1>
          
          {/* Envelope */}
          <div 
            className={`relative cursor-pointer transition-transform duration-700 hover:scale-105 ${
              isAnimating ? 'animate-bounce' : ''
            }`}
            onClick={handleOpenEnvelope}
          >
            {/* Envelope body */}
            <div className="relative w-80 h-56 mx-auto">
              {/* Back of envelope */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-blue-400 rounded-lg shadow-2xl"></div>
              
              {/* Envelope flap - animated */}
              <div 
                className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-pink-400 to-pink-500 origin-top transition-transform duration-800 ${
                  isAnimating ? '-rotate-180' : ''
                }`}
                style={{
                  clipPath: 'polygon(0 0, 50% 60%, 100% 0)',
                  transformOrigin: 'top center'
                }}
              ></div>
              
              {/* Letter peeking out */}
              <div 
                className={`absolute left-8 right-8 bg-white rounded-t-lg shadow-lg transition-all duration-800 ${
                  isAnimating ? 'top-0 h-64' : 'top-20 h-40'
                }`}
              >
                <div className="p-6 text-center">
                  <Cake className="w-12 h-12 text-pink-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-purple-600">Б.Тэнүүнгүн</p>
                  <p className="text-lg text-gray-600">1 нас хүрлээ!</p>
                  {isAnimating && (
                    <div className="mt-4 text-pink-500 animate-pulse">
                      <p className="text-sm">Opening...</p>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Wax seal */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full shadow-lg flex items-center justify-center border-4 border-yellow-600">
                <Heart className="w-8 h-8 text-yellow-700" fill="currentColor" />
              </div>
            </div>
            
            <p className="mt-8 text-xl font-semibold text-purple-700 animate-bounce">
              👆 Click to Open
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 py-8 px-4 animate-fadeIn">
      <div className="max-w-2xl mx-auto">
        {/* Header with floating balloons animation */}
        <div className="text-center mb-8 relative">
          <div className="inline-block animate-bounce">
            <Cake className="w-16 h-16 text-pink-500 mx-auto mb-4" />
          </div>
          <h1 className="text-5xl font-bold text-purple-600 mb-2">One-derful Year!</h1>
          <p className="text-2xl text-gray-700 font-medium">You're Invited!</p>
        </div>

        {/* Main invitation card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-6 border-4 border-pink-300 relative overflow-hidden animate-slideUp">
          {/* Decorative corner elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-200 rounded-full -mr-16 -mt-16 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-200 rounded-full -ml-16 -mb-16 opacity-50"></div>
          
          <div className="relative z-10">
            {/* Baby photo placeholder */}
            <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center border-4 border-white shadow-lg">
              <Heart className="w-20 h-20 text-white" fill="currentColor" />
            </div>

            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-purple-600 mb-2">Б.Тэнүүнгүн</h2>
              <p className="text-xl text-gray-600">1 нас хүрлээ!</p>
            </div>

            {/* Event details */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start bg-pink-50 p-4 rounded-xl">
                <Calendar className="w-6 h-6 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800"> 1 сарын 18, 2026</p>
                </div>
              </div>

              <div className="flex items-start bg-blue-50 p-4 rounded-xl">
                <Clock className="w-6 h-6 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800">2:00 PM - 5:00 PM</p>
                </div>
              </div>

              <div className="flex items-start bg-yellow-50 p-4 rounded-xl">
                <MapPin className="w-6 h-6 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800">The Smith Family Home</p>
                  <p className="text-gray-600 text-sm">123 Celebration Lane, Happy Town</p>
                </div>
              </div>

              <div className="flex items-start bg-purple-50 p-4 rounded-xl">
                <Gift className="w-6 h-6 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800">Your presence is the best present!</p>
                  <p className="text-gray-600 text-sm">But if you wish, books are always cherished</p>
                </div>
              </div>
            </div>

            {/* RSVP Message */}
            <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-purple-600 mb-3">Please RSVP</h3>
              <p className="text-gray-700 text-lg mb-2">Let us know if you can make it!</p>
              <p className="text-gray-600">Contact us by phone or email</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-600 space-y-2">
          <p className="font-medium">For questions, contact:</p>
          <p>Болдсүх, Анхцэцэг</p>
          <p>📧 smith.family@email.com | 📱 (555) 123-4567</p>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}