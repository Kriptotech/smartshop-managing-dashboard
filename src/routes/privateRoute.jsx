import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }) {
    var user = true;

    return user ? children : <Navigate to="/" />;
}
