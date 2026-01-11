"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import type { User } from "./types";

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (phone: string, code: string) => Promise<boolean>;
  logout: () => void;
  sendCode: (phone: string) => Promise<boolean>;
  updateProfile: (data: Partial<User>) => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Загрузка пользователя из localStorage при монтировании
  useEffect(() => {
    const savedUser = localStorage.getItem("i-peptides-user");
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      // Конвертируем строки дат обратно в Date objects
      parsedUser.createdAt = new Date(parsedUser.createdAt);
      parsedUser.lastLogin = new Date(parsedUser.lastLogin);
      setUser(parsedUser);
      setIsAuthenticated(true);
    }
  }, []);

  // Отправка SMS кода (mock версия)
  const sendCode = async (phone: string): Promise<boolean> => {
    // Mock: В реальности здесь будет API запрос на отправку SMS
    console.log(`[MOCK] Отправлен код на номер: ${phone}`);
    console.log(`[MOCK] Код для входа: 1234`);

    // Симулируем задержку отправки SMS
    await new Promise(resolve => setTimeout(resolve, 1000));

    return true;
  };

  // Вход/регистрация по номеру телефона и коду
  const login = async (phone: string, code: string): Promise<boolean> => {
    // Mock: В реальности проверяем код на backend
    if (code !== "1234") {
      return false;
    }

    // Проверяем существует ли пользователь
    const usersData = localStorage.getItem("i-peptides-users");
    let users: User[] = usersData ? JSON.parse(usersData) : [];

    let existingUser = users.find(u => u.phone === phone);

    if (existingUser) {
      // Обновляем lastLogin
      existingUser.lastLogin = new Date();
      localStorage.setItem("i-peptides-users", JSON.stringify(users));
      setUser(existingUser);
    } else {
      // Создаем нового пользователя
      const newUser: User = {
        id: `user_${Date.now()}`,
        phone,
        name: `Пользователь ${phone.slice(-4)}`,
        createdAt: new Date(),
        lastLogin: new Date(),
      };

      users.push(newUser);
      localStorage.setItem("i-peptides-users", JSON.stringify(users));
      setUser(newUser);
    }

    setIsAuthenticated(true);

    // Сохраняем текущего пользователя
    const currentUser = existingUser || users[users.length - 1];
    localStorage.setItem("i-peptides-user", JSON.stringify(currentUser));

    return true;
  };

  // Выход из аккаунта
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("i-peptides-user");
  };

  // Обновление профиля
  const updateProfile = (data: Partial<User>) => {
    if (!user) return;

    const updatedUser = { ...user, ...data };
    setUser(updatedUser);
    localStorage.setItem("i-peptides-user", JSON.stringify(updatedUser));

    // Обновляем в общем списке пользователей
    const usersData = localStorage.getItem("i-peptides-users");
    if (usersData) {
      let users: User[] = JSON.parse(usersData);
      const index = users.findIndex(u => u.id === user.id);
      if (index !== -1) {
        users[index] = updatedUser;
        localStorage.setItem("i-peptides-users", JSON.stringify(users));
      }
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout, sendCode, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
