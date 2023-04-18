import React, {useContext, useState} from 'react';
import {Context} from "../../index";
import {createLastItem, fetchItems} from "../../http/itemAPI";
import {Button, Form, Modal} from "react-bootstrap";

const CreateLastItem = ({show, onHide}) => {
    const {item} = useContext(Context)
    const [title, setTitle] = useState('')

    const addItem = async () => {
        try {
            await createLastItem({title}).then(data => alert(data))
            setTitle('')
            onHide()
            await fetchItems().then(data => item.setItems(data))
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
                    Добавить элемент списка в конец
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Label>Введите название добавляемого элемента списка</Form.Label>
                    <Form.Control
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="Поле для ввода названия"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={addItem}>Добавить</Button>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateLastItem;