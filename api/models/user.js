/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # Proyecto
 * Modelo | `user.js`
 *
 * A01657103 | Daniel Bakas Amuchástegui
 * A01027543 | Santiago Hernández Guerrero
 *
 * Sep 14, 2022
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import { model, Schema } from "mongoose";

//* Main
const schema = new Schema({
    admitted: { type: Boolean, required: false },
    code: { type: String, required: true },
    fullName: { type: String, required: false },
    mail: { type: String, required: false },
    tel: { type: String, required: false },
    qr: { type: String, required: false }
});

const User = model("User", schema);

//* Exports
export { User };