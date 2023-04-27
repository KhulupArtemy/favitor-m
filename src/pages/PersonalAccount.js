import React, {useState} from 'react';
import {Container, Table} from "react-bootstrap";

const PersonalAccount = () => {
    const [itemRows, setItemRows] = useState([
        {id: '1', softwareNumber: '1', softwareName: 'Программа1', keyExpirationDate: '2024-04-21'},
        {id: '2', softwareNumber: '2', softwareName: 'Программа2', keyExpirationDate: '2024-04-21'},
        {id: '3', softwareNumber: '3', softwareName: 'Программа3', keyExpirationDate: '2024-04-21'},
        {id: '4', softwareNumber: '4', softwareName: 'Программа4', keyExpirationDate: '2024-04-21'}
    ])

    return (
        <Container className="d-flex flex-column">
            <div className="mt-4 text-center">
                <h1 className="fw-normal">Личный кабинет</h1>
            </div>
            <Table className="mt-2 lead" responsive striped bordered>
                <thead>
                {itemRows.length
                    ?
                    <tr>
                        <th>№</th>
                        <th>Наименование программного продукта</th>
                        <th></th>
                        <th></th>
                    </tr>
                    :
                    <tr>
                        <th>Для вашей учетной записи не найдено программ для которых можно получить регистрационный ключ</th>
                    </tr>
                }
                </thead>
                <tbody>
                {itemRows.map(item =>
                    <tr key={Number(item.id)}>
                        <td>{item.softwareNumber}</td>
                        <td>{item.softwareName}</td>
                        <td>Скачать</td>
                        <td>Получить регистрационный ключ</td>
                    </tr>
                )}
                </tbody>
            </Table>
        </Container>
    );
};

export default PersonalAccount;