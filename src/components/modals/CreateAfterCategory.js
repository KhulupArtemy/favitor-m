import React, {useContext, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {Context} from "../../index";
import {createAfterCategory, fetchCategories} from "../../http/programCategoryAPI";

const CreateAfterCategory = ({show, onHide}) => {
    const {categories} = useContext(Context)
    const [nameCategory, setNameCategory] = useState('')
    const [afterName, setAfterName] = useState('')

    const addCategory = async () => {
        try {
            await createAfterCategory({nameCategory, afterName}).then(data => alert(data))
            setNameCategory('')
            setAfterName('')
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
                    Добавить категорию после выбранной категории из выпадающего списка
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Label>Выберите категорию после которой выполнить добавление</Form.Label>
                    <Form.Control
                        list="titles"
                        value={afterName}
                        onChange={e => setAfterName(e.target.value)}
                        placeholder="Поле для выбора категории"
                    />
                    <datalist id="titles">
                        {Object(categories.programCategories.map(category =>
                            <option key={category.id} value={category.nameCategory}></option>
                        ))}
                    </datalist>
                    <Form.Label className="mt-3">Введите название добавляемой категории</Form.Label>
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

export default CreateAfterCategory;