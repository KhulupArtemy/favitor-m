import React, {useEffect, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {getRegistrationKey} from "../../http/calculationParameterAPI";


const GetKey = ({show, onHide, programId, userId, workstationsNumber, keyExpirationDate}) => {
    const [serialNumber, setSerialNumber] = useState('')
    const [registrationKey, setRegistrationKey] = useState('')

    useEffect(() => {
        setSerialNumber('')
        setRegistrationKey('')
    }, [show])

    const calculateKey = async () => {
        try {
            await getRegistrationKey({
                programId,
                userId,
                workstationsNumber,
                keyExpirationDate,
                serialNumber
            }).then(data => setRegistrationKey(data))
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
                    Получить регистрационный ключ
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Label>Введите серийный номер</Form.Label>
                <Form.Control
                    value={serialNumber}
                    onChange={e => setSerialNumber(e.target.value)}
                    placeholder="Поле для ввода серийного номера"
                />
                {registrationKey.length
                    ?
                    <div className="mt-3">
                        <Form.Label>Ключ</Form.Label>
                        <Form.Control
                            value={registrationKey}
                            onChange={e => setRegistrationKey(registrationKey)}
                            placeholder="Значение регистрационного ключа"
                        />
                    </div>
                    : ''
                }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={calculateKey}>Получить</Button>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default GetKey;