import React from 'react';
import { Plus, Filter, Search, Edit2, Trash2 } from 'lucide-react';
import { MOCK_PRODUCTS } from '@/src/constants';
import { useNavigate } from 'react-router-dom';

export const Catalog = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-slate-900">Каталог мебели на складе</h1>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium">
            <Plus size={18} />
            Добавить товар
          </button>
          <button className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium text-slate-600">
            <Filter size={18} />
            Фильтр
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center gap-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Поиск по каталогу..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr className="text-left text-xs uppercase text-slate-500">
                <th className="px-6 py-4 font-semibold">ID</th>
                <th className="px-6 py-4 font-semibold">Наименование</th>
                <th className="px-6 py-4 font-semibold">Категория</th>
                <th className="px-6 py-4 font-semibold">Материал</th>
                <th className="px-6 py-4 font-semibold">Цена (тг)</th>
                <th className="px-6 py-4 font-semibold">Остаток</th>
                <th className="px-6 py-4 font-semibold text-right">Действия</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_PRODUCTS.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-6 py-4 text-sm text-slate-500 font-mono">#{item.id}</td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-slate-900">{item.name}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">{item.category}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{item.material}</td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">
                    {item.price.toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-sm font-medium ${item.stock < 10 ? 'text-red-500' : 'text-slate-900'}`}>
                      {item.stock} шт.
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button 
                        onClick={() => navigate(`/catalog/edit/${item.id}`)}
                        className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-slate-100 flex items-center justify-between">
          <p className="text-sm text-slate-500">Показано 1-5 из 24 товаров</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-slate-200 rounded-md text-sm disabled:opacity-50" disabled>Назад</button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm">Вперед</button>
          </div>
        </div>
      </div>
    </div>
  );
};
