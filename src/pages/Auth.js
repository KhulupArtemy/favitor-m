import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {login} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useNavigate} from "react-router-dom";
import {MAIN_ROUTE} from "../utils/consts";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const [userLogin, setUserLogin] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const signIn = async () => {
        try {
            let data = await login(userLogin, userPassword)
            user.setUser(data)
            user.setIsAuth(true)
            navigate(MAIN_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h1 className="m-auto fw-normal">Авторизация</h1>
                <Form className="d-flex flex-column lead">
                    <Form.Label
                        className="mt-4"
                    >
                        Введите логин
                    </Form.Label>
                    <Form.Control
                        placeholder="Поле для ввода логина"
                        value={userLogin}
                        onChange={e => setUserLogin(e.target.value)}
                    />
                    <Form.Label
                        className="mt-4"
                    >
                        Введите пароль
                    </Form.Label>
                    <Form.Control
                        placeholder="Поле для ввода пароля"
                        value={userPassword}
                        onChange={e => setUserPassword(e.target.value)}
                        type="password"
                    />
                    <Button
                        className="mt-4"
                        variant={"outline-dark"}
                        onClick={signIn}
                    >
                        Войти
                    </Button>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;