import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";

const GetKey = ({show, onHide, registrationKey}) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Регистрационный ключ на выбранное программное средство
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Label className="lead">{registrationKey}</Form.Label>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={onHide}>Скопировать ключ</Button>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default GetKey;