import React, {useEffect, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {updateOneProgram} from "../../http/programAPI";

const UpdateOneProgram = ({show, onHide, id, eldestProgramInformation}) => {
    const [softwareName, setSoftwareName] = useState('')

    useEffect(() => {
        setSoftwareName(eldestProgramInformation?.softwareName)
    }, [eldestProgramInformation])

    const updateProgram = async () => {
        try {
            await updateOneProgram({id, softwareName}).then(data => alert(data))
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
                    Изменение информации о выбранной программе в таблице
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Label>Введите новое наименование программного продукта</Form.Label>
                    <Form.Control
                        value={softwareName}
                        onChange={e => setSoftwareName(e.target.value)}
                        placeholder="Поле для ввода наименования программного продукта"
                        as="textarea"
                        rows={3}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={updateProgram}>Изменить</Button>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default UpdateOneProgram;