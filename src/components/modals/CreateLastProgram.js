import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {Button, Form, Modal} from "react-bootstrap";
import {createLastProgram} from "../../http/programAPI";

const CreateLastProgram = ({show, onHide}) => {
    const {programCategoryId} = useParams()
    const [softwareName, setSoftwareName] = useState('')

    const addProgram = async () => {
        try {
            await createLastProgram({programCategoryId, softwareName}).then(data => alert(data))
            setSoftwareName('')
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
                    Добавление программы в конец таблицы
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Label>Введите наименование программного продукта</Form.Label>
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
                <Button variant="outline-success" onClick={addProgram}>Добавить</Button>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateLastProgram;