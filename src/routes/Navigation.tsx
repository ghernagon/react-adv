import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom";

import {
  FormikAbstract,
  FormikBasicPage,
  FormikComponents,
  FormikYupPage,
  RegisterPage,
} from "../03-forms/pages/";

import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) => (isActive ? "nav-active" : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? "nav-active" : undefined)}
              >
                Register Page
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-basic"
                className={({ isActive }) => (isActive ? "nav-active" : undefined)}
              >
                Formik Basic Page
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-yup"
                className={({ isActive }) => (isActive ? "nav-active" : undefined)}
              >
                Formik Yup Page
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-components"
                className={({ isActive }) => (isActive ? "nav-active" : undefined)}
              >
                Formik Components
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-abstract"
                className={({ isActive }) => (isActive ? "nav-active" : undefined)}
              >
                Formik Abstract
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className={({ isActive }) => (isActive ? "nav-active" : undefined)}
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="formik-basic" element={<FormikBasicPage />} />
          <Route path="formik-yup" element={<FormikYupPage />} />
          <Route path="formik-components" element={<FormikComponents />} />
          <Route path="formik-abstract" element={<FormikAbstract />} />
          <Route path="users" element={<h1>Users Page</h1>} />
          <Route path="home" element={<h1>Home Page</h1>} />
          <Route path="register" element={<RegisterPage />} />

          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
