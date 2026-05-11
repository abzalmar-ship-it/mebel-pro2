import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, Upload, Info, Settings, History } from 'lucide-react';
import { MOCK_PRODUCTS, REVENUE_STATS } from '@/src/constants';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const ProductEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = MOCK_PRODUCTS.find(p => p.id === id) || MOCK_PRODUCTS[0];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Редактирование товара</h1>
            <p className="text-sm text-slate-500">ID: #{product.id}</p>
          </div>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-bold transition-all shadow-lg shadow-blue-100">
          <Save size={18} />
          Применить изменения
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Main Info */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-6">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <Info size={20} className="text-blue-500" />
              Основная информация
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Наименование</label>
                <input type="text" defaultValue={product.name} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Категория</label>
                <select defaultValue={product.category} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
                  <option>Диваны</option>
                  <option>Столы</option>
                  <option>Шкафы</option>
                  <option>Кресла</option>
                </select>
              </div>
            </div>
          </section>

          {/* Specs */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-6">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <Settings size={20} className="text-blue-500" />
              Характеристики
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Материал</label>
                <input type="text" defaultValue={product.material} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Цвет</label>
                <input type="text" defaultValue={product.color} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Размеры (мм)</label>
                <input type="text" defaultValue={product.dimensions} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
          </section>

          {/* Pricing & Stock */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <History size={20} className="text-blue-500" />
                Управление запасами и ценой
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Цена (тг)</label>
                  <input type="number" defaultValue={product.price} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 font-mono text-lg font-bold" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Остаток на складе</label>
                  <div className="flex items-center gap-4">
                    <input type="number" defaultValue={product.stock} className="w-24 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
                    <span className="text-sm text-slate-500">шт. (Минимальный порог: 5 шт.)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">История изменения цены</label>
                <div className="h-[150px] w-full bg-slate-50 rounded-xl p-2">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={REVENUE_STATS}>
                      <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-6">
            <h3 className="text-lg font-bold">Фотографии товара</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="aspect-square bg-slate-100 rounded-xl flex items-center justify-center border-2 border-dashed border-slate-200 group cursor-pointer hover:bg-slate-50 transition-colors">
                <div className="text-center">
                  <Upload className="mx-auto text-slate-400 group-hover:text-blue-500 transition-colors" size={24} />
                  <span className="text-[10px] text-slate-500 mt-1 block">Загрузить</span>
                </div>
              </div>
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-square bg-slate-100 rounded-xl overflow-hidden relative group">
                  <img src={`https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=200&h=200`} alt="Product" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="text-white p-2 hover:bg-white/20 rounded-full"><Save size={16} /></button>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 text-center">Форматы: JPG, PNG. До 5Мб.</p>
          </section>
        </div>
      </div>
    </div>
  );
};
