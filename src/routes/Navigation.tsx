import { Suspense } from "react";
import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom"
import { routes } from "./routes";

import logo from '../logo.svg';

export const Navigation = () => {
    return (
        // Suspense is used to hold lazy loading
        <Suspense fallback={ <span>Loading...</span> }>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="React Logo" />
                        <ul>
                            {
                                routes.map(({ to, name }) => (
                                    <li key={ name }>
                                        <NavLink 
                                            to={ to }
                                            className={({ isActive }) => isActive ? 'nav-active' : undefined}>
                                            { name }
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>

                    <Routes>
                        {
                            routes.map(({ path, Component }) => (
                                <Route 
                                    key={ path } 
                                    path={ path } 
                                    element={ <Component /> }
                                />
                            ))
                        }
                        <Route path="/*" element={<Navigate to={ routes[0].to } replace />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    )
}