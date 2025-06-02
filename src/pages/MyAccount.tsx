// app/myaccount/page.tsx
'use client';

import AuthForm from '@/components/Authform';

export default function MyAccountPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <AuthForm/>
    </main>
  );
}
