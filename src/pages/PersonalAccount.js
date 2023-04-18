import React from 'react';
import {Button, Container, Form} from "react-bootstrap";

const PersonalAccount = () => {
    return (
        <Container className="d-flex flex-column">
            <div className="mt-4">
                <Form>
                    <Form.Label>
                        <h5>Введите серийный номер для получения регистрационного ключа</h5>
                    </Form.Label>
                    <Form.Control
                        placeholder="Поле для ввода серийного номера"
                    />
                    <Button
                        variant={"outline-dark"}
                        className="mt-3 p-2"
                    >
                        Получить регистрационный ключ
                    </Button>
                </Form>
            </div>
        </Container>
    );
};

export default PersonalAccount;