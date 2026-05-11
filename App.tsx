/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './layouts/Layout';
import { AuthPage } from './pages/AuthPage';
import { Dashboard } from './pages/Dashboard';
import { Catalog } from './pages/Catalog';
import { ProductEdit } from './pages/ProductEdit';
import { NewOrder } from './pages/NewOrder';
import { Reports } from './pages/Reports';
import { UsersList } from './pages/UsersList';

// Placeholder components for remaining routes
const Placeholder = ({ title }: { title: string }) => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-slate-400">
    <h2 className="text-xl font-bold">{title}</h2>
    <p>Раздел находится в разработке</p>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        
        <Route path="/" element={<MainLayout><Dashboard /></MainLayout>} />
        <Route path="/dashboard" element={<MainLayout><Dashboard /></MainLayout>} />
        
        <Route path="/catalog" element={<MainLayout><Catalog /></MainLayout>} />
        <Route path="/catalog/edit/:id" element={<MainLayout><ProductEdit /></MainLayout>} />
        
        <Route path="/stock" element={<MainLayout><Catalog /></MainLayout>} />
        
        <Route path="/orders" element={<MainLayout><Placeholder title="Заказы" /></MainLayout>} />
        <Route path="/orders/new" element={<MainLayout><NewOrder /></MainLayout>} />
        
        <Route path="/clients" element={<MainLayout><Placeholder title="Клиенты" /></MainLayout>} />
        <Route path="/reports" element={<MainLayout><Reports /></MainLayout>} />
        <Route path="/users" element={<MainLayout><UsersList /></MainLayout>} />
        
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

