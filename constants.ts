import { Product, Order, User, SalesData } from './types';

export const MOCK_PRODUCTS: Product[] = [
  { id: '1', name: 'Диван "Орион"', category: 'Диваны', material: 'Велюр', price: 155000, stock: 12, color: 'Серый', dimensions: '210x90x85' },
  { id: '2', name: 'Стол обеденный "Лофт"', category: 'Столы', material: 'Дуб', price: 85000, stock: 25, color: 'Натуральный', dimensions: '160x80x75' },
  { id: '3', name: 'Шкаф-купе "Классик"', category: 'Шкафы', material: 'МДФ', price: 210000, stock: 5, color: 'Белый', dimensions: '180x60x220' },
  { id: '4', name: 'Кресло "Комфорт"', category: 'Кресла', material: 'Ткань', price: 45000, stock: 18, color: 'Бежевый', dimensions: '80x75x90' },
  { id: '5', name: 'Комод "Модерн"', category: 'Комоды', material: 'ЛДСП', price: 62000, stock: 30, color: 'Венге', dimensions: '120x45x85' },
];

export const MOCK_ORDERS: Order[] = [
  { id: 'ORD-001', date: '2024-05-10', customer: 'Иван Иванов', total: 155000, status: 'new' },
  { id: 'ORD-002', date: '2024-05-10', customer: 'Мария Петрова', total: 85000, status: 'processing' },
  { id: 'ORD-003', date: '2024-05-09', customer: 'Сергей Смирнов', total: 210000, status: 'shipped' },
  { id: 'ORD-004', date: '2024-05-09', customer: 'Анна Кузнецова', total: 45000, status: 'delivered' },
  { id: 'ORD-005', date: '2024-05-08', customer: 'Алексей Попов', total: 124000, status: 'cancelled' },
];

export const MOCK_USERS: User[] = [
  { id: '1', name: 'Айна С.', login: 'aina_s', role: 'Менеджер', status: 'Активен', lastSeen: 'Сегодня, 10:15' },
  { id: '2', name: 'Дмитрий В.', login: 'admin_d', role: 'Администратор', status: 'Активен', lastSeen: 'Вчера, 18:30' },
  { id: '3', name: 'Олег К.', login: 'sklad_oleg', role: 'Кладовщик', status: 'Активен', lastSeen: 'Сегодня, 08:00' },
  { id: '4', name: 'Елена М.', login: 'elena_m', role: 'Менеджер', status: 'Заблокирован', lastSeen: '12.04.2024' },
];

export const TOP_SALES: SalesData[] = [
  { name: 'Диваны', sales: 45 },
  { name: 'Столы', sales: 30 },
  { name: 'Шкафы', sales: 25 },
  { name: 'Кресла', sales: 20 },
  { name: 'Комоды', sales: 15 },
];

export const REVENUE_STATS = [
  { name: 'Янв', value: 1.2 },
  { name: 'Фев', value: 1.8 },
  { name: 'Мар', value: 2.2 },
  { name: 'Апр', value: 2.5 },
  { name: 'Май', value: 2.7 },
];
