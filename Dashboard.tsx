import React from 'react';
import { ShoppingBag, TrendingUp, Package, Truck, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line 
} from 'recharts';
import { MOCK_ORDERS, TOP_SALES } from '@/src/constants';
import { cn } from '@/src/lib/utils';

const KPICard = ({ title, value, icon: Icon, color }: { title: string, value: string, icon: any, color: string }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
    <div className={cn("p-3 rounded-xl", color)}>
      <Icon className="text-white" size={24} />
    </div>
    <div>
      <p className="text-sm text-slate-500 font-medium">{title}</p>
      <h3 className="text-2xl font-bold text-slate-900">{value}</h3>
    </div>
  </div>
);

const STATUS_MAP = {
  new: { label: 'Новый', class: 'bg-green-100 text-green-700' },
  processing: { label: 'В работе', class: 'bg-blue-100 text-blue-700' },
  shipped: { label: 'Отгружен', class: 'bg-indigo-100 text-indigo-700' },
  delivered: { label: 'Доставлен', class: 'bg-slate-100 text-slate-700' },
  cancelled: { label: 'Отменен', class: 'bg-red-100 text-red-700' },
};

export const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Главная панель</h1>
          <p className="text-sm text-slate-500">Добро пожаловать обратно, Айна!</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate('/orders/new')}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all shadow-sm"
          >
            <ShoppingBag size={18} />
            Новый заказ
          </button>
          <div className="flex items-center gap-2 text-sm text-slate-500 bg-white px-4 py-2 rounded-lg border border-slate-200">
            <Calendar size={16} />
            <span>Май 2024</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard title="Заказы сегодня" value="15" icon={ShoppingBag} color="bg-blue-600" />
        <KPICard title="Выручка за месяц" value="2.5 млн. тг" icon={TrendingUp} color="bg-emerald-600" />
        <KPICard title="Товары на складе" value="1250" icon={Package} color="bg-amber-600" />
        <KPICard title="Отгрузки сегодня" value="8" icon={Truck} color="bg-indigo-600" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-bold mb-6">Топ продаж мебели</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={TOP_SALES}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip />
                <Bar dataKey="sales" fill="#3B82F6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-bold mb-6">Статус последних заказов</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-xs uppercase text-slate-500 border-b border-slate-100">
                  <th className="pb-4 font-semibold">Дата</th>
                  <th className="pb-4 font-semibold">Заказчик</th>
                  <th className="pb-4 font-semibold">Сумма</th>
                  <th className="pb-4 font-semibold">Статус</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {MOCK_ORDERS.map((order) => (
                  <tr key={order.id}>
                    <td className="py-4 text-sm">{order.date}</td>
                    <td className="py-4 text-sm font-medium">{order.customer}</td>
                    <td className="py-4 text-sm">{order.total.toLocaleString()} тг</td>
                    <td className="py-4">
                      <span className={cn("px-2.5 py-1 rounded-full text-xs font-medium", STATUS_MAP[order.status].class)}>
                        {STATUS_MAP[order.status].label}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
