/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # Proyecto
 * Servidor | `server.js`
 *
 * A01657103 | Daniel Bakas Amuchástegui
 * A01027543 | Santiago Hernández Guerrero
 *
 * Sep 13, 2022
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import app from "./app.js";

//* Main
const env = app.get("env");
const port = app.get("port");
app.listen(port, () => {
    console.clear();
    console.log(`API running at port ${port} in ${env} mode`);
});