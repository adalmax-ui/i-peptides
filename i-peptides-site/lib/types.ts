export type Product = {
  id: string;
  slug: string;
  title: string;
  short: string;
  description?: string; // полное описание товара
  benefits?: string[]; // короткие преимущества (3-4 штуки)
  priceCents: number;
  currency: "EUR" | "USD" | "RUB";
  image: string;
  category: string;
  peptideSlug?: string; // optional link into the database
  tags: string[];
  inStock: boolean;
  rating?: number; // рейтинг от 1 до 5
  discount?: number; // процент скидки (0-100)
};

export type Peptide = {
  id: string;
  slug: string;
  name: string;
  aka: string[];
  category: string;
  summary: string;
  researchStatus: "Preclinical" | "Early clinical" | "Clinical" | "Approved drug (context-specific)";
  keyPoints: string[];
  safetyNotes: string[];
  mechanismOfAction?: string; // подробное описание механизма действия
  applications?: string[]; // области применения
  researchHistory?: string; // история и контекст исследований
};

export type User = {
  id: string;
  phone: string;
  name: string;
  email?: string;
  createdAt: Date;
  lastLogin: Date;
};

export type OrderStatus = "pending" | "confirmed" | "processing" | "shipped" | "delivered" | "cancelled";

export type OrderItem = {
  productId: string;
  productTitle: string;
  productImage: string;
  quantity: number;
  priceCents: number;
  currency: string;
};

export type Order = {
  id: string;
  userId: string;
  items: OrderItem[];
  totalCents: number;
  currency: string;
  status: OrderStatus;
  createdAt: Date;
  updatedAt: Date;
  deliveryAddress?: string;
  trackingNumber?: string;
};

export type MedicalTest = {
  id: string;
  userId: string;
  name: string; // название анализа
  fileUrl: string; // URL загруженного файла
  uploadedAt: Date;
  notes?: string; // комментарии пользователя
  consultantViewed: boolean; // просмотрен ли врачом
  consultantNotes?: string; // заметки врача-консультанта
};
