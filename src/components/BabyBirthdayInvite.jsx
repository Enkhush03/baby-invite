import React, { useState, useEffect, useMemo } from 'react';
import { Heart, Calendar, Clock, MapPin, Star, Navigation, Rocket, Orbit, Gift, Cake, Moon } from 'lucide-react';
import p1 from "../assets/p1.jpeg";
import p2 from "../assets/p2.jpeg";
import p3 from "../assets/p3.jpeg";

export default function BabyBirthdayInvite() {
  const [isOpened, setIsOpened] = useState(false);

  const guestName = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('to') || "Хүндэт зочин";
  }, []);

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

  // САНСРЫН ИДЭВХИТЭЙ ФОН
  const SpaceBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-slate-950 -z-10">
      {/* Одод */}
      {[...Array(40)].map((_, i) => (
        <div key={i} className="absolute bg-white rounded-full animate-twinkle"
          style={{
            width: Math.random() * 2 + 1 + 'px',
            height: Math.random() * 2 + 1 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            animationDelay: Math.random() * 5 + 's'
          }}
        />
      ))}
      
      {/* Хөвдөг гаригууд болон элементүүд */}
      <Orbit className="absolute top-10 left-[10%] text-sky-500/20 w-32 h-32 animate-spin-slow" />
      <Moon className="absolute bottom-40 right-[15%] text-purple-500/20 w-24 h-24 animate-float-alt" />
      <Cake className="absolute top-40 right-[5%] text-pink-500/20 w-16 h-16 animate-float" />
      <Gift className="absolute bottom-20 left-[5%] text-sky-400/20 w-20 h-20 animate-float-alt" />
      
      {/* Гэрлийн туяанууд */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px]" />
    </div>
  );

  if (!isOpened) {
    return (
      <div className="min-h-screen bg-sky-950 flex items-center justify-center p-4 relative overflow-hidden">
        <SpaceBackground />
        
        <div className="relative z-10 w-full max-w-md">
          <div className="bg-slate-900/40 backdrop-blur-xl rounded-[48px] p-10 border border-white/10 text-center shadow-2xl">
            <div className="mb-8 relative inline-block">
              <div className="absolute inset-0 bg-sky-500 blur-2xl opacity-20 animate-pulse" />
              <Rocket className="w-24 h-24 text-sky-400 animate-float relative z-10" />
            </div>
            
            <h2 className="text-4xl font-handwriting text-white mb-4">Б.Тэнүүнгүн</h2>
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="h-[1px] w-8 bg-sky-500/50" />
              <p className="text-sky-300 font-bold tracking-[0.3em] text-xs uppercase">Би 1 нас хүрлээ</p>
              <div className="h-[1px] w-8 bg-sky-500/50" />
            </div>

            <button 
              onClick={() => setIsOpened(true)}
              className="w-full bg-sky-500 hover:bg-sky-400 text-white py-5 rounded-3xl font-black tracking-widest transition-all active:scale-95 shadow-lg shadow-sky-500/20 flex items-center justify-center gap-4 group"
            >
              УРИЛГА НЭЭХ <Rocket className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-slate-100 font-sans relative overflow-x-hidden pb-20 bg-slate-950">
      <SpaceBackground />
      
      <main className="flex flex-col items-center pt-10 px-4 relative z-10">
        <div className="w-full max-w-2xl bg-slate-900/80 backdrop-blur-2xl rounded-[60px] border border-white/10 overflow-hidden shadow-2xl">
          
          {/* Header & Photos */}
          <div className="relative pt-12 pb-8 px-6 flex flex-col items-center text-center">
            <div className="absolute top-8 right-8 animate-bounce">
                <div className="bg-sky-500 p-4 rounded-full border-4 border-slate-900 shadow-xl">
                  <span className="text-2xl font-black">1</span>
                </div>
            </div>

            <div className="relative flex items-center justify-center gap-4 mb-12">
              <div className="w-24 h-32 sm:w-36 sm:h-48 bg-white/5 p-1.5 rounded-[32px] -rotate-6 border border-white/10 shrink-0">
                <img src={p2} className="w-full h-full object-cover rounded-[24px]" />
              </div>
              <div className="w-32 h-44 sm:w-48 sm:h-64 bg-white p-2 rounded-[40px] z-10 shadow-sky-500/20 shadow-2xl scale-110 border-4 border-sky-400 shrink-0">
                <img src={p1} className="w-full h-full object-cover rounded-[32px]" />
              </div>
              <div className="w-24 h-32 sm:w-36 sm:h-48 bg-white/5 p-1.5 rounded-[32px] rotate-6 border border-white/10 shrink-0">
                <img src={p3} className="w-full h-full object-cover rounded-[24px]" />
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl font-medium mb-4">
              Эрхэм <span className="text-sky-400 font-black italic uppercase tracking-tighter">{guestName}</span>
            </h1>
            <div className="flex items-center gap-3 text-sky-300/80 mb-6 bg-sky-500/10 px-6 py-2 rounded-full border border-sky-500/20">
              <Cake className="w-5 h-5" />
              <span className="text-sm font-bold tracking-widest uppercase">Төрсөн өдрийн баярт урьж байна</span>
            </div>
          </div>

          {/* Countdown Layout */}
          <div className="px-6 mb-12">
            <div className="grid grid-cols-4 gap-3">
              {[
                { l: 'Өдөр', v: timeLeft.days },
                { l: 'Цаг', v: timeLeft.hours },
                { l: 'Мин', v: timeLeft.minutes },
                { l: 'Сек', v: timeLeft.seconds }
              ].map((t, i) => (
                <div key={i} className="bg-black/40 border border-white/5 rounded-3xl p-4 flex flex-col items-center">
                  <span className="text-2xl sm:text-3xl font-black text-white">{t.v}</span>
                  <span className="text-[10px] text-sky-400 uppercase font-bold tracking-widest">{t.l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-10 bg-black/40 border-t border-white/5">
            <div className="flex flex-col items-center gap-3">
              <div className="p-4 bg-sky-500/10 rounded-2xl text-sky-400"><Calendar /></div>
              <div className="text-center">
                <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Хэзээ</p>
                <p className="font-bold">2026.01.18</p>
                <p className="text-xs text-slate-400">Ням гараг</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 sm:border-x border-white/5">
              <div className="p-4 bg-sky-500/10 rounded-2xl text-sky-400"><Clock /></div>
              <div className="text-center">
                <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Цаг</p>
                <p className="font-bold">13:30 - 17:00</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="p-4 bg-sky-500/10 rounded-2xl text-sky-400"><MapPin /></div>
              <div className="text-center">
                <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Хаана</p>
                <p className="font-bold text-sm">Sunny Kids Cafe</p>
                <p className="text-[10px] text-slate-400">ХУД, 19-р хороо</p>
              </div>
            </div>
          </div>

          {/* Map Link */}
          <div className="p-8">
            <a href="https://share.google/bN6wAtxjWtYwSiLjd" target="_blank" rel="noopener noreferrer" 
              className="group relative block w-full h-40 rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
              <img src="https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/pin-s+0ea5e9(106.9057,47.9184)/106.9057,47.9184,14/600x300@2x?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw" 
                className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 flex items-center justify-center bg-sky-950/20">
                <div className="bg-sky-500 text-white px-8 py-3 rounded-2xl font-bold flex items-center gap-3 shadow-xl group-hover:bg-sky-400 transition-all">
                  <Navigation className="w-5 h-5" /> ГАЗАРЗҮЙГ ХАРАХ
                </div>
              </div>
            </a>
          </div>

          <div className="p-10 text-center bg-black/40 border-t border-white/5">
            <div className="flex justify-center gap-4 mb-4">
              <Gift className="text-sky-500/40 w-5 h-5" />
              <Cake className="text-sky-500/40 w-5 h-5" />
              <Star className="text-sky-500/40 w-5 h-5" />
            </div>
            <p className="text-slate-400 text-sm">Хүндэтгэсэн аав <span className="text-white font-bold">Л.Болдсүх</span>, ээж <span className="text-white font-bold">Ч.Анхцэцэг</span></p>
          </div>
        </div>
      </main>
    </div>
  );
}