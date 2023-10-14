'use client';
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

interface ILoginData {
  identifier: string;
  password: string;
}

export default function Page(): React.JSX.Element {
  const router = useRouter();

  const [loginData, setLoginData] = useState<ILoginData>({
    identifier: '',
    password: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await signIn('Credentials', {
      email: loginData.identifier,
      password: loginData.password,
    });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setLoginData({...loginData, [name]: value});
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-[550px]">
        <h2 className="text-2xl font-semibold mb-4">Вход</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="логин"
              className="w-full p-2 border rounded"
              value={loginData.identifier}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="пароль"
              className="w-full p-2 border rounded"
              value={loginData.password}
              onChange={handleInputChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}
