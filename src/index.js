/*
 *  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # Proyecto | Parcial 2
 * System | `index.js`
 *
 * A01027543 | Santiago Hernández Guerrero
 * A01657103 | Daniel Bakas Amuchástegui
 *
 * Oct 31, 2022
 *
 * Laboratorio de Aplicaciones Web | Prof. Luis José González
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
// Package Imports
import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from "react-dom/client";
// Project Imports
import "./index.css";
import { App } from "./components/App/index.js";

//* Main
const element = document.getElementById("root");
const root = createRoot(element);
root.render(<App/>);