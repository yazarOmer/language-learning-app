import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import Learn from "./pages/Learn.jsx";
import Admin from "./pages/admin/admin.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Practice from "./pages/Practice.jsx";
import Leaderboard from "./pages/Leaderboard.jsx";
import Shop from "./pages/Shop.jsx";
import Profile from "./pages/Profile.jsx";
import Sections from "./pages/Sections.jsx";
import AddSection from "./pages/admin/AddSection.jsx";
import AddUnit from "./pages/admin/AddUnit.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    <Route path="" element={<PrivateRoute />}>
                        <Route path="/learn" element={<Learn />} />
                        <Route path="/admin" element={<Admin />} />
                        <Route path="/practice" element={<Practice />} />
                        <Route path="/leaderboard" element={<Leaderboard />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/profile/:id" element={<Profile />} />
                        <Route path="/sections" element={<Sections />} />
                        <Route path="/admin/section" element={<AddSection />} />
                        <Route path="/admin/unit" element={<AddUnit />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
