import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect, createContext, useContext, } from "react";
const AuthContext = createContext(undefined);
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
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
    const login = async (email, password) => {
        if (!password)
            throw new Error("Password wajib diisi");
        // Simulasi validasi sederhana
        if (email === "admin@example.com" && password === "admin123") {
            const fakeUser = {
                id: "123",
                email,
                role: "admin",
            };
            localStorage.setItem("user", JSON.stringify(fakeUser));
            setUser(fakeUser);
        }
        else {
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
    return (_jsx(AuthContext.Provider, { value: { user, loading, login, logout }, children: children }));
};
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
