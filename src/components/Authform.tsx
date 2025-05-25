'use client';

import React, { useState } from 'react';
import { login, register } from '@/services/authService';

interface ApiErrorResponse {
  response?: {
    data?: {
      message?: string;
    };
  };
}

// Type guard untuk validasi error API
function isApiError(error: unknown): error is ApiErrorResponse {
  if (typeof error !== 'object' || error === null) return false;

  const maybeResponse = (error as Record<string, unknown>)['response'];
  if (typeof maybeResponse !== 'object' || maybeResponse === null) return false;

  const maybeData = (maybeResponse as Record<string, unknown>)['data'];
  if (typeof maybeData !== 'object' || maybeData === null) return false;

  const maybeMessage = (maybeData as Record<string, unknown>)['message'];
  return typeof maybeMessage === 'string';
}



export default function AuthForm() {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [name, setName] = useState('');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (mode === 'login') {
        const data = await login(identifier, password);
        localStorage.setItem('accessToken', data.token);
        alert('Login successful!');
      } else {
        if (!name || !identifier || !password) {
          alert('Mohon lengkapi semua data');
          return;
        }
        await register(name, identifier, password);
        alert('Registration successful! Please login.');
        setMode('login');
      }

      setName('');
      setIdentifier('');
      setPassword('');
    } catch (error: unknown) {
      if (isApiError(error)) {
        alert(error.response?.data?.message ?? 'Something went wrong');
      } else if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('Something went wrong');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-6 text-center">
          {mode === 'login' ? 'Login' : 'Register'}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {mode === 'register' && (
            <div>
              <label className="block text-lg font-medium text-gray-700">Nama</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-2 p-3 border border-gray-300 rounded-md w-full"
              />
            </div>
          )}

          <div>
            <label className="block text-lg font-medium text-gray-700">Email / Nomor HP</label>
            <input
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              required
              className="mt-2 p-3 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-2 p-3 border border-gray-300 rounded-md w-full"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full ${
              mode === 'login' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700'
            } text-white py-3 rounded-md transition`}
          >
            {loading ? 'Loading...' : mode === 'login' ? 'Login' : 'Register'}
          </button>
        </form>

        <div className="text-center mt-4">
          {mode === 'login' ? (
            <>
              <span className="text-gray-600">Belum punya akun? </span>
              <button className="text-blue-600 underline" onClick={() => setMode('register')}>
                Daftar di sini
              </button>
            </>
          ) : (
            <>
              <span className="text-gray-600">Sudah punya akun? </span>
              <button className="text-blue-600 underline" onClick={() => setMode('login')}>
                Masuk di sini
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
