/*
 *  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # Proyecto | Parcial 2
 * View | `HomePage`
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
import { Button, Card, Container } from "react-bootstrap";
import { useState } from "react";
import { Registro } from "../Registro/index.js";
import { Lectura } from "../Lectura/index.js";

//* Main
const HomePage = () => {
    const [showLectura, setShowLectura] = useState(false);
    const [showRegistro, setShowRegistro] = useState(false);

    const handleClickLectura = () => setShowLectura(true);
    const handleClickRegistro = () => setShowRegistro(true);

    const propsLectura = {
        show: showLectura,
        setShow: setShowLectura
    };

    const propsRegistro = {
        show: showRegistro,
        setShow: setShowRegistro
    };

    return (
        <Container fluid className="text-center p-5"
                   style={{ height: "100vh" }}>
            <Card className="m-auto"
                  style={{ width: "50%" }}>
                <Card.Body>
                    <Card.Title><h1>Conferencia</h1></Card.Title>
                    <Button
                        className="m-2"
                        onClick={handleClickRegistro}
                    >
                        Registro
                    </Button>
                    <Button
                        className="m-2"
                        onClick={handleClickLectura}
                        variant="outline-primary"
                    >
                        Lectura
                    </Button>
                </Card.Body>
            </Card>
            {showRegistro && <Registro {...propsRegistro}/>}
            {showLectura && <Lectura {...propsLectura}/>}
        </Container>
    );
};

//* Exports
export { HomePage };