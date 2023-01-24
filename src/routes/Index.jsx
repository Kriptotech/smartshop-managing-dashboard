import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PrivateRoute } from "./privateRoute";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";

export function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/dashboard"
                        element={
                            <PrivateRoute>
                                <Dashboard />
                            </PrivateRoute>
                        }
                    />
                    <Route path="/" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
