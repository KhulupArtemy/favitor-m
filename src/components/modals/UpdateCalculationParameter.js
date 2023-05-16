import React, {useEffect, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {updateCalculationParameter} from "../../http/calculationParameterAPI";

const UpdateCalculationParameter = ({show, onHide, id, eldestCalculationParameterInformation}) => {
    const [softwareNumber, setSoftwareNumber] = useState('')
    const [softwareName, setSoftwareName] = useState('')
    const [workstationsNumber, setWorkstationsNumber] = useState('')
    const [downloadLink, setDownloadLink] = useState('')
    const [keyExpirationDate, setKeyExpirationDate] = useState('')

    useEffect(() => {
        setSoftwareNumber(eldestCalculationParameterInformation?.softwareNumber)
        setSoftwareName(eldestCalculationParameterInformation?.softwareName)
        setWorkstationsNumber(eldestCalculationParameterInformation?.workstationsNumber)
        setDownloadLink(eldestCalculationParameterInformation?.downloadLink)
        setKeyExpirationDate(eldestCalculationParameterInformation?.keyExpirationDate)
    }, [eldestCalculationParameterInformation])

    const updateParameter = async () => {
        try {
            await updateCalculationParameter({id, softwareNumber, softwareName, workstationsNumber, downloadLink, keyExpirationDate}).then(data => alert(data))
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
                    Изменение информации о расчетных параметрах
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Label className="mt-3">Введите новый номер программного обеспечения</Form.Label>
                    <Form.Control
                        value={softwareNumber}
                        onChange={e => e.target.value < 1 ? setSoftwareNumber('1') : setSoftwareNumber(e.target.value)}
                        placeholder="Поле для ввода номера"
                        type="number"
                    />
                    <Form.Label className="mt-3">Введите новое название программного обеспечения</Form.Label>
                    <Form.Control
                        value={softwareName}
                        onChange={e => setSoftwareName(e.target.value)}
                        placeholder="Поле для ввода названия"
                    />
                    <Form.Label className="mt-3">Введите новое количество АРМ</Form.Label>
                    <Form.Control
                        value={workstationsNumber}
                        onChange={e => e.target.value < 1 ? setWorkstationsNumber('1') : setWorkstationsNumber(e.target.value)}
                        placeholder="Поле для ввода количества АРМ"
                        type="number"
                    />
                    <Form.Label className="mt-3">Выберите новую дату окончания</Form.Label>
                    <Form.Control
                        value={keyExpirationDate}
                        onChange={e => setKeyExpirationDate(e.target.value)}
                        placeholder="Поле для выбора даты"
                        type="date"
                        min={new Date().toISOString().substr(0, 10)}
                    />
                    <Form.Label className="mt-3">Вставьте новую ссылку на установщик</Form.Label>
                    <Form.Control
                        value={downloadLink}
                        onChange={e => setDownloadLink(e.target.value)}
                        placeholder="Поле для вставки ссылки"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={updateParameter}>Изменить</Button>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default UpdateCalculationParameter;