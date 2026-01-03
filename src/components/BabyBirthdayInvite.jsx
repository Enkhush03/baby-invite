import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, MapPin, Calendar, Clock, Gift, Heart, MailOpen, Navigation, Star } from 'lucide-react';

export default function BabyBirthdayInvite() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDF4FF] font-sans text-slate-800 overflow-x-hidden relative flex items-center justify-center p-4">
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200/50 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/60 rounded-full blur-[120px]" />
      </div>

      <main className="relative z-10 w-full flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          {!isOpened ? (
            /* --- 1. ENVELOPE (UNOPENED) --- */
            <motion.div
              key="envelope"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: -50 }}
              className="relative w-full max-w-[420px] cursor-pointer"
              onClick={() => setIsOpened(true)}
            >
              <div className="bg-white rounded-2xl shadow-2xl p-1 border border-purple-50">
                <div className="relative aspect-[4/3] bg-white rounded-xl border-2 border-dashed border-purple-100 flex flex-col items-center justify-center text-center p-8 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-50/50 to-transparent" />
                  
                  <motion.div 
                    animate={{ y: [0, -10, 0] }} 
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-20 h-20 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full shadow-lg flex items-center justify-center text-white mb-6 z-10"
                  >
                    <Heart fill="currentColor" size={32} />
                  </motion.div>

                  <h2 className="text-3xl font-serif text-slate-700 mb-2 italic">The Smith Family</h2>
                  <p className="text-slate-400 text-sm mb-6 tracking-wide uppercase font-semibold">Special Delivery</p>
                  
                  <button className="z-10 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-all shadow-lg active:scale-95">
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
              className="w-full max-w-2xl bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.1)] overflow-hidden border border-purple-50 flex flex-col"
            >
              {/* Header: Photo Section */}
              <div className="bg-[#F5F3FF] p-8 sm:p-12 text-center relative flex flex-col items-center">
                <Star className="absolute top-8 left-8 text-purple-200 animate-pulse" />
                <Rocket className="absolute top-12 right-12 text-purple-200 -rotate-45" />
                
                <div className="relative mb-8">
                  <div className="w-44 h-56 bg-white p-3 shadow-2xl rotate-3 rounded-2xl overflow-hidden">
                    <div className="w-full h-full bg-slate-100 rounded-xl overflow-hidden bg-[url('https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=500')] bg-cover bg-center" />
                  </div>
                  <div className="absolute -top-4 -right-6 w-16 h-16 bg-yellow-400 rounded-full border-4 border-white flex flex-col items-center justify-center shadow-lg -rotate-12">
                    <span className="text-xl font-black text-slate-800 leading-none">1st</span>
                    <span className="text-[8px] font-bold uppercase text-slate-700">Birthday</span>
                  </div>
                </div>

                <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-800 mb-3 tracking-tight">
                  Look who is turning <span className="text-purple-600">One</span>!
                </h1>
                <p className="text-slate-500 font-medium text-lg">Оливерын сансрын анхны тойрог замын баяр</p>
              </div>

              {/* Event Details Grid */}
              <div className="p-6 sm:p-10 flex flex-col gap-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-purple-50 pb-8">
                  <DetailItem icon={<Calendar className="text-purple-500" />} label="Хэзээ" val="1 сарын 18" sub="Ням гараг" />
                  <DetailItem icon={<Clock className="text-blue-500" />} label="Цаг" val="13:30 PM" sub="17:00 хүртэл" />
                  <DetailItem icon={<MapPin className="text-pink-500" />} label="Хаана" val="Sunny Garden" sub="123 Kids Lane" />
                </div>

                {/* Map Section */}
                <div className="w-full">
                  <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="group block relative h-44 rounded-3xl overflow-hidden border border-purple-100 shadow-inner">
                    <div className="absolute inset-0 bg-[url('https://www.google.com/maps/d/u/0/thumbnail?mid=1_f7Wn8L9R-0S8XG0E0v9z5-3Nf8')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700" />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="bg-white/90 backdrop-blur px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 shadow-xl group-hover:scale-110 transition-transform">
                        <Navigation size={16} className="text-purple-600 fill-purple-600" /> Газрын зураг харах
                      </span>
                    </div>
                  </a>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-purple-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-purple-200 hover:bg-purple-700 transition-all active:scale-95">
                    RSVP Now
                  </button>
                  <button className="flex-1 border-2 border-purple-100 text-purple-600 py-4 rounded-2xl font-bold text-lg hover:bg-purple-50 transition-all flex items-center justify-center gap-2 active:scale-95">
                    <Gift size={20} /> Бэлгийн жагсаалт
                  </button>
                </div>

                <footer className="text-center pt-2">
                  <p className="text-slate-400 text-sm">Hosted with love by <span className="font-bold text-slate-700">Sarah & Mike</span></p>
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
    <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-slate-50/50 border border-transparent hover:border-purple-100 transition-all">
      <div className="mb-3 p-2 bg-white rounded-xl shadow-sm">
        {icon}
      </div>
      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">{label}</p>
      <p className="text-lg font-bold text-slate-800 leading-none mb-1">{val}</p>
      <p className="text-xs text-slate-500">{sub}</p>
    </div>
  );
}