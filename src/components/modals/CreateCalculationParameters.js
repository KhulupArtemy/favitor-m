import React, {useEffect, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createCalculationParameters, fetchUserLogins} from "../../http/userAPI";

const CreateCalculationParameters = ({show, onHide}) => {
    const [logins, setLogins] = useState([])

    const [userLogin, setUserLogin] = useState('')
    const [softwareNumber, setSoftwareNumber] = useState('')
    const [softwareName, setSoftwareName] = useState('')
    const [workstationsNumber, setWorkstationsNumber] = useState('')
    const [downloadLink, setDownloadLink] = useState('')
    const [keyExpirationDate, setKeyExpirationDate] = useState('')

    useEffect(() => {
        fetchUserLogins().then(data => setLogins(data))
    }, [show])

    const addCalculationParameters = async () => {
        try {
            await createCalculationParameters({
                userLogin,
                softwareNumber,
                softwareName,
                workstationsNumber,
                downloadLink,
                keyExpirationDate
            }).then(data => alert(data))
            setUserLogin('')
            setSoftwareNumber('')
            setSoftwareName('')
            setWorkstationsNumber('')
            setKeyExpirationDate('')
            setDownloadLink('')
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
                    Добавить рассчетные параметры
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Label>Выберите логин</Form.Label>
                    <Form.Control
                        list="logins"
                        value={userLogin}
                        onChange={e => setUserLogin(e.target.value)}
                        placeholder="Поле для выбора логина"
                    />
                    <datalist id="logins">
                        {Object(logins.map(login =>
                            <option key={login.userLogin} value={login.userLogin}></option>
                        ))}
                    </datalist>
                    <Form.Label className="mt-3">Введите номер программного обеспечения</Form.Label>
                    <Form.Control
                        value={softwareNumber}
                        onChange={e => e.target.value < 1 ? setSoftwareNumber('1') : setSoftwareNumber(e.target.value)}
                        placeholder="Поле для ввода номера"
                        type="number"
                    />
                    <Form.Label className="mt-3">Введите название программного обеспечения</Form.Label>
                    <Form.Control
                        value={softwareName}
                        onChange={e => setSoftwareName(e.target.value)}
                        placeholder="Поле для ввода названия"
                    />
                    <Form.Label className="mt-3">Введите количество АРМ</Form.Label>
                    <Form.Control
                        value={workstationsNumber}
                        onChange={e => e.target.value < 1 ? setWorkstationsNumber('1') : setWorkstationsNumber(e.target.value)}
                        placeholder="Поле для ввода количества АРМ"
                        type="number"
                    />
                    <Form.Label className="mt-3">Выберите дату окончания</Form.Label>
                    <Form.Control
                        value={keyExpirationDate}
                        onChange={e => setKeyExpirationDate(e.target.value)}
                        placeholder="Поле для выбора даты"
                        type="date"
                        min={new Date().toISOString().substr(0, 10)}
                    />
                    <Form.Label className="mt-3">Вставьте ссылку на установщик</Form.Label>
                    <Form.Control
                        value={downloadLink}
                        onChange={e => setDownloadLink(e.target.value)}
                        placeholder="Поле для вставки ссылки"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={addCalculationParameters}>Добавить</Button>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateCalculationParameters;