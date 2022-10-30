/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # Proyecto
 * Aplicación | `app.js`
 *
 * A01657103 | Daniel Bakas Amuchástegui
 * A01027543 | Santiago Hernández Guerrero
 *
 * Sep 13, 2022
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Import
// Package Imports
import cookieParser from "cookie-parser";
import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
// Project Imports
import mongoose from "mongoose";
import { router } from "./router.js";

//* Main
// dotenv
dotenv.config();

// path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// express
const app = express();
// body-parser Configuration
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// cors Configuration
app.use(cors());
// cookie-parser Configuration
app.use(cookieParser());
// PORT Configuration
app.set("port", process.env.API_PORT || 80);
// PUBLIC_URL Configuration
app.use(express.static(path.join(__dirname, "./public")));
// logger Configuration
// app.use(logger("dev"));
// Routes
app.use("/", router);
// URLs Configuration
app.set("api", "http://localhost/api/");
app.set("homepage", "http://localhost/");
// View Engine Configuration
app.set("views", path.join(__dirname, "./client/views"));
app.set("view engine", "pug");

// mongo
mongoose.connect(process.env.DB_URI)
    .then(() => console.log("Successfully connected to Database."));

//* Exports
export default app;