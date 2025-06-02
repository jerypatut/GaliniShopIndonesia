import type { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
  sidebar?: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, sidebar }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Konten utama + sidebar */}
      <div className="flex flex-1">
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
        <aside className="w-full md:w-80 bg-white border-t md:border-t-0 md:border-l border-gray-200 p-4 overflow-auto">
          {sidebar}
        </aside>
      </div>

      {/* Footer di bawah */}
      {/* Footer harus dipanggil di luar MainLayout atau bisa diterima props footer */}
    </div>
  );
};

export default MainLayout;
