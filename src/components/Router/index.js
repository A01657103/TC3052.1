/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # semantyk.com
 * Component | `Router`
 *
 * Sep 26, 2022
 *
 * Copyright © Semantyk 2022. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
// Package Imports
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Project Imports
import { Registro } from "../views/Registro/index.js";
import { HomePage } from "../views/HomePage/index.js";
import { Lectura } from "../views/Lectura/index.js";

//* Main
const Router = () => {
    // Return
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/lectura" element={<Lectura/>}/>
                <Route path="/registro" element={<Registro/>}/>
            </Routes>
        </BrowserRouter>
    );
};

//* Exports
export { Router };