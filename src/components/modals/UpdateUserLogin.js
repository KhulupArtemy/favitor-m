import React, {useEffect, useState} from 'react';
import {fetchUserLogins, updateUserLogin} from "../../http/userAPI";
import {Button, Form, Modal} from "react-bootstrap";

const UpdateUserLogin = ({show, onHide}) => {
    const [logins, setLogins] = useState([])

    const [userLogin, setUserLogin] = useState('')
    const [newLogin, setNewLogin] = useState('')

    useEffect(() => {
        fetchUserLogins().then(data => setLogins(data))
    }, [show])

    const updateLogin = async () => {
        try {
            await updateUserLogin(userLogin, newLogin).then(data => alert(data))
            setUserLogin('')
            setNewLogin('')
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
                    Изменить логин пользователя
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Label>Выберите старый логин пользователя</Form.Label>
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
                    <Form.Label className="mt-3">Введите новый логин</Form.Label>
                    <Form.Control
                        value={newLogin}
                        onChange={e => setNewLogin(e.target.value)}
                        placeholder="Поле для ввода нового логина"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={updateLogin}>Изменить</Button>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default UpdateUserLogin;