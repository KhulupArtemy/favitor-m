import React from 'react';
import {deleteOneRow} from "../../http/itemAPI";
import {Button, Form, Modal} from "react-bootstrap";

const DeleteOneRow = ({show, onHide, rowId}) => {
    const deleteRow = async () => {
        try {
            await deleteOneRow({rowId}).then(data => alert(data))
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
                    Удаление выбранной строки
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Label>Вы действительно хотите удалить выбранную строку?</Form.Label>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={deleteRow}>Удалить</Button>
                <Button variant="outline-danger" onClick={onHide}>Отмена</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteOneRow;