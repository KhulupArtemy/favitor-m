import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {Button, Form, Modal} from "react-bootstrap";
import {createAfterRow} from "../../http/itemAPI";

const CreateAfterRow = ({show, onHide, rowId}) => {
    const {itemId} = useParams()
    const [serialNumber, setSerialNumber] = useState('')
    const [softwareName, setSoftwareName] = useState('')
    const [linkText, setLinkText] = useState('')
    const [link, setLink] = useState('')
    const [softwareVersion, setSoftwareVersion] = useState('')

    const addItem = async () => {
        try {
            await createAfterRow({rowId, itemId, serialNumber, softwareName, linkText, link, softwareVersion}).then(data => alert(data))
            setSerialNumber('')
            setSoftwareName('')
            setLinkText('')
            setLink('')
            setSoftwareVersion('')
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
                    Добавление после выбранной строки
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Label>Введите порядковый номер</Form.Label>
                    <Form.Control
                        value={serialNumber}
                        onChange={e => setSerialNumber(e.target.value)}
                        placeholder="Поле для ввода порядкового номера"
                        type="Number"
                        min="1"
                    />
                    <Form.Label className="mt-3">Введите наименование программного продукта</Form.Label>
                    <Form.Control
                        value={softwareName}
                        onChange={e => setSoftwareName(e.target.value)}
                        placeholder="Поле для ввода наименования программного продукта"
                        as="textarea"
                        rows={3}
                    />
                    <Form.Label className="mt-3">Введите текст ссылки на программный продукт</Form.Label>
                    <Form.Control
                        value={linkText}
                        onChange={e => setLinkText(e.target.value)}
                        placeholder="Поле для ввода текста ссылки на программный продукт"
                    />
                    <Form.Label className="mt-3">Введите ссылку на программный продукт</Form.Label>
                    <Form.Control
                        value={link}
                        onChange={e => setLink(e.target.value)}
                        placeholder="Поле для ввода ссылки на программный продукт"
                    />
                    <Form.Label className="mt-3">Введите версию программного продукта</Form.Label>
                    <Form.Control
                        value={softwareVersion}
                        onChange={e => setSoftwareVersion(e.target.value)}
                        placeholder="Поле для ввода версии программного продукта"
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

export default CreateAfterRow;