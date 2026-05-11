import React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  Warehouse, 
  ShoppingCart, 
  Users, 
  BarChart3, 
  LogOut, 
  Settings,
  Search,
  Bell,
  HelpCircle,
  Menu,
  Sofa,
  Archive
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion } from 'motion/react';

const MENU_ITEMS = [
  { path: '/dashboard', label: 'Панель управления', icon: LayoutDashboard },
  { path: '/catalog', label: 'Каталог мебели', icon: Package },
  { path: '/stock', label: 'Склад', icon: Warehouse },
  { path: '/orders', label: 'Заказы', icon: ShoppingCart },
  { path: '/clients', label: 'Клиенты', icon: Users },
  { path: '/reports', label: 'Отчеты', icon: BarChart3 },
  { path: '/users', label: 'Пользователи', icon: Users },
];

export const Sidebar = () => {
  return (
    <div className="w-64 bg-[#0F172A] text-white flex flex-col h-screen fixed left-0 top-0 z-40">
      <div className="p-6 flex items-center gap-2">
        <div className="flex items-center gap-1 text-blue-400">
          <Sofa size={28} />
          <Archive size={20} className="mt-2" />
        </div>
        <span className="text-xl font-bold tracking-tight">MebelPro</span>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        {MENU_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors group",
                isActive 
                  ? "bg-blue-600 text-white" 
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              )
            }
          >
            <item.icon size={20} />
            <span className="text-sm font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center gap-3 px-2 py-3">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold">
            АС
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">Айна С.</p>
            <p className="text-xs text-slate-400 truncate">Менеджер</p>
          </div>
          <button className="text-slate-400 hover:text-white">
            <Settings size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export const Header = () => {
  const location = useLocation();
  const getTitle = () => {
    const item = MENU_ITEMS.find(i => i.path === location.pathname);
    return item?.label || 'MebelPro ERP';
  };

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-30">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Поиск по заказам, товарам..." 
            className="w-full pl-10 pr-4 py-2 bg-slate-100 border-transparent rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4 font-sans">
        <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full relative">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full">
          <HelpCircle size={20} />
        </button>
        <div className="h-8 w-px bg-slate-200 mx-2"></div>
        <div className="flex items-center gap-3 cursor-pointer hover:bg-slate-50 p-1 rounded-lg transition-colors">
          <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center overflow-hidden">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aina" alt="Avatar" />
          </div>
        </div>
      </div>
    </header>
  );
};

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Sidebar />
      <div className="pl-64">
        <Header />
        <main className="p-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
};
