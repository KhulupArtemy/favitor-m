import React, {useContext, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {Context} from "../../index";
import {createAfterItem, fetchItems} from "../../http/itemAPI";

const CreateAfterItem = ({show, onHide}) => {
    const {item} = useContext(Context)
    const [title, setTitle] = useState('')
    const [afterTitle, setAfterTitle] = useState('')

    const addItem = async () => {
        try {
            await createAfterItem({title, afterTitle}).then(data => alert(data))
            setTitle('')
            setAfterTitle('')
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
                    Добавить элемент списка после выбранного элемента списка
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Label>Выберите после какого элемента списка выполнить добавление</Form.Label>
                    <Form.Control
                        list="titles"
                        value={afterTitle}
                        onChange={e => setAfterTitle(e.target.value)}
                        placeholder="Поле для выбора элемента списка"
                    />
                    <datalist id="titles">
                        {Object(item.items.map(item_ =>
                            <option key={item_.id} value={item_.title}></option>
                        ))}
                    </datalist>
                    <Form.Label className="mt-3">Введите название добавляемого элемента списка</Form.Label>
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

export default CreateAfterItem;