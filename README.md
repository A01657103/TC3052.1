# Proyecto | Parcial 2

## Introducción

### Descripción

Sistema Web de Registros para Conferencias

### Funcionalidades

* Registro de Usuarios
* Validación de Registro
* Control de Acceso a Usuarios
* Lectura de Códigos QR
* Uso de Cámara Celular

## Iniciar el proyecto

Crea una nueva carpeta para tu proyecto y dentro de la carpeta ejecuta el
siguiente comando en tu terminal. Es importante agregar la bandera `--force` porque algunas de las librerías aún se encuentran en fase de pruebas y no son enteramente estables.

```bash
npm i --force
```

Después de ejecutar el comando se va a generar dentro de la carpeta el
archivo `package.json` este archivo es el que utiliza `npm` para identificar los
paquetes necesarios de tu proyecto.

El contenido de `package.json`  será:

```json
{
  "name": "proyecto",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "bootstrap": "^5.2.2",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "mongoose": "^6.7.0",
    "node-fetch": "^3.2.10",
    "nodemon": "^2.0.20",
    "path": "^0.12.7",
    "qrcode": "^1.5.1",
    "react": "^18.2.0",
    "react-bootstrap": "^2.5.0",
    "react-dom": "^18.2.0",
    "react-qr-reader": "^3.0.0-beta-1",
    "react-router-dom": "^6.4.2",
    "react-scripts": "5.0.1",
    "uuid": "^9.0.0",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "backend": "node ./api/server.js",
    "dev": "nodemon ./api/server.js",
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}

```

## Base de Datos

La base de datos del proyecto se encuentra en un cluster online de MongoDB

## Iniciar el proyecto

Para iniciar el proyecto es necesario abrir dos terminales, pues en una ejecutaremos el cliente y en otra el servidor. 
Para esto es necesario en una terminal ejecutar el siguiente comando
```bash
npm run backend
```
Por otro lado, en otra terminal ejecutar:
```bash
npm run start
```

El servidor del proyecto corre en el puerto `3030` y el cliente en el `3000`, por lo que para visualizar el cliente deberá ingresar a la siguiente dirección http://localhost/3000