'use client';
import { FormEvent, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

export default function LoginForm() {
  const router = useRouter();

  const [loginData, setLoginData] = useState({
    identifier: '',
    password: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await signIn('credentials', {
      email: loginData.identifier,
      password: loginData.password,
      redirect: false,
    });
    console.log(res);
  };

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
              onChange={(e) =>
                setLoginData({
                  ...loginData,
                  identifier: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="пароль"
              className="w-full p-2 border rounded"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({
                  ...loginData,
                  password: e.target.value,
                })
              }
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

// TODO: minimize this file
