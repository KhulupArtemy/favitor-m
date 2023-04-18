import React, {useContext, useState} from 'react';
import {Context} from "../../index";
import {fetchItems, updateOneItem} from "../../http/itemAPI";
import {Button, Form, Modal} from "react-bootstrap";

const UpdateOneItem = ({show, onHide}) => {
    const {item} = useContext(Context)
    const [title, setTitle] = useState('')
    const [newTitle, setNewTitle] = useState('')

    const updateItem = async () => {
        try {
            await updateOneItem({title, newTitle}).then(data => alert(data))
            setTitle('')
            setNewTitle('')
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
                    Изменить элемент списка
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Label>Выберите изменяемый элемент списка</Form.Label>
                    <Form.Control
                        list="titles"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="Поле для выбора изменяемого элемента списка"
                    />
                    <datalist id="titles">
                        {Object(item.items.map(item_ =>
                            <option key={item_.id} value={item_.title}></option>
                        ))}
                    </datalist>
                    <Form.Label className="mt-3">Введите новое название изменяемого элемента списка</Form.Label>
                    <Form.Control
                        value={newTitle}
                        onChange={e => setNewTitle(e.target.value)}
                        placeholder="Поле для ввода названия"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={updateItem}>Изменить</Button>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default UpdateOneItem;