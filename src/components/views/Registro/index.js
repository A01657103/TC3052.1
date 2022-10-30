/*
 *  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # Proyecto | Parcial 2
 * Component | `Registro`
 *
 * A01027543 | Santiago Hernández Guerrero
 * A01657103 | Daniel Bakas Amuchástegui
 *
 * Oct 31, 2022
 *
 * Laboratorio de Aplicaciones Web | Prof. Luis José González
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

import {
    Button,
    FloatingLabel,
    Form,
    InputGroup,
    Modal
} from "react-bootstrap";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { nuevoRegistro } from "../../../controllers/index.js";

//* Main
const Registro = (props) => {
    // Props
    const { show, setShow } = props;
    // Hooks
    const [img, setImg] = useState("");
    const [mail, setMail] = useState("");
    const [fullName, setFullName] = useState("");
    const [tel, setTel] = useState("");

    // Component Logic
    const handleChangeMail = ({ target: { value } }) => setMail(value);
    const handleChangeName = ({ target: { value } }) => setFullName(value);
    const handleChangeTel = ({ target: { value } }) => setTel(value);
    const handleClose = () => {
        setImg("");
        setShow(false);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            admitted: false,
            code: uuid(),
            mail,
            fullName,
            tel
        };
        const qr = await nuevoRegistro(data);
        setImg(qr);
    };

    // Return
    return (
        <Modal centered show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title
                    className={img && "text-success"}>Registro {img && "Exitoso"}</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    {!img ? (<>
                        <FloatingLabel
                            controlId="fullName"
                            label="Nombre Completo"
                        >
                            <Form.Control
                                onChange={handleChangeName}
                                placeholder="Nombre Completo"
                                required
                                type="name"
                            />
                        </FloatingLabel>
                        <InputGroup className="mt-3">
                            <InputGroup.Text>@</InputGroup.Text>
                            <Form.Control
                                onChange={handleChangeMail}
                                placeholder="Mail"
                                required
                                type="email"
                            />
                        </InputGroup>
                        <InputGroup className="mt-3">
                            <InputGroup.Text>📞</InputGroup.Text>
                            <Form.Control
                                onChange={handleChangeTel}
                                placeholder="Tel"
                                required
                            />
                        </InputGroup>
                    </>) : <img width={"100%"} src={img} alt={"QR Code"}/>}
                </Modal.Body>
                {!img && <Modal.Footer>
                    <Button variant="primary" type="submit">Registrarme</Button>
                </Modal.Footer>}
            </Form>
        </Modal>
    );
};

//* Exports
export { Registro };