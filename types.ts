export interface Product {
  id: string;
  name: string;
  category: string;
  material: string;
  price: number;
  stock: number;
  color?: string;
  dimensions?: string;
}

export interface Order {
  id: string;
  date: string;
  customer: string;
  total: number;
  status: 'new' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
}

export interface User {
  id: string;
  name: string;
  login: string;
  role: 'Администратор' | 'Менеджер' | 'Кладовщик';
  status: 'Активен' | 'Заблокирован';
  lastSeen: string;
}

export interface SalesData {
  name: string;
  sales: number;
}
