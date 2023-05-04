import React, {useEffect, useState} from 'react';
import {Container, Table} from "react-bootstrap";
import {fetchCalculationParameters} from "../http/userAPI";
import GetKey from "../components/modals/GetKey";
//const ffi = require('ffi-napi')

const PersonalAccount = () => {
    const [calculationParameters, setCalculationParameters] = useState([])

    const [getKeyVisible, setGetKeyVisible] = useState(false)
    const [registrationKey, setRegistrationKey] = useState('')

    const getRegistrationKey = () => {
        /*
        const snrkLib = new ffi.Library('./dll/snrkLibrary', {
            'GetRKValue': [
                'string', [
                    'string',
                    'string',
                    'string',
                    'string',
                    'string'
                ]
            ],
        })
        //setRegistrationKey(String(7 * 1000000000000000))
        setGetKeyVisible(true)
        */
    }

    useEffect(() => {
        fetchCalculationParameters().then(data => setCalculationParameters(data))
    }, [])

    return (
        <Container className="d-flex flex-column">
            <div className="mt-4 text-center">
                <h1 className="fw-normal">Личный кабинет</h1>
            </div>
            <Table className="mt-4 lead" responsive striped bordered>
                <thead>
                {calculationParameters.length
                    ?
                    <tr>
                        <th>№</th>
                        <th>Наименование программного продукта</th>
                        <th>Количество АРМ</th>
                        <th>Дата действия ключа</th>
                        <th></th>
                        <th></th>
                    </tr>
                    :
                    <tr>
                        <th>Для вашей учетной записи не найдено программ доступных для скачивания и получения регистрационного ключа</th>
                    </tr>
                }
                </thead>
                <tbody>
                {calculationParameters.map(parameter =>
                    <tr key={Number(parameter.id)}>
                        <td>{parameter.softwareNumber}</td>
                        <td>{parameter.softwareName}</td>
                        <td>{parameter.workstationsNumber}</td>
                        <td>{new Date(parameter.keyExpirationDate).toLocaleDateString()}</td>
                        <td>
                            <a
                                className="text-decoration-none"
                                href={parameter.downloadLink}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Скачать установщик
                            </a>
                        </td>
                        <td>
                            <div
                                style={{cursor: "pointer"}}
                                onClick={() => getRegistrationKey()}
                            >
                                Получить регистрационный ключ
                            </div>
                        </td>
                    </tr>
                )}
                </tbody>
            </Table>
            <GetKey
                show={getKeyVisible}
                onHide={() => setGetKeyVisible(false)}
                registrationKey={registrationKey}
            />
        </Container>
    );
};

export default PersonalAccount;