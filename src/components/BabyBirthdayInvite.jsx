import React, { useState, useEffect, useMemo } from 'react';
import { Heart, Calendar, Clock, MapPin, Star, Navigation, Rocket, Orbit } from 'lucide-react';
import p1 from "../assets/p1.jpeg";
import p2 from "../assets/p2.jpeg";
import p3 from "../assets/p3.jpeg";

export default function BabyBirthdayInvite() {
  const [isOpened, setIsOpened] = useState(false);

  // URL-аас зочны нэрийг унших (Жишээ нь: ?to=Баатар)
  const guestName = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('to') || "Хүндэт зочин";
  }, []);

  // Countdown тохиргоо
  const eventDate = useMemo(() => new Date('2026-01-18T13:30:00').getTime(), []);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = eventDate - now;
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [eventDate]);

  // Сансрын фон (Одод анивчих эффект)
  const SpaceBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-slate-950 -z-10">
      {[...Array(30)].map((_, i) => (
        <div 
          key={i}
          className="absolute bg-white rounded-full animate-twinkle"
          style={{
            width: Math.random() * 3 + 'px',
            height: Math.random() * 3 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            animationDelay: Math.random() * 5 + 's'
          }}
        />
      ))}
      <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-sky-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[10%] left-[-5%] w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
    </div>
  );

  // 1. НЭЭХЭЭС ӨМНӨХ ХЭСЭГ (ENVELOPE)
  if (!isOpened) {
    return (
      <div className="min-h-screen bg-sky-50 flex items-center justify-center p-4 font-sans relative overflow-hidden">
        {/* Арын хөвдөг дүрсүүд */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[10%] w-64 h-64 bg-sky-200/50 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-[10%] right-[10%] w-80 h-80 bg-blue-200/50 rounded-full blur-3xl animate-float [animation-delay:-2s]" />
        </div>

        <div className="relative w-full max-w-md z-10">
          <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border-4 border-white transform transition-all duration-500 hover:scale-[1.02]">
            <div className="relative h-56 bg-sky-100 flex items-center justify-center overflow-hidden">
              <Rocket className="w-20 h-20 text-sky-500 animate-float" />
              <div className="absolute bottom-0 w-full h-1/2 bg-linear-to-t from-white to-transparent" />
            </div>

            <div className="p-8 text-center">
              <h2 className="text-4xl font-handwriting text-slate-800 mb-2">Б.Тэнүүнгүн</h2>
              <p className="text-sky-500 font-bold tracking-widest text-xs uppercase mb-8">Би 1 нас хүрлээ</p>
              
              <button 
                onClick={() => setIsOpened(true)}
                className="w-full bg-sky-500 hover:bg-sky-600 text-white py-4 rounded-2xl font-black shadow-xl shadow-sky-200 transition-all active:scale-95 flex items-center justify-center gap-3 group"
              >
                <span>УРИЛГА НЭЭХ</span>
                <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. НЭЭГДСЭН ДАРААХ ХЭСЭГ (INVITATION)
  return (
    <div className="min-h-screen text-slate-100 font-sans relative overflow-x-hidden pb-12 bg-slate-950">
      <SpaceBackground />
      
      <main className="flex flex-col items-center pt-8 px-4 relative z-10">
        <div className="w-full max-w-2xl bg-slate-900/60 backdrop-blur-xl rounded-[48px] border border-white/10 overflow-hidden shadow-2xl">
          
          {/* Hero / Photos Section */}
          <div className="relative p-6 sm:p-10 flex flex-col items-center text-center bg-linear-to-b from-sky-500/10 to-transparent">
            
            {/* 1 Нас Badge */}
            <div className="absolute top-6 right-6 z-20">
              <div className="w-16 h-16 bg-sky-500 rounded-full flex flex-col items-center justify-center text-white border-4 border-slate-900 shadow-xl animate-bounce">
                <span className="text-2xl font-black leading-none">1</span>
                <span className="text-[10px] font-bold uppercase leading-none">Нас</span>
              </div>
            </div>

            {/* Photos Layout */}
            <div className="relative flex items-center justify-center gap-2 sm:gap-4 mb-10 mt-4 w-full">
              <div className="w-24 h-32 sm:w-32 sm:h-44 bg-white/10 p-1 rounded-2xl -rotate-6 overflow-hidden border border-white/20 hover:rotate-0 transition-transform">
                <img src={p2} className="w-full h-full object-cover rounded-xl" alt="Baby 2" />
              </div>
              <div className="w-32 h-44 sm:w-44 sm:h-60 bg-white p-1.5 rounded-2xl z-10 shadow-2xl scale-110 border-4 border-sky-400">
                <img src={p1} className="w-full h-full object-cover rounded-xl" alt="Main Baby" />
              </div>
              <div className="w-24 h-32 sm:w-32 sm:h-44 bg-white/10 p-1 rounded-2xl rotate-6 overflow-hidden border border-white/20 hover:rotate-0 transition-transform">
                <img src={p3} className="w-full h-full object-cover rounded-xl" alt="Baby 3" />
              </div>
            </div>

            {/* Guest Welcome */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold uppercase tracking-widest mb-4 border border-sky-500/30">
                <Orbit className="w-4 h-4 animate-spin-slow" />
                Урилга
              </div>
              <h1 className="text-xl sm:text-2xl text-sky-100 font-medium px-4">
                Эрхэм <span className="text-white font-black border-b-2 border-sky-500 uppercase px-1">{guestName}</span> таныг
              </h1>
              <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-md mx-auto">
                Бидний хайрт хүү Б.Тэнүүнгүний 1 насны төрсөн өдрийн баярт хүрэлцэн ирэхийг урьж байна.
              </p>
            </div>

            {/* Countdown */}
            <div className="flex justify-center gap-3 w-full">
              {[
                { label: 'Өдөр', val: timeLeft.days },
                { label: 'Цаг', val: timeLeft.hours },
                { label: 'Мин', val: timeLeft.minutes },
                { label: 'Сек', val: timeLeft.seconds }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center bg-white/5 border border-white/10 rounded-2xl p-3 min-w-16.25 sm:min-w-20">
                  <span className="text-xl sm:text-2xl font-black text-sky-400">{item.val}</span>
                  <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 sm:p-10 border-y border-white/5 bg-black/20">
            <div className="flex flex-col items-center text-center gap-2">
              <Calendar className="text-sky-400 w-6 h-6" />
              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Хэзээ</span>
              <span className="font-bold text-white">1 сарын 18</span>
              <span className="text-xs text-sky-300/60">Ням гараг</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2 sm:border-x border-white/5">
              <Clock className="text-sky-400 w-6 h-6" />
              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Цаг</span>
              <span className="font-bold text-white">13:30 цаг</span>
              <span className="text-xs text-sky-300/60">17:00 хүртэл</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <MapPin className="text-sky-400 w-6 h-6" />
              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Хаана</span>
              <span className="font-bold text-white uppercase text-sm">Sunny Kids Cafe</span>
              <span className="text-[10px] text-sky-300/60">ХУД-19 хороо</span>
            </div>
          </div>

          {/* Map Link */}
          <div className="p-6">
            <a 
              href="https://share.google/bN6wAtxjWtYwSiLjd" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative block w-full h-32 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <img 
                src="https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/pin-s+8B5CF6(106.9057,47.9184)/106.9057,47.9184,14/600x300@2x?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                alt="Location Map"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-sky-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-xl flex items-center gap-2 group-hover:bg-sky-400 transition-colors">
                  <Navigation className="w-4 h-4" />
                  MAPS-аах харах
                </div>
              </div>
            </a>
          </div>

          {/* Footer */}
          <div className="p-8 text-center bg-black/20">
            <p className="text-slate-400 text-sm leading-relaxed">
              Хүндэтгэсэн аав <span className="text-white font-bold">Л.Болдсүх</span>, ээж <span className="text-white font-bold">Ч.Анхцэцэг</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}