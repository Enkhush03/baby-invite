import React, { useState, useEffect } from 'react';
import { Heart, Calendar, Clock, MapPin, Star, Navigation } from 'lucide-react';
import p1 from "../assets/p1.jpeg";
import p2 from "../assets/p2.jpeg";
import p3 from "../assets/p3.jpeg";

export default function BabyBirthdayInvite() {
  const [isOpened, setIsOpened] = useState(false);
  // Үдэшлэгийн огноо (Та энийг өөрчилж болно)
  const eventDate = new Date('2026-01-18T13:30:00'); // 2026 оны 10 сарын 14, 14:00 цаг
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isOpened) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center p-4 sm:p-6 font-sans">

        {/* Background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-64 sm:w-96 h-64 sm:h-96 bg-pink-300/30 rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite]" />
          <div className="absolute bottom-[-10%] right-[-5%] w-72 sm:w-[500px] h-72 sm:h-[500px] bg-purple-300/30 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite] [animation-delay:-2s]" />
          <div className="absolute top-[20%] right-[10%] w-48 sm:w-72 h-48 sm:h-72 bg-blue-300/20 rounded-full blur-3xl animate-[float_7s_ease-in-out_infinite] [animation-delay:-4s]" />
        </div>

        {/* Main envelope card */}
        <div className="relative w-full max-w-md z-10">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-3xl">
            
            {/* Envelope flap SVG */}
            <div className="relative h-48 bg-gradient-to-br from-slate-50 to-slate-100">
              <svg viewBox="0 0 400 200" className="w-full h-full drop-shadow-lg">
                <defs>
                  <linearGradient id="flapGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f8fafc" />
                    <stop offset="100%" stopColor="#e2e8f0" />
                  </linearGradient>
                </defs>
                <polygon points="0,0 200,200 400,0" fill="url(#flapGrad)" />
                <polygon points="0,0 200,200 400,0" fill="black" opacity="0.05" />
              </svg>
              
              {/* Heart seal button */}
              <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2">
                <button 
                  onClick={() => setIsOpened(true)}
                  className="relative group focus:outline-none focus:ring-4 focus:ring-pink-300 rounded-full"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full border-4 sm:border-[6px] border-white shadow-2xl flex items-center justify-center text-white transform transition-all duration-300 group-hover:scale-110 group-active:scale-95">
                    <Heart className="w-8 h-8 sm:w-10 sm:h-10" fill="currentColor" />
                  </div>
                  <div className="absolute inset-0 rounded-full border-2 border-pink-400 opacity-0 group-hover:opacity-100 animate-ping" />
                </button>
              </div>
            </div>

            {/* Card content */}
            <div className="px-6 sm:px-8 pt-16 pb-8 text-center relative">
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 text-purple-200 opacity-30 rotate-12">
                <Star className="w-12 h-12" fill="currentColor" />
              </div>

              {/* <p className="text-pink-500 font-bold text-xs uppercase tracking-[0.2em] mb-2"> 
              </p> */}
              
              <h2 className="text-4xl sm:text-5xl font-handwriting text-slate-700 mb-2 -rotate-1">
                Би 1 нас хүрлээ
              </h2>
              
              <p className="text-slate-400 text-sm mb-8 max-w-[250px] mx-auto leading-relaxed">
                Та төрсөн өдрийн урилга хүлээн авлаа!
              </p>

              <button 
                onClick={() => setIsOpened(true)}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-full py-4 font-bold text-base sm:text-lg shadow-lg shadow-purple-500/30 flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] active:scale-95 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_1.5s_infinite]" />
                <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Урилга Нээх</span>
              </button>
            </div>
          </div>

          {/* Shadow */}
          <div className="absolute -bottom-4 left-8 right-8 h-6 bg-black/10 blur-xl rounded-full" />
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-slate-400 text-sm font-medium flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            Болдсүхийн гэр бүлээс
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
          </p>
        </div>
      </div>
    );
  }

  // Opened invitation
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 font-sans">

      {/* Main content */}
      <main className="flex flex-col items-center justify-center min-h-screen py-8 lg:py-12 px-4 sm:px-6 relative">
        
        {/* Background decorations */}
        <div className="absolute top-20 left-4 lg:left-20 text-purple-600/5 pointer-events-none">
          <Star className="w-32 h-32 lg:w-48 lg:h-48" fill="currentColor" />
        </div>
        <div className="absolute bottom-20 right-4 lg:right-20 text-pink-500/5 pointer-events-none">
          <Heart className="w-32 h-32 lg:w-48 lg:h-48" fill="currentColor" />
        </div>

        {/* Main card */}
        <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          
          {/* Hero section */}
          <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 p-6 sm:p-10 flex flex-col items-center text-center overflow-hidden">
            
            {/* Birthday badge */}
            <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-20">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex flex-col items-center justify-center text-white border-4 border-white shadow-xl transform rotate-12 animate-[bounce_3s_ease-in-out_infinite]">
                <span className="text-2xl sm:text-3xl font-extrabold leading-none">1</span>
                <span className="text-[9px] font-bold uppercase tracking-wider leading-none">Нас</span>
              </div>
            </div>

            {/* Photos */}
            <div className="relative flex items-center justify-center gap-3 sm:gap-6 mb-8 w-full max-w-2xl">
              {/* Left photo */}
              <div className="relative w-24 h-32 sm:w-32 sm:h-40 lg:w-40 lg:h-52 shrink-0 transform -rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-500 cursor-pointer">
                <div className="w-full h-full bg-white p-2 shadow-xl rounded-2xl">
                  <img 
                    src={p2}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>

              {/* Center photo (main) */}
              <div className="relative w-32 h-40 sm:w-44 sm:h-56 lg:w-52 lg:h-64 shrink-0 z-10 hover:scale-105 transition-transform duration-500 cursor-pointer">
                <div className="w-full h-full bg-white p-2 sm:p-3 shadow-2xl rounded-2xl">
                  <img 
                    src={p1}
                    alt="Baby"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>

              {/* Right photo */}
              <div className="relative w-24 h-32 sm:w-32 sm:h-40 lg:w-40 lg:h-52 shrink-0 transform rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-500 cursor-pointer">
                <div className="w-full h-full bg-white p-2 shadow-xl rounded-2xl">
                  <img 
                    src={p3}
                    alt="Baby"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>

            {/* Countdown */}
            <div className="flex flex-col items-center gap-3">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400">Төрсөн өдөр эхлэх хүртэл</p>
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="flex flex-col items-center justify-center w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-white/50 backdrop-blur border border-white/60 shadow-md transition-transform hover:-translate-y-1">
                  <span className="text-lg sm:text-2xl font-extrabold text-slate-900">{timeLeft.days}</span>
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase text-purple-600">Өдөр</span>
                </div>
                <span className="text-xl font-bold text-purple-400/40">:</span>
                <div className="flex flex-col items-center justify-center w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-white/50 backdrop-blur border border-white/60 shadow-md transition-transform hover:-translate-y-1">
                  <span className="text-lg sm:text-2xl font-extrabold text-slate-900">{timeLeft.hours}</span>
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase text-purple-600">Цаг</span>
                </div>
                <span className="text-xl font-bold text-purple-400/40">:</span>
                <div className="flex flex-col items-center justify-center w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-white/50 backdrop-blur border border-white/60 shadow-md transition-transform hover:-translate-y-1">
                  <span className="text-lg sm:text-2xl font-extrabold text-slate-900">{timeLeft.minutes}</span>
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase text-purple-600">Мин</span>
                </div>
              </div>
            </div>
          </div>
          

          {/* Content section */}
          <div className="p-6 sm:p-10 lg:p-12">
            
            {/* Title */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-600 text-xs font-bold uppercase tracking-wider mb-4">
                <Star className="w-4 h-4" fill="currentColor" />
                Таныг урьж байна
              </div>
              <h1 className="text-base sm:text-lg text-purple-600 font-medium max-w-xl mx-auto">
                Эрхэм таныг бидний хайрт хүү Б.Тэнүүнгүний 1 насны төрсөн өдрийн баярт хүрэлцэн ирэхийг урьж байна.
              </h1>
            </div>

            {/* Event details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 py-8 border-y border-slate-100">
              <div className="flex flex-col items-center text-center gap-2 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mb-1">
                  <Calendar className="w-6 h-6 text-purple-600" />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Хэзээ</p>
                <p className="text-lg font-bold text-slate-900">1 сарын 18</p>
                <p className="text-sm text-purple-600">Ням гараг, 2026</p>
              </div>

              <div className="flex flex-col items-center text-center gap-2 p-4 rounded-2xl hover:bg-slate-50 transition-colors sm:border-x border-slate-100">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mb-1">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Цаг</p>
                <p className="text-lg font-bold text-slate-900">13:30 цаг</p>
                <p className="text-sm text-purple-600">17:00 хүртэл</p>
              </div>

              <div className="flex flex-col items-center text-center gap-2 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mb-1">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Хаана</p>
                <p className="text-lg font-bold text-slate-900">Sunny kids cafe</p>
                <p className="text-sm text-purple-600">ХУД-19 хороо, Улаанбаатар 17042</p>
              </div>
            </div>

            {/* Map */}
            <div className="mb-8">
              <a 
                href="https://maps.app.goo.gl/7TRgNkWzp4qgB7Pz5"
                target="_blank"
                rel="noopener noreferrer" 
                className="group block relative w-full h-40 sm:h-48 rounded-2xl overflow-hidden border-2 border-slate-100 hover:border-purple-300 transition-all shadow-md hover:shadow-xl"
              >
                <img 
                  src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s+8B5CF6(-122.4194,37.7749)/-122.4194,37.7749,12,0/600x300@2x?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
                  alt="Map"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-center pb-4">
                  <div className="flex items-center gap-2 text-white font-bold text-sm bg-black/50 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-lg group-hover:bg-purple-600 transition-all">
                    <Navigation className="w-4 h-4" />
                    Google maps-аар харах
                  </div>
                </div>
              </a>
            </div>

            {/* Footer */}
            <div className="text-center pt-6 border-t border-slate-100">
              <p className="text-sm text-slate-500">
                Хүндэтгэсэн аав <span className="font-bold text-slate-700">Л.Болдсүх</span> ээж <span className="font-bold text-slate-700">Ч.Анхцэцэг</span>
              </p>
            </div>
          </div>
        </div>

        {/* Powered by - removed */}
      </main>
    </div>
  );
}