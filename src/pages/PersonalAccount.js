import React, {useEffect, useState} from 'react';
import {Container, Table} from "react-bootstrap";
import GetKey from "../components/modals/GetKey";
import {fetchUserCalculationParameters} from "../http/calculationParameterAPI";

const PersonalAccount = () => {
    const [calculationParameters, setCalculationParameters] = useState([])

    const [getKeyVisible, setGetKeyVisible] = useState(false)

    const [programId, setProgramId] = useState('')
    const [userId, setUserId] = useState('')
    const [workstationsNumber, setWorkstationsNumber] = useState('')
    const [keyExpirationDate, setKeyExpirationDate] = useState('')

    useEffect(() => {
        fetchUserCalculationParameters().then(data => setCalculationParameters(data))
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
                                onClick={() => {
                                    setProgramId(parameter.programId)
                                    setUserId(parameter.userId)
                                    setWorkstationsNumber(parameter.workstationsNumber)
                                    setKeyExpirationDate(new Date(parameter.keyExpirationDate).toLocaleDateString())
                                    setGetKeyVisible(true)
                                }}
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
                programId={programId}
                userId={userId}
                workstationsNumber={workstationsNumber}
                keyExpirationDate={keyExpirationDate}
            />
        </Container>
    );
};

export default PersonalAccount;