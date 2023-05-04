import React, {useContext, useState} from 'react';
import {Context} from "../../index";
import {fetchCategories, updateOneCategory} from "../../http/programCategoryAPI";
import {Button, Form, Modal} from "react-bootstrap";

const UpdateOneCategory = ({show, onHide}) => {
    const {categories} = useContext(Context)
    const [nameCategory, setNameCategory] = useState('')
    const [newNameCategory, setNewNameCategory] = useState('')

    const updateCategory = async () => {
        try {
            await updateOneCategory({nameCategory, newNameCategory}).then(data => alert(data))
            setNameCategory('')
            setNewNameCategory('')
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
                    Изменить категорию
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Label>Выберите изменяемую категорию</Form.Label>
                    <Form.Control
                        list="titles"
                        value={nameCategory}
                        onChange={e => setNameCategory(e.target.value)}
                        placeholder="Поле для выбора изменяемой категории"
                    />
                    <datalist id="titles">
                        {Object(categories.programCategories.map(category =>
                            <option key={category.id} value={category.nameCategory}></option>
                        ))}
                    </datalist>
                    <Form.Label className="mt-3">Введите новое название изменяемой категории</Form.Label>
                    <Form.Control
                        value={newNameCategory}
                        onChange={e => setNewNameCategory(e.target.value)}
                        placeholder="Поле для ввода нового названия категории"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={updateCategory}>Изменить</Button>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default UpdateOneCategory;