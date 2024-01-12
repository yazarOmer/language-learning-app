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
import Lesson from "./pages/Lesson.jsx";

import Profile from "./pages/Profile.jsx";
import Sections from "./pages/Sections.jsx";
import AddSection from "./pages/admin/AddSection.jsx";
import AddUnit from "./pages/admin/AddUnit.jsx";
import AddQuiz from "./pages/admin/AddQuiz.jsx";
import Guide from "./pages/Guide.jsx";
import AddQuestion from "./pages/admin/AddQuestion.jsx";
import AdminRoute from "./components/AdminRoute.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    <Route path="" exact element={<PrivateRoute />}>
                        <Route path="/learn" element={<Learn />} />
                        <Route path="/admin" element={<Admin />} />
                        <Route path="/practice" element={<Practice />} />
                        <Route path="/leaderboard" element={<Leaderboard />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/profile/:id" element={<Profile />} />
                        <Route path="/sections" element={<Sections />} />
                        <Route path="/guide/:id" element={<Guide />} />
                    </Route>

                    <Route path="/admin" element={<AdminRoute />}>
                        <Route path="/admin/section" element={<AddSection />} />
                        <Route path="/admin/unit" element={<AddUnit />} />
                        <Route path="/admin/quiz" element={<AddQuiz />} />
                        <Route
                            path="/admin/question"
                            element={<AddQuestion />}
                        />
                    </Route>
                    <Route path={`/lesson/:id`} element={<Lesson />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
