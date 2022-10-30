/*
 *  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # Proyecto | Parcial 2
 * Component | `Lectura`
 *
 * A01027543 | Santiago Hernández Guerrero
 * A01657103 | Daniel Bakas Amuchástegui
 *
 * Oct 31, 2022
 *
 * Laboratorio de Aplicaciones Web | Prof. Luis José González
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

import { QrReader } from "react-qr-reader";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import {
    admitirRegistro,
    consultarRegistro
} from "../../../controllers/index.js";

//* Main
const Lectura = (props) => {
    // Props
    const { show, setShow } = props;
    // Hooks
    const [data, setData] = useState({});

    // Callbacks
    const handleAdmission = async () => {
        data.admitted = true;
        console.log(data.admitted);
        const res = await admitirRegistro(data);
        console.log(res);
        setShow(false);
    };
    const handleClose = () => {
        setData({});
        setShow(false);
    };
    const handleResult = async (res) => {
        if (res) {
            const registro = await consultarRegistro(res.text);
            console.log(registro);
            setData(registro);
        }
    };
    const { admitted, fullName, mail, qr, tel } = data;
    return (
        <>
            <Modal centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Scanner de Códigos QR</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {qr ?
                        (<>
                            <h4>{fullName}</h4>
                            <p><strong>-
                                Admitido:</strong> {admitted ? "Si" : "No"}</p>
                            <p><strong>- Mail:</strong> {mail}</p>
                            <p><strong>- Tel:</strong> {tel}</p>
                            <img width={"100%"} src={qr} alt={"QR Code"}/>
                        </>)
                        :
                        <QrReader onResult={handleResult}/>
                    }
                </Modal.Body>
                {qr && (
                    <Modal.Footer>
                        <Button onClick={handleClose}
                                variant="outline-danger"
                        >
                            Cancelar
                        </Button>
                        {!admitted && (
                            <Button onClick={handleAdmission}
                                    variant="success">Admitir</Button>
                        )}
                    </Modal.Footer>
                )}
            </Modal>
        </>
    );
};

//* Exports
export { Lectura };