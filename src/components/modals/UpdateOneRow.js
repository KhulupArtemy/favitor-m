import React, {useEffect, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {updateOneRow} from "../../http/itemAPI";

const UpdateOneRow = ({show, onHide, rowId, eldestRowInformation}) => {
    const [serialNumber, setSerialNumber] = useState('')
    const [softwareName, setSoftwareName] = useState('')
    const [linkText, setLinkText] = useState('')
    const [link, setLink] = useState('')
    const [softwareVersion, setSoftwareVersion] = useState('')

    useEffect(() => {
        setSerialNumber(eldestRowInformation.serialNumber ? String(eldestRowInformation.serialNumber) : '')
        setSoftwareName(eldestRowInformation.softwareName ? String(eldestRowInformation.softwareName) : '')
        setLinkText(eldestRowInformation.linkText ? String(eldestRowInformation.linkText) : '')
        setLink(eldestRowInformation.link ? String(eldestRowInformation.link) : '')
        setSoftwareVersion(eldestRowInformation.softwareVersion ? String(eldestRowInformation.softwareVersion) : '')
    }, [eldestRowInformation])

    const updateRow = async () => {
        try {
            await updateOneRow({rowId, serialNumber, softwareName, linkText, link, softwareVersion}).then(data => alert(data))
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
                    Изменение выбранной строки
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Label>Введите новый порядковый номер</Form.Label>
                    <Form.Control
                        value={serialNumber}
                        onChange={e => setSerialNumber(e.target.value)}
                        placeholder="Поле для ввода порядкового номера"
                        type="Number"
                        min="1"
                    />
                    <Form.Label className="mt-3">Введите новое наименование программного продукта</Form.Label>
                    <Form.Control
                        value={softwareName}
                        onChange={e => setSoftwareName(e.target.value)}
                        placeholder="Поле для ввода наименования программного продукта"
                        as="textarea"
                        rows={3}
                    />
                    <Form.Label className="mt-3">Введите новый текст ссылки на программный продукт</Form.Label>
                    <Form.Control
                        value={linkText}
                        onChange={e => setLinkText(e.target.value)}
                        placeholder="Поле для ввода текста ссылки на программный продукт"
                    />
                    <Form.Label className="mt-3">Введите новую ссылку на программный продукт</Form.Label>
                    <Form.Control
                        value={link}
                        onChange={e => setLink(e.target.value)}
                        placeholder="Поле для ввода ссылки на программный продукт"
                    />
                    <Form.Label className="mt-3">Введите новую версию программного продукта</Form.Label>
                    <Form.Control
                        value={softwareVersion}
                        onChange={e => setSoftwareVersion(e.target.value)}
                        placeholder="Поле для ввода версии программного продукта"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={updateRow}>Изменить</Button>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default UpdateOneRow;