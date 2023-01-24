import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PrivateRoute } from "./privateRoute";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { ChangeMediaTax } from "../pages/ChangeMediaTax";
import { ChangeFastTax } from "../pages/ChangeFastTax";

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
                    <Route
                        path="/change_media_tax"
                        element={
                            <PrivateRoute>
                                <ChangeMediaTax />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/change_fast_tax"
                        element={
                            <PrivateRoute>
                                <ChangeFastTax />
                            </PrivateRoute>
                        }
                    />
                    <Route path="/" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
