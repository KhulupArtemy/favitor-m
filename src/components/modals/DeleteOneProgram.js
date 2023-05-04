import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {deleteOneProgram} from "../../http/programAPI";

const DeleteOneProgram = ({show, onHide, id}) => {
    const deleteProgram = async () => {
        try {
            await deleteOneProgram({id}).then(data => alert(data))
            onHide()
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Удаление выбранной программы из таблицы
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Label>Вы действительно хотите удалить выбранную программу?</Form.Label>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={deleteProgram}>Удалить</Button>
                <Button variant="outline-danger" onClick={onHide}>Отмена</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteOneProgram;