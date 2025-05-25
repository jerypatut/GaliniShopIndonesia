// app/myaccount/page.tsx
'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import AuthForm from '@/components/Authform';
export default function MyAccountPage() {
    return (_jsx("main", { className: "min-h-screen flex items-center justify-center bg-gray-50", children: _jsx(AuthForm, {}) }));
}
