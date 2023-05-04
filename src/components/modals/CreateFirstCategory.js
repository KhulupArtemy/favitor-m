import React, {useContext, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createFirstCategory, fetchCategories} from "../../http/programCategoryAPI";
import {Context} from "../../index";

const CreateFirstCategory = ({show, onHide}) => {
    const {categories} = useContext(Context)
    const [nameCategory, setNameCategory] = useState('')

    const addCategory = async () => {
        try {
            await createFirstCategory({nameCategory}).then(data => alert(data))
            setNameCategory('')
            onHide()
            await fetchCategories().then(data => categories.setProgramCategories(data))
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
                    Добавить категорию в начало выпадающего списка
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Label>Введите название добавляемой категории</Form.Label>
                    <Form.Control
                        value={nameCategory}
                        onChange={e => setNameCategory(e.target.value)}
                        placeholder="Поле для ввода названия"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={addCategory}>Добавить</Button>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateFirstCategory;