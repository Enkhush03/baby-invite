import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, MapPin, Calendar, Clock, Gift, Heart, MailOpen, Navigation, Stars } from 'lucide-react';

export default function BabyBirthdayInvite() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDF4FF] font-['Plus_Jakarta_Sans',_sans-serif] text-slate-800 overflow-x-hidden relative">
      
      {/* Background: Light Nebula Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-200/50 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-blue-100/60 rounded-full blur-[120px]" />
        {/* Маш жижигхэн гялалзах одууд */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-purple-400 rounded-full opacity-20"
            style={{
              width: Math.random() * 4,
              height: Math.random() * 4,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0.1, 0.5, 0.1] }}
            transition={{ duration: 3 + Math.random() * 2, repeat: Infinity }}
          />
        ))}
      </div>

      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
        <AnimatePresence mode="wait">
          {!isOpened ? (
            /* --- 1. ENVELOPE (UNOPENED) --- */
            <motion.div
              key="envelope"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: -50, rotateX: 45 }}
              className="relative w-full max-w-[420px] cursor-pointer group"
              onClick={() => setIsOpened(true)}
            >
              <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden border border-purple-50 p-1">
                <div className="relative aspect-[4/3] bg-white rounded-xl border-2 border-dashed border-purple-100 flex flex-col items-center justify-center text-center p-8">
                  {/* Дугтуйны дээд тал (Triangle effect) */}
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#f5f3ff_0%,transparent_50%)] opacity-50" />
                  
                  <motion.div 
                    animate={{ y: [0, -10, 0] }} 
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-20 h-20 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full shadow-lg flex items-center justify-center text-white mb-6 z-10"
                  >
                    <Heart fill="currentColor" size={32} />
                  </motion.div>

                  <h2 className="text-3xl font-['Caveat',_cursive] text-slate-700 mb-2">The Smith Family</h2>
                  <p className="text-slate-400 text-sm mb-6 tracking-wide">Танд нэгэн нууц илгээмж ирлээ</p>
                  
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-all shadow-md">
                    <MailOpen size={18} /> Урилгыг нээх
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            /* --- 2. INVITATION (OPENED) --- */
            <motion.div
              key="invitation"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-purple-50"
            >
              {/* Header: Photo Section */}
              <div className="bg-[#F5F3FF] p-8 sm:p-12 text-center relative overflow-hidden">
                <Stars className="absolute top-4 left-4 text-purple-200 animate-pulse" />
                <Rocket className="absolute bottom-4 right-4 text-purple-200 -rotate-45" />
                
                <div className="relative inline-block mb-8">
                  <div className="w-48 h-48 rounded-2xl bg-white p-3 shadow-xl rotate-3 overflow-hidden">
                    {/* ХҮҮХДИЙН ЗУРАГ ОРУУЛАХ ХЭСЭГ */}
                    <div className="w-full h-full bg-slate-100 rounded-xl overflow-hidden bg-[url('https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=500')] bg-cover bg-center">
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full border-4 border-white flex flex-col items-center justify-center shadow-lg -rotate-12">
                    <span className="text-xl font-black text-slate-800 leading-none">1st</span>
                    <span className="text-[8px] font-bold uppercase text-slate-700">Birthday</span>
                  </div>
                </div>

                <h1 className="text-4xl font-extrabold text-slate-800 mb-2 tracking-tight">
                  Look who is turning <span className="text-purple-600 underline">One</span>!
                </h1>
                <p className="text-slate-500 font-medium">Оливерын сансрын анхны тойрог замын баяр</p>
              </div>

              {/* Event Details */}
              <div className="p-8 sm:p-10 space-y-10">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-b border-purple-50 pb-10">
                  <DetailItem icon={<Calendar />} label="Хэзээ" val="1 сарын 18" sub="Ням гараг" />
                  <DetailItem icon={<Clock />} label="Цаг" val="13:30 PM" sub="17:00 хүртэл" />
                  <DetailItem icon={<MapPin />} label="Хаана" val="Sunny Garden" sub="123 Kids Lane" />
                </div>

                {/* ГАЗРЫН ЗУРАГ ОРУУЛАХ ХЭСЭГ */}
                <div className="w-full">
                  <a href="#" className="group block relative h-40 rounded-3xl overflow-hidden border border-purple-100 shadow-sm">
                    <div className="absolute inset-0 bg-[url('https://images.placeholder.com/600x200/e2e8f0/64748b?text=Map+Location')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end justify-center pb-4">
                      <span className="bg-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                        <Navigation size={16} className="text-purple-600" /> Газрын зураг харах
                      </span>
                    </div>
                  </a>
                </div>

                {/* RSVP and Registry */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-purple-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-purple-200 hover:bg-purple-700 transition-all">
                    RSVP Now
                  </button>
                  <button className="flex-1 border-2 border-purple-100 text-purple-600 py-4 rounded-2xl font-bold text-lg hover:bg-purple-50 transition-all flex items-center justify-center gap-2">
                    <Gift size={20} /> Бэлгийн жагсаалт
                  </button>
                </div>

                <footer className="text-center pt-4 border-t border-purple-50">
                  <p className="text-slate-400 text-sm">Hosted by <span className="font-bold text-slate-700">Sarah & Mike</span></p>
                </footer>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

function DetailItem({ icon, label, val, sub }) {
  return (
    <div className="text-center space-y-2">
      <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-500 mx-auto mb-1">
        {icon}
      </div>
      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{label}</p>
      <p className="text-lg font-bold text-slate-800 leading-none">{val}</p>
      <p className="text-xs text-slate-500">{sub}</p>
    </div>
  );
}