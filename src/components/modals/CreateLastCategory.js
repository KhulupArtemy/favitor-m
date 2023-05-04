import React, {useContext, useState} from 'react';
import {Context} from "../../index";
import {createLastCategory, fetchCategories} from "../../http/programCategoryAPI";
import {Button, Form, Modal} from "react-bootstrap";

const CreateLastCategory = ({show, onHide}) => {
    const {categories} = useContext(Context)
    const [nameCategory, setNameCategory] = useState('')

    const addProgram = async () => {
        try {
            await createLastCategory({nameCategory}).then(data => alert(data))
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
                    Добавить категорию в конец выпадающего списка
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
                <Button variant="outline-success" onClick={addProgram}>Добавить</Button>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateLastCategory;