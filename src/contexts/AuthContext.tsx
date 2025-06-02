import React, { useState, useEffect, createContext, useContext,} from "react";

interface User {
  id: string;
  email: string;
  role: string; // misalnya: "admin", "user"
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulasi loading user dari localStorage/token API
    const fetchUser = async () => {
      const savedUser = localStorage.getItem("user");
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  const login = async (email: string, password: string) => {
    if (!password) throw new Error("Password wajib diisi");

    // Simulasi validasi sederhana
    if (email === "admin@example.com" && password === "admin123") {
      const fakeUser = {
        id: "123",
        email,
        role: "admin",
      };
      localStorage.setItem("user", JSON.stringify(fakeUser));
      setUser(fakeUser);
    } else {
      // User biasa
      const fakeUser = {
        id: "456",
        email,
        role: "user",
      };
      localStorage.setItem("user", JSON.stringify(fakeUser));
      setUser(fakeUser);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
