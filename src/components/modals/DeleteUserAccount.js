import React, {useEffect, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {deleteUserAccount, fetchUserLogins} from "../../http/userAPI";

const DeleteUserAccount = ({show, onHide}) => {
    const [logins, setLogins] = useState([])

    const [userLogin, setUserLogin] = useState('')

    useEffect(() => {
        fetchUserLogins().then(data => setLogins(data))
    }, [show])

    const deleteAccount = async () => {
        try {
            await deleteUserAccount(userLogin).then(data => alert(data))
            setUserLogin('')
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
                    Удалить аккаунт пользователя
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Label>Выберите логин удаляемого пользователя</Form.Label>
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
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={deleteAccount}>Удалить</Button>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteUserAccount;