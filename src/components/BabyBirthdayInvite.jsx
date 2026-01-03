import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Star, MapPin, Calendar, Clock, Gift, Moon, Heart, MailOpen, Navigation } from 'lucide-react';

export default function BabyBirthdayInvite() {
  const [isOpened, setIsOpened] = useState(false);

  // Сансрын элементүүд (одууд)
  const stars = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5
  }));

  return (
    <div className="min-h-screen bg-[#0a0a14] font-['Plus_Jakarta_Sans',_sans-serif] text-slate-200 overflow-hidden relative selection:bg-purple-500/30">
      
      {/* Background Animations */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-white rounded-full opacity-30"
            style={{
              width: star.size,
              height: star.size,
              top: star.top,
              left: star.left,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
      </div>

      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
        <AnimatePresence mode="wait">
          {!isOpened ? (
            /* --- ENVELOPE VIEW (UNOPENED) --- */
            <motion.div
              key="envelope"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateY: 90 }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[450px] group cursor-pointer"
              onClick={() => setIsOpened(true)}
            >
              {/* Envelope Shadow */}
              <div className="absolute -bottom-6 left-10 right-10 h-6 bg-black/40 blur-xl rounded-[100%] transition-opacity group-hover:opacity-100 opacity-60" />
              
              <div className="relative bg-[#1a1a2e] border border-white/10 rounded-2xl shadow-2xl overflow-hidden aspect-[4/3] flex flex-col items-center justify-center p-8 transition-transform duration-500 group-hover:-translate-y-2">
                {/* Texture */}
                <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
                
                {/* Top Flap (Static Design) */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-[#252545] clip-path-polygon-[0%_0%,100%_0%,50%_100%] z-20 shadow-md" 
                     style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }} />
                
                {/* Seal Button */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-20 h-20 bg-gradient-to-tr from-yellow-400 to-orange-500 rounded-full border-4 border-[#1a1a2e] shadow-xl flex items-center justify-center text-white"
                  >
                    <Moon fill="currentColor" className="w-10 h-10" />
                  </motion.div>
                </div>

                {/* Text Content */}
                <div className="mt-auto text-center space-y-3 z-10">
                  <p className="text-yellow-400 font-bold text-xs uppercase tracking-[0.3em]">Special Space Delivery</p>
                  <h2 className="text-4xl font-['Caveat',_cursive] text-white">The Smith Family</h2>
                  <p className="text-slate-400 text-sm max-w-[220px] mx-auto">
                    Таныг сансрын нэгэн онцгой адал явдалд урьж байна...
                  </p>
                  <div className="pt-4">
                    <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-full font-bold transition-all shadow-lg shadow-purple-500/20">
                      <MailOpen size={18} />
                      Нээж үзэх
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            /* --- INVITATION VIEW (OPENED) --- */
            <motion.div
              key="invitation"
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="w-full max-w-3xl bg-[#16162a] rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden relative"
            >
              {/* Header Visuals */}
              <div className="relative h-64 sm:h-80 bg-[#1e1e38] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute top-6 right-6 z-20 rotate-12">
                   <div className="w-20 h-20 rounded-full bg-yellow-400 flex flex-col items-center justify-center text-slate-900 border-4 border-white shadow-2xl">
                      <span className="text-3xl font-black">1st</span>
                      <span className="text-[10px] font-bold uppercase tracking-tighter">B-Day</span>
                   </div>
                </div>

                {/* Photo Placeholders with Depth */}
                <div className="relative flex items-center justify-center gap-4 w-full px-10">
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-32 h-44 bg-white/5 border border-white/10 p-2 rounded-2xl rotate-[-6deg] hidden sm:block shadow-xl backdrop-blur-md"
                  >
                    <div className="w-full h-full bg-slate-800 rounded-xl flex items-center justify-center">
                       <Star className="text-white/20" size={40} />
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    animate={{ y: [-10, 0, -10] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-48 h-64 bg-white p-3 rounded-2xl shadow-2xl z-10 relative"
                  >
                    <div className="w-full h-full bg-slate-200 rounded-xl flex items-center justify-center overflow-hidden bg-[url('https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80')] bg-cover bg-center">
                       {!isOpened && <Rocket className="text-purple-600" size={60} />}
                    </div>
                  </motion.div>

                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="w-32 h-44 bg-white/5 border border-white/10 p-2 rounded-2xl rotate-[6deg] hidden sm:block shadow-xl backdrop-blur-md"
                  >
                    <div className="w-full h-full bg-slate-800 rounded-xl flex items-center justify-center">
                       <Heart className="text-white/20" size={40} />
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Main Content */}
              <div className="p-8 sm:p-12 text-center bg-[#16162a]">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-widest mb-6">
                    <Rocket size={14} />
                    You're Invited
                  </div>
                  
                  <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-4 tracking-tight">
                    Б.Тэнүүнгүн <span className="text-yellow-400">1</span> нас!
                  </h1>
                  
                  <p className="text-slate-400 text-lg max-w-lg mx-auto leading-relaxed mb-10 font-medium">
                    Манай бяцхан сансрын нисгэгчийн анхны тойрог замаа дуусгаж буй баярт таныг урьж байна. Бөмбөлөг, бялуу, гайхалтай дурсамжууд хүлээж байна!
                  </p>
                </motion.div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-10 border-y border-white/5 mb-10">
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 mx-auto">
                      <Calendar size={24} />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Огноо</h3>
                      <p className="text-lg font-bold text-white">1 сарын 18</p>
                      <p className="text-sm text-slate-400">Ням гараг, 2026</p>
                    </div>
                  </div>

                  <div className="space-y-3 sm:border-x border-white/5">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mx-auto">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Цаг</h3>
                      <p className="text-lg font-bold text-white">13:30 PM</p>
                      <p className="text-sm text-slate-400">17:00 хүртэл</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-400 mx-auto">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Хаана</h3>
                      <p className="text-lg font-bold text-white">Sunny Kids Cafe</p>
                      <p className="text-sm text-slate-400">Улаанбаатар хот</p>
                    </div>
                  </div>
                </div>

                {/* Call to Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-purple-600 hover:bg-purple-500 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-purple-900/20 transition-all flex items-center justify-center gap-2"
                  >
                    <Heart size={20} fill="currentColor" />
                    RSVP Хийх
                  </motion.button>
                  
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Navigation size={20} />
                    Байршил харах
                  </motion.button>
                </div>

                {/* Footer Info */}
                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col items-center gap-2">
                  <p className="text-slate-500 text-sm">Урилгатай холбоотой асуулт байвал:</p>
                  <p className="text-white font-bold">Болдсүх & Анхцэцэг</p>
                  <p className="text-purple-400 font-mono text-sm tracking-tighter">9911-XXXX, 8811-XXXX</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Brand Footer */}
        <div className="mt-8 opacity-40 flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase">
          <div className="w-1 h-1 rounded-full bg-yellow-400" />
          Powered by TinyCelebrations
          <div className="w-1 h-1 rounded-full bg-yellow-400" />
        </div>
      </main>
    </div>
  );
}