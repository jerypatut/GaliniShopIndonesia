import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
const RequireAdmin = ({ children }) => {
    const { user, loading } = useAuth(); // pastikan loading & user ada
    if (loading)
        return _jsx("p", { children: "Loading..." });
    if (!user || user.role !== "admin")
        return _jsx(Navigate, { to: "/login" });
    return _jsx(_Fragment, { children: children }); // atau return children;
};
export default RequireAdmin;
