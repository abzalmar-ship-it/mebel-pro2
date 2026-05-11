import React from 'react';
import { DollarSign, ShoppingCart, Target, Star, MoreVertical } from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Legend 
} from 'recharts';
import { TOP_SALES, REVENUE_STATS, MOCK_ORDERS } from '@/src/constants';
import { cn } from '@/src/lib/utils';

const StatCard = ({ label, value, sub, icon: Icon, color }: { label: string, value: string, sub: string, icon: any, color: string }) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-2">
    <div className="flex justify-between items-start">
      <div className={cn("p-2 rounded-lg", color)}>
        <Icon className="text-white" size={20} />
      </div>
      <button className="text-slate-400 hover:text-slate-600"><MoreVertical size={16} /></button>
    </div>
    <p className="text-slate-500 text-sm font-medium">{label}</p>
    <div className="flex items-end gap-2">
      <h3 className="text-2xl font-bold text-slate-900">{value}</h3>
      <p className="text-xs text-emerald-600 mb-1">{sub}</p>
    </div>
  </div>
);

export const Reports = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-slate-900">Аналитика и отчеты</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard label="Прибыль за месяц" value="8.4 млн. тг" sub="+12%" icon={DollarSign} color="bg-blue-600" />
        <StatCard label="Количество заказов" value="452" sub="+5%" icon={ShoppingCart} color="bg-indigo-600" />
        <StatCard label="Средний чек" value="185,000 тг" sub="+2%" icon={Target} color="bg-amber-600" />
        <StatCard label="Топ товар" value="Диван 'Орион'" sub="120 шт" icon={Star} color="bg-emerald-600" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h4 className="text-lg font-bold mb-6">График продаж мебели</h4>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={TOP_SALES}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" fontSize={12} />
                <YAxis fontSize={12} />
                <Tooltip />
                <Bar dataKey="sales" fill="#4F46E5" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h4 className="text-lg font-bold mb-6">Динамика заказов</h4>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={REVENUE_STATS}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" fontSize={12} />
                <YAxis fontSize={12} />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>
      </div>

      <section className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h4 className="text-lg font-bold">Последние транзакции</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-xs uppercase text-slate-500 bg-slate-50">
                <th className="px-6 py-4 font-semibold">Дата</th>
                <th className="px-6 py-4 font-semibold">Транзакция</th>
                <th className="px-6 py-4 font-semibold">Тип</th>
                <th className="px-6 py-4 font-semibold">Сумма</th>
                <th className="px-6 py-4 font-semibold">Статус</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_ORDERS.slice(0, 5).map((order) => (
                <tr key={order.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-slate-500">{order.date}</td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium">Оплата заказа {order.id}</p>
                    <p className="text-xs text-slate-400">{order.customer}</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">Доход</td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-900">+{order.total.toLocaleString()} тг</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-md text-[10px] font-bold uppercase">Завершено</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
