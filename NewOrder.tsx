import React, { useState } from 'react';
import { Search, Plus, Minus, X, CreditCard, Wallet, Truck } from 'lucide-react';
import { MOCK_PRODUCTS } from '@/src/constants';

export const NewOrder = () => {
  const [cart, setCart] = useState<{ id: string, name: string, price: number, qty: number }[]>([
    { id: '1', name: 'Диван "Орион"', price: 155000, qty: 1 }
  ]);

  const total = cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0);

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-slate-900">Создание нового заказа</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Client Info */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-6">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">1</span>
              Информация о клиенте
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Имя и Фамилия</label>
                <input type="text" placeholder="Укажите клиента" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Телефон</label>
                <input type="tel" placeholder="+7 (___) ___-__-__" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-medium text-slate-700">Адрес доставки</label>
                <textarea placeholder="Город, улица, дом, кв..." className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 h-20" />
              </div>
            </div>
          </section>

          {/* Furniture Selection */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-6">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">2</span>
              Выбор мебели
            </h3>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Поиск по наименованию или артикулу..." 
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex-1">
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-sm text-slate-500">{item.price.toLocaleString()} тг / шт.</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-slate-200 rounded-lg bg-white overflow-hidden">
                      <button className="p-2 hover:bg-slate-50 text-slate-500"><Minus size={14} /></button>
                      <span className="w-8 text-center text-sm font-medium">{item.qty}</span>
                      <button className="p-2 hover:bg-slate-50 text-slate-500"><Plus size={14} /></button>
                    </div>
                    <p className="w-24 text-right font-medium">{(item.price * item.qty).toLocaleString()} тг</p>
                    <button className="text-slate-400 hover:text-red-500 p-1"><X size={18} /></button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Calculation */}
        <div className="space-y-6">
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-6 sticky top-24">
            <h3 className="text-lg font-bold">Расчет стоимости</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between text-sm text-slate-600">
                <span>Промокод</span>
                <button className="text-blue-600 font-medium">Добавить</button>
              </div>
              
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Товары ({cart.length})</span>
                  <span>{total.toLocaleString()} тг</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Доставка</span>
                  <span className="text-emerald-600">Бесплатно</span>
                </div>
                <div className="flex justify-between text-xl font-bold pt-2">
                  <span>Итого</span>
                  <span className="text-blue-600">{total.toLocaleString()} тг</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium text-slate-700">Способ оплаты</p>
              <div className="grid grid-cols-2 gap-2">
                <button className="flex flex-col items-center gap-2 p-3 border-2 border-blue-500 rounded-xl bg-blue-50 text-blue-600">
                  <CreditCard size={20} />
                  <span className="text-xs font-semibold">Картой</span>
                </button>
                <button className="flex flex-col items-center gap-2 p-3 border border-slate-200 rounded-xl hover:bg-slate-50">
                  <Wallet size={20} className="text-slate-400" />
                  <span className="text-xs font-semibold text-slate-500">Наличные</span>
                </button>
              </div>
            </div>

            <button className="w-full bg-[#0F172A] text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200">
              Оформить заказ
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};
