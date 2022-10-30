/*
 *  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # Proyecto | Parcial 2
 * Controllers | `index.js`
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
import QRCode from "qrcode";

//* Main
const nuevoRegistro = async (data) => {
    const { code } = data;
    data.qr = await QRCode.toDataURL(code);
    const res = await fetch("http://localhost:3030/", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    });
    const { qr } = await res.json();
    return qr;
};

const consultarRegistro = async (code) => {
    const data = await fetch(`http://localhost:3030/${code}`);
    return await data.json();
};

const admitirRegistro = async (data) => {
    const { _id } = data;
    const res = await fetch(`http://localhost:3030/${_id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    });
    return await res.json();
};

//* Exports
export { admitirRegistro, consultarRegistro, nuevoRegistro };