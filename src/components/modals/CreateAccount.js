import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {registration} from "../../http/userAPI";

const CreateAccount = ({show, onHide}) => {
    const [userLogin, setUserLogin] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const registrationUser = async () => {
        try {
            await registration(userLogin, userPassword).then(data => alert(data))
            setUserLogin('')
            setUserPassword('')
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
                    Зарегистрировать новый аккаунт
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Label>Введите логин добавляемого аккаунта</Form.Label>
                    <Form.Control
                        value={userLogin}
                        onChange={e => setUserLogin(e.target.value)}
                        placeholder="Поле для ввода логина"
                    />
                    <Form.Label className="mt-3">Введите пароль добавляемого аккаунта</Form.Label>
                    <Form.Control
                        value={userPassword}
                        onChange={e => setUserPassword(e.target.value)}
                        placeholder="Поле для ввода пароля"
                        type="password"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={registrationUser}>Создать</Button>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateAccount;