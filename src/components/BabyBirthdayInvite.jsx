import React, { useState, useEffect } from 'react';
import { Heart, Truck, Calendar, Clock, MapPin, Gift, Star, Navigation } from 'lucide-react';

// Add Google Fonts
if (typeof document !== 'undefined') {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Caveat:wght@400;500;600;700&family=Noto+Sans:wght@400;500;600;700&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
}

export default function BabyInvitation() {
  const [isOpened, setIsOpened] = useState(false);
  const [babyImage] = useState('https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=500&fit=crop');

  useEffect(() => {
    // Preload images
    const img = new Image();
    img.src = babyImage;
  }, [babyImage]);

  if (!isOpened) {
    return (
      <div className="min-h-screen bg-[#FDF4FF] flex items-center justify-center p-6 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-pink-400/20 rounded-full blur-[80px]" 
               style={{ animation: 'float 6s ease-in-out infinite' }} />
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-400/20 rounded-full blur-[100px]" 
               style={{ animation: 'float 6s ease-in-out infinite', animationDelay: '-2s' }} />
          <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-yellow-400/20 rounded-full blur-[60px]" 
               style={{ animation: 'float 6s ease-in-out infinite', animationDelay: '-4s' }} />
        </div>

        {/* Envelope Card */}
        <div className="relative w-full max-w-[440px] z-10">
          <div className="relative bg-white rounded-2xl shadow-[0_20px_40px_-10px_rgba(139,92,246,0.15)] overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-30 pointer-events-none" 
                 style={{ 
                   backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
                   backgroundSize: '24px 24px'
                 }} />
            
            {/* Envelope Flap */}
            <div className="absolute top-0 left-0 w-full h-[200px] z-20 pointer-events-none">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full drop-shadow-md">
                <polygon points="0,0 50,100 100,0" fill="#f8fafc" />
                <polygon points="0,0 50,100 100,0" fill="url(#flap-gradient)" opacity="0.1" />
                <defs>
                  <linearGradient id="flap-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="100%" stopColor="black" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Heart Seal Button */}
            <div className="absolute top-[200px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
              <button 
                onClick={() => setIsOpened(true)}
                className="relative group focus:outline-none"
              >
                <div className="w-20 h-20 bg-[#FB7185] rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white transform transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
                  <Heart fill="currentColor" size={36} />
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-[#FB7185] opacity-0 group-hover:opacity-100 animate-ping" />
                <div className="absolute -inset-2 rounded-full border border-[#FB7185]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
            </div>

            {/* Card Content */}
            <div className="pt-[220px] pb-10 px-8 flex flex-col items-center text-center relative z-10">
              {/* Decorative Icon */}
              <div className="absolute top-[240px] right-6 opacity-20 rotate-12 pointer-events-none">
                <Truck size={64} className="text-purple-600" />
              </div>

              <div className="space-y-1 mb-8">
                <p className="text-[#FB7185] font-bold text-xs uppercase tracking-[0.2em]">
                  Онцгой Хүргэлт
                </p>
                <h2 className="font-['Caveat',cursive] text-5xl text-slate-700 -rotate-2">
                  Smith Family
                </h2>
                <p className="text-slate-500 text-sm pt-2 max-w-[200px] mx-auto leading-relaxed">
                  Та төрсөн өдрийн урилга хүлээн авлаа!
                </p>
              </div>

              <button 
                onClick={() => setIsOpened(true)}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full h-14 font-bold text-lg shadow-lg shadow-purple-600/30 flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] active:scale-95 relative overflow-hidden group"
              >
                <Heart size={20} className="group-hover:rotate-12 transition-transform" />
                <span>Урилгыг Нээх</span>
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </button>
            </div>
          </div>

          {/* Shadow */}
          <div className="absolute -bottom-4 left-8 right-8 h-4 bg-black/10 blur-lg rounded-[100%] pointer-events-none" />
        </div>

        {/* Footer Text */}
        <div className="absolute bottom-12 left-0 right-0 text-center opacity-80">
          <p className="text-slate-500 font-medium text-sm flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
            Thompson гэр бүлээс зохион байгуулав
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
          </p>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          @keyframes shimmer {
            100% { transform: translateX(100%); }
          }
        `}</style>
      </div>
    );
  }

  // Opened State
  return (
    <div className="min-h-screen bg-[#f8f7fb] flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 lg:px-10 py-3 bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-30">
        <div className="flex items-center gap-3 text-slate-900">
          <div className="w-9 h-9 flex items-center justify-center text-purple-600 bg-purple-100 rounded-full">
            <Star fill="currentColor" size={24} />
          </div>
          <h2 className="text-lg font-bold tracking-tight">TinyCelebrations</h2>
        </div>
        <div className="flex gap-2">
          <button className="hidden sm:flex min-w-[84px] items-center justify-center rounded-full h-10 px-6 bg-slate-100 hover:bg-slate-200 transition-colors text-slate-900 text-sm font-bold">
            Нэвтрэх
          </button>
          <button className="flex min-w-[84px] items-center justify-center rounded-full h-10 px-6 bg-purple-600 hover:bg-purple-700 transition-colors text-white text-sm font-bold shadow-md shadow-purple-600/20">
            Урилга Үүсгэх
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center py-8 lg:py-16 px-4 sm:px-6 relative">
        {/* Background Decorations */}
        <div className="absolute top-20 left-4 lg:left-20 text-purple-600/5 select-none animate-pulse">
          <Star size={200} fill="currentColor" />
        </div>
        <div className="absolute bottom-20 right-4 lg:right-20 text-purple-600/5 select-none animate-pulse" style={{ animationDelay: '1.5s' }}>
          <Heart size={200} fill="currentColor" />
        </div>

        {/* Main Card */}
        <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-[0_20px_40px_-10px_rgba(139,92,246,0.15)] overflow-hidden border border-slate-100 flex flex-col">
          
          {/* Hero Section with Photos */}
          <div className="relative w-full bg-[#f0ebfa] p-8 lg:p-10 flex flex-col items-center justify-center overflow-hidden">
            {/* Birthday Badge */}
            <div className="absolute top-6 right-6 lg:top-8 lg:right-8 z-20 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-purple-600 flex flex-col items-center justify-center text-white border-4 border-white shadow-xl transform rotate-12">
                <span className="text-2xl lg:text-3xl font-extrabold leading-none">1st</span>
                <span className="text-[10px] font-bold uppercase tracking-widest leading-none mt-0.5">B-Day</span>
              </div>
            </div>

            {/* Photos */}
            <div className="relative flex items-center justify-center gap-4 lg:gap-8 w-full max-w-xl mb-8 z-10">
              {/* Left Photo */}
              <div className="relative w-32 h-40 sm:w-40 sm:h-52 lg:w-48 lg:h-60 shrink-0">
                <div className="absolute inset-0 transform -rotate-6 scale-90 opacity-90 hover:opacity-100 hover:rotate-0 hover:scale-100 transition-all duration-500 cursor-pointer">
                  <div className="w-full h-full bg-white p-2 sm:p-3 shadow-lg rounded-xl">
                    <img 
                      src={babyImage}
                      alt="Baby photo"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Center Photo */}
              <div className="relative w-40 h-52 sm:w-52 sm:h-64 lg:w-60 lg:h-72 shrink-0 z-10">
                <div className="absolute inset-0 transform hover:scale-105 transition-transform duration-500 shadow-2xl rounded-2xl cursor-pointer">
                  <div className="w-full h-full bg-white p-2 sm:p-3 shadow-xl rounded-2xl">
                    <img 
                      src={babyImage}
                      alt="Baby photo"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Right Photo */}
              <div className="relative w-32 h-40 sm:w-40 sm:h-52 lg:w-48 lg:h-60 shrink-0">
                <div className="absolute inset-0 transform rotate-6 scale-90 opacity-90 hover:opacity-100 hover:rotate-0 hover:scale-100 transition-all duration-500 cursor-pointer">
                  <div className="w-full h-full bg-white p-2 sm:p-3 shadow-lg rounded-xl">
                    <img 
                      src={babyImage}
                      alt="Baby photo"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="flex flex-col items-center gap-3 z-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400">Үдэшлэг эхлэх хүртэл</p>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex flex-col items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/60 shadow-sm transition-transform hover:-translate-y-1 duration-300">
                  <span className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-none">05</span>
                  <span className="text-[10px] font-bold uppercase text-purple-600 tracking-wide mt-1">Өдөр</span>
                </div>
                <span className="text-xl font-bold text-purple-400/40 animate-pulse pb-2">:</span>
                <div className="flex flex-col items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/60 shadow-sm transition-transform hover:-translate-y-1 duration-300">
                  <span className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-none">12</span>
                  <span className="text-[10px] font-bold uppercase text-purple-600 tracking-wide mt-1">Цаг</span>
                </div>
                <span className="text-xl font-bold text-purple-400/40 animate-pulse pb-2">:</span>
                <div className="flex flex-col items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/60 shadow-sm transition-transform hover:-translate-y-1 duration-300">
                  <span className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-none">45</span>
                  <span className="text-[10px] font-bold uppercase text-purple-600 tracking-wide mt-1">Минут</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 flex flex-col p-6 sm:p-10 lg:p-12 text-center relative z-10">
            <div className="mb-10">
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-purple-100 text-purple-600 text-xs font-bold uppercase tracking-wider mb-5">
                <Star size={16} fill="currentColor" />
                Таныг урьж байна
              </div>
              <h1 className="text-slate-900 tracking-tight text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-4">
                Хэн нэг жилтэй болж байна вэ!
              </h1>
              <p className="text-purple-600 text-lg font-medium leading-relaxed max-w-lg mx-auto">
                Бялуу, бөмбөлөг, хөгжилтэй үдэшлэгт таныг урьж байна. Оливерын том мөч тэмдэглэхээр ирээрэй!
              </p>
            </div>

            {/* Event Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 border-y border-slate-100 py-8">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 mb-1">
                  <Calendar size={24} />
                </div>
                <h3 className="text-xs font-bold text-purple-400 uppercase tracking-wide">Хэзээ</h3>
                <div>
                  <p className="text-lg font-bold text-slate-900">10 сарын 14</p>
                  <p className="text-sm text-purple-600">Бямба гараг, 2023</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 sm:border-x border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 mb-1">
                  <Clock size={24} />
                </div>
                <h3 className="text-xs font-bold text-purple-400 uppercase tracking-wide">Цаг</h3>
                <div>
                  <p className="text-lg font-bold text-slate-900">14:00 цаг</p>
                  <p className="text-sm text-purple-600">17:00 хүртэл</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 mb-1">
                  <MapPin size={24} />
                </div>
                <h3 className="text-xs font-bold text-purple-400 uppercase tracking-wide">Хаана</h3>
                <div>
                  <p className="text-lg font-bold text-slate-900">The Garden</p>
                  <p className="text-sm text-purple-600">123 Sunshine Ln</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="w-full mb-10">
              <a 
                href="https://maps.google.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative w-full h-32 sm:h-40 rounded-2xl overflow-hidden border border-slate-100 hover:border-purple-200 transition-colors shadow-sm"
              >
                <img 
                  src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-122.4194,37.7749,12,0/600x300@2x?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
                  alt="Map"
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center pb-4">
                  <div className="flex items-center gap-2 text-white font-bold text-sm bg-black/40 backdrop-blur px-4 py-2 rounded-full shadow-sm group-hover:bg-purple-600 transition-colors">
                    <Navigation size={18} />
                    The Garden руу чиглүүлэг авах
                  </div>
                </div>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <button className="w-full sm:w-auto min-w-[200px] py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg shadow-[0_4px_14px_0_rgba(111,47,238,0.39)] hover:shadow-[0_6px_20px_rgba(111,47,238,0.23)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                <Heart size={20} fill="currentColor" />
                RSVP Хийх
              </button>
              <a 
                href="#" 
                className="w-full sm:w-auto min-w-[200px] px-6 py-3.5 rounded-xl border border-slate-200 bg-transparent hover:bg-purple-50 text-purple-600 font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <Gift size={20} />
                Бэлгийн Жагсаалт
              </a>
            </div>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap justify-center items-center gap-4 text-xs text-purple-400">
              <p>
                <span className="font-bold text-slate-900">Sarah & Mike</span>-аас зохион байгуулав
              </p>
              <span className="hidden sm:block opacity-30">•</span>
              <a href="#" className="hover:text-purple-600 transition-colors">
                Асуулт байвал эзэнд холбогдох
              </a>
            </div>
          </div>
        </div>

        {/* Powered By */}
        <div className="mt-8 text-center">
          <p className="text-purple-400 text-sm font-medium opacity-70">
            Powered by TinyCelebrations
          </p>
        </div>
      </main>
    </div>
  );
}