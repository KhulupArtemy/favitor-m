import React from 'react';
import {deleteCalculationParameter} from "../../http/calculationParameterAPI";
import {Button, Form, Modal} from "react-bootstrap";

const DeleteCalculationParameter = ({show, onHide, id}) => {
    const deleteParameter = async () => {
        try {
            await deleteCalculationParameter({id}).then(data => alert(data))
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
                    Удаление выбранных расчетных параметров
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Label>Вы действительно хотите удалить расчетные параметры?</Form.Label>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={deleteParameter}>Удалить</Button>
                <Button variant="outline-danger" onClick={onHide}>Отмена</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteCalculationParameter;