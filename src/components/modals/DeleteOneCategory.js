import React, {useContext, useState} from 'react';
import {Context} from "../../index";
import {deleteOneCategory, fetchCategories} from "../../http/programCategoryAPI";
import {Button, Form, Modal} from "react-bootstrap";

const DeleteOneCategory = ({show, onHide}) => {
    const {categories} = useContext(Context)
    const [nameCategory, setNameCategory] = useState('')

    const deleteCategory = async () => {
        try {
            await deleteOneCategory({nameCategory}).then(data => alert(data))
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
                    Удалить категорию
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Label>Выберите удаляемую категорию</Form.Label>
                    <Form.Control
                        list="titles"
                        value={nameCategory}
                        onChange={e => setNameCategory(e.target.value)}
                        placeholder="Поле для выбора удаляемой категории"
                    />
                    <datalist id="titles">
                        {Object(categories.programCategories.map(category =>
                            <option key={category.id} value={category.nameCategory}></option>
                        ))}
                    </datalist>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={deleteCategory}>Удалить</Button>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteOneCategory;