import React, { useState } from 'react';
import { User, Lock, ArrowRight, Sofa, Archive } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

export const AuthPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-white rounded-2xl shadow-xl shadow-slate-200 overflow-hidden"
      >
        <div className="p-8 text-center pt-12">
          <div className="inline-flex items-center gap-2 justify-center text-blue-600 mb-6">
            <Sofa size={48} />
            <Archive size={32} className="mt-4" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">MebelPro ERP v2.0</h1>
          <p className="text-slate-500">Авторизация в системе</p>
        </div>

        <form onSubmit={handleLogin} className="p-8 pt-0 space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-3 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Логин" 
                required
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-slate-400" size={20} />
              <input 
                type="password" 
                placeholder="Пароль" 
                required
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-[#0F172A] hover:bg-slate-800 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-all group disabled:opacity-70"
          >
            {loading ? 'Вход...' : 'Войти'}
            {!loading && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
          </button>

          <div className="text-center">
            <a href="#" className="text-sm text-blue-600 hover:underline">Забыли пароль?</a>
          </div>
        </form>
      </motion.div>
    </div>
  );
};
