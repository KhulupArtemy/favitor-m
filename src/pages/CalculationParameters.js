import React, {useEffect, useState} from 'react';
import {Button, Card, Container, Form, Table} from "react-bootstrap";
import {fetchCalculationParameters} from "../http/calculationParameterAPI";
import UpdateCalculationParameter from "../components/modals/UpdateCalculationParameter";
import DeleteCalculationParameter from "../components/modals/DeleteCalculationParameter";
import {fetchUserLogins} from "../http/userAPI";

const CalculationParameters = () => {
    const [calculationParameters, setCalculationParameters] = useState([])

    const [logins, setLogins] = useState([])
    const [userLogin, setUserLogin] = useState('')

    const [updateCalculationParametersVisible, setUpdateCalculationParametersVisible] = useState(false)
    const [deleteCalculationParametersVisible, setDeleteCalculationParametersVisible] = useState(false)

    const [calculationParameterId, setCalculationParameterId] = useState('')
    const [eldestCalculationParameterInformation, setEldestCalculationParameterInformation] = useState({})

    useEffect(() => {
        fetchUserLogins().then(data => setLogins(data))
    }, [])

    useEffect(() => {
        fetchCalculationParameters().then(data => setCalculationParameters(data))
    }, [updateCalculationParametersVisible, deleteCalculationParametersVisible])

    return (
        <Container>
            <div className="mt-4 text-center">
                <h1 className="fw-normal">Расчетные параметры пользователей</h1>
            </div>
            <Card className="p-4 mt-4">
                <Card.Body className="text-center">
                    <h2 className="fw-light">Задайте настройки поиска расчетных параметров пользователя</h2>
                </Card.Body>
                <Form className="lead">
                    <Form.Label>Выберите логин пользователя</Form.Label>
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
                    <Button
                        variant="outline-dark"
                        className="mt-4"
                        onClick={() =>
                            fetchCalculationParameters().then(
                                data => setCalculationParameters(data.filter(
                                    parameter => parameter.userLogin === userLogin
                                ))
                            )
                        }
                    >
                        Поиск
                    </Button>
                    <Button
                        variant="outline-dark"
                        className="mt-4 ms-2"
                        onClick={() => {
                            setUserLogin('')
                            fetchCalculationParameters().then(data => setCalculationParameters(data))
                        }}
                    >
                        Сброс настроек
                    </Button>
                </Form>
            </Card>
            <Table className="mt-4 lead" responsive striped bordered>
                <thead>
                {calculationParameters.length
                    ?
                    <tr>
                        <th>№</th>
                        <th>Логин пользователя</th>
                        <th>Наименование программного продукта</th>
                        <th>Количество АРМ</th>
                        <th>Дата действия ключа</th>
                        <th></th>
                        <th></th>
                    </tr>
                    :
                    <tr>
                        <th>Рассчетные параметры не найдены</th>
                    </tr>
                }
                </thead>
                <tbody>
                {calculationParameters.map(parameter =>
                    <tr key={Number(parameter.id)}>
                        <td>{parameter.softwareNumber}</td>
                        <td>{parameter.userLogin}</td>
                        <td>{parameter.softwareName}</td>
                        <td>{parameter.workstationsNumber}</td>
                        <td>{new Date(parameter.keyExpirationDate).toLocaleDateString()}</td>
                        <td>
                            <div
                                style={{cursor: "pointer"}}
                                onClick={() => {
                                    setCalculationParameterId(parameter.id)
                                    setEldestCalculationParameterInformation({
                                        softwareNumber: parameter.softwareNumber,
                                        softwareName: parameter.softwareName,
                                        workstationsNumber: parameter.workstationsNumber,
                                        downloadLink: parameter.downloadLink,
                                        keyExpirationDate: parameter.keyExpirationDate
                                    })
                                    setUpdateCalculationParametersVisible(true)
                                }}
                            >
                                Изменить
                            </div>
                        </td>
                        <td>
                            <div
                                style={{cursor: "pointer"}}
                                onClick={() => {
                                    setCalculationParameterId(parameter.id)
                                    setDeleteCalculationParametersVisible(true)
                                }}
                            >
                                Удалить
                            </div>
                        </td>
                    </tr>
                )}
                </tbody>
            </Table>
            <UpdateCalculationParameter
                show={updateCalculationParametersVisible}
                onHide={() => setUpdateCalculationParametersVisible(false)}
                id={calculationParameterId}
                eldestCalculationParameterInformation={eldestCalculationParameterInformation}
            />
            <DeleteCalculationParameter
                show={deleteCalculationParametersVisible}
                onHide={() => setDeleteCalculationParametersVisible(false)}
                id={calculationParameterId}
            />
        </Container>
    );
};

export default CalculationParameters;