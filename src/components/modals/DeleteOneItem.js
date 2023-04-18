import React, {useContext, useState} from 'react';
import {Context} from "../../index";
import {deleteOneItem, fetchItems} from "../../http/itemAPI";
import {Button, Form, Modal} from "react-bootstrap";

const DeleteOneItem = ({show, onHide}) => {
    const {item} = useContext(Context)
    const [title, setTitle] = useState('')

    const deleteItem = async () => {
        try {
            await deleteOneItem({title}).then(data => alert(data))
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
                    Удалить элемент списка
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Label>Выберите удаляемый элемент списка</Form.Label>
                    <Form.Control
                        list="titles"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="Поле для выбора удаляемого элемента списка"
                    />
                    <datalist id="titles">
                        {Object(item.items.map(item_ =>
                            <option key={item_.id} value={item_.title}></option>
                        ))}
                    </datalist>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={deleteItem}>Удалить</Button>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteOneItem;