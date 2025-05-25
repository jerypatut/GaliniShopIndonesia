'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { login, register } from '@/services/authService';
// Type guard untuk validasi error API
function isApiError(error) {
    if (typeof error !== 'object' || error === null)
        return false;
    const maybeResponse = error['response'];
    if (typeof maybeResponse !== 'object' || maybeResponse === null)
        return false;
    const maybeData = maybeResponse['data'];
    if (typeof maybeData !== 'object' || maybeData === null)
        return false;
    const maybeMessage = maybeData['message'];
    return typeof maybeMessage === 'string';
}
export default function AuthForm() {
    const [mode, setMode] = useState('login');
    const [name, setName] = useState('');
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (mode === 'login') {
                const data = await login(identifier, password);
                localStorage.setItem('accessToken', data.token);
                alert('Login successful!');
            }
            else {
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
        }
        catch (error) {
            if (isApiError(error)) {
                alert(error.response?.data?.message ?? 'Something went wrong');
            }
            else if (error instanceof Error) {
                alert(error.message);
            }
            else {
                alert('Something went wrong');
            }
        }
        finally {
            setLoading(false);
        }
    };
    return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-100 p-4", children: _jsxs("div", { className: "w-full max-w-md bg-white p-8 rounded-lg shadow-lg", children: [_jsx("h1", { className: "text-2xl font-semibold mb-6 text-center", children: mode === 'login' ? 'Login' : 'Register' }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [mode === 'register' && (_jsxs("div", { children: [_jsx("label", { className: "block text-lg font-medium text-gray-700", children: "Nama" }), _jsx("input", { type: "text", value: name, onChange: (e) => setName(e.target.value), required: true, className: "mt-2 p-3 border border-gray-300 rounded-md w-full" })] })), _jsxs("div", { children: [_jsx("label", { className: "block text-lg font-medium text-gray-700", children: "Email / Nomor HP" }), _jsx("input", { type: "text", value: identifier, onChange: (e) => setIdentifier(e.target.value), required: true, className: "mt-2 p-3 border border-gray-300 rounded-md w-full" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-lg font-medium text-gray-700", children: "Password" }), _jsx("input", { type: "password", value: password, onChange: (e) => setPassword(e.target.value), required: true, className: "mt-2 p-3 border border-gray-300 rounded-md w-full" })] }), _jsx("button", { type: "submit", disabled: loading, className: `w-full ${mode === 'login' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700'} text-white py-3 rounded-md transition`, children: loading ? 'Loading...' : mode === 'login' ? 'Login' : 'Register' })] }), _jsx("div", { className: "text-center mt-4", children: mode === 'login' ? (_jsxs(_Fragment, { children: [_jsx("span", { className: "text-gray-600", children: "Belum punya akun? " }), _jsx("button", { className: "text-blue-600 underline", onClick: () => setMode('register'), children: "Daftar di sini" })] })) : (_jsxs(_Fragment, { children: [_jsx("span", { className: "text-gray-600", children: "Sudah punya akun? " }), _jsx("button", { className: "text-blue-600 underline", onClick: () => setMode('login'), children: "Masuk di sini" })] })) })] }) }));
}
