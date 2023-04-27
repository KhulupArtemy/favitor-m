import React, {useContext, useEffect, useState} from 'react';
import {Button, Container, Table} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {useParams} from "react-router-dom";
import {Context} from "../index";
import {fetchRows} from "../http/itemAPI";
import CreateFirstRow from "../components/modals/CreateFirstRow";
import CreateLastRow from "../components/modals/CreateLastRow";
import CreateAfterRow from "../components/modals/CreateAfterRow";
import UpdateOneRow from "../components/modals/UpdateOneRow";
import DeleteOneRow from "../components/modals/DeleteOneRow";

const Downloads = observer(() => {
    const {user, item} = useContext(Context)
    const {itemId} = useParams()
    const [rows, setRows] = useState([])

    const [createFirstVisible, setCreateFirstVisible] = useState(false)
    const [createLastVisible, setCreateLastVisible] = useState(false)
    const [createAfterVisible, setCreateAfterVisible] = useState(false)
    const [updateOneVisible, setUpdateOneVisible] = useState(false)
    const [deleteOneVisible, setDeleteOneVisible] = useState(false)

    const [rowId, setRowId] = useState('')
    const [eldestRowInformation, setEldestRowInformation] = useState({})

    useEffect(() => {
        fetchRows(itemId).then(data => setRows(data))
    }, [itemId, createFirstVisible, createLastVisible, createAfterVisible, updateOneVisible, deleteOneVisible])

    return (
        <Container>
            <div className="mt-4 text-center">
                <h1 className="fw-normal">{item.items.find(item_ => String(item_.id) === itemId) ? item.items.find(item_ => String(item_.id) === itemId).title : ''}</h1>
            </div>
            {user.isAuth
                ? user.userInfo.userRole === 'ADMIN'
                    ?
                    <div className="d-flex flex-column">
                        <Button
                            variant={"outline-dark"}
                            className="mt-4 p-2"
                            onClick={() => setCreateFirstVisible(true)}
                        >
                            Добавить строку в начало
                        </Button>
                        <Button
                            variant={"outline-dark"}
                            className="mt-4 p-2"
                            onClick={() => setCreateLastVisible(true)}
                        >
                            Добавить строку в конец
                        </Button>
                    </div>
                    : ''
                :
                <p className="mt-4 lead">Авторизуйтесь на сайте чтобы скачивать программы</p>
            }
            <Table className="mt-4 lead" responsive striped bordered>
                <thead>
                {user.isAuth && user.userInfo.userRole === 'ADMIN' && rows.length
                    ?
                    <tr>
                        <th>№ п.п.</th>
                        <th>Наименование программного продукта</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    : user.isAuth && rows.length
                        ?
                        <tr>
                            <th>№ п.п.</th>
                            <th>Наименование программного продукта</th>
                            <th></th>
                        </tr>
                        : rows.length
                            ?
                            <tr>
                                <th>№ п.п.</th>
                                <th>Наименование программного продукта</th>
                            </tr>
                            :
                            <tr>
                                <th>Программы по выбранной категории отсутствуют</th>
                            </tr>
                }
                </thead>
                <tbody>
                {user.isAuth && user.userInfo.userRole === 'ADMIN' && rows.length
                    ?
                    rows.map(row =>
                        <tr key={row.id}>
                            <td>{row.serialNumber}</td>
                            {row.serialNumber
                                ?
                                <td>
                                    <h5>{row.softwareName}</h5>
                                </td>
                                :
                                <td>{row.softwareName}</td>
                            }
                            <td>
                                <a href={row.link}>{row.linkText}</a>
                                {row.softwareVersion ? <br/> : ''}
                                {row.softwareVersion}
                            </td>
                            <td>
                                <Button
                                    variant={"outline"}
                                    className="p-0"
                                    onClick={() => {
                                        setRowId(row.id)
                                        setCreateAfterVisible(true)
                                    }}
                                >
                                    Добавить после строки
                                </Button>
                            </td>
                            <td>
                                <Button
                                    variant={"outline"}
                                    className="p-0"
                                    onClick={() => {
                                        setRowId(row.id)
                                        setEldestRowInformation({
                                            serialNumber: row.serialNumber,
                                            softwareName: row.softwareName,
                                            linkText: row.linkText,
                                            link: row.link,
                                            softwareVersion: row.softwareVersion
                                        })
                                        setUpdateOneVisible(true)
                                    }}
                                >
                                    Изменить строку
                                </Button>
                            </td>
                            <td>
                                <Button
                                    variant={"outline"}
                                    className="p-0"
                                    onClick={() => {
                                        setRowId(row.id)
                                        setDeleteOneVisible(true)
                                    }}
                                >
                                    Удалить строку
                                </Button>
                            </td>
                        </tr>
                    )
                    : user.isAuth && rows.length
                        ?
                        rows.map(row =>
                            <tr key={row.id}>
                                <td>{row.serialNumber}</td>
                                {row.serialNumber
                                    ?
                                    <td>
                                        <h5>{row.softwareName}</h5>
                                    </td>
                                    :
                                    <td>{row.softwareName}</td>
                                }
                                <td>
                                    <a href={row.link}>{row.linkText}</a>
                                    {row.softwareVersion ? <br/> : ''}
                                    {row.softwareVersion}
                                </td>
                            </tr>
                        )
                        : rows.length
                            ?
                            rows.map(row =>
                                <tr key={row.id}>
                                    <td>{row.serialNumber}</td>
                                    {row.serialNumber
                                        ?
                                        <td>
                                            <h5>{row.softwareName}</h5>
                                        </td>
                                        :
                                        <td>{row.softwareName}</td>
                                    }
                                </tr>
                            )
                            : <tr></tr>
                }
                </tbody>
            </Table>
            <CreateFirstRow show={createFirstVisible} onHide={() => setCreateFirstVisible(false)}/>
            <CreateLastRow show={createLastVisible} onHide={() => setCreateLastVisible(false)}/>
            <CreateAfterRow show={createAfterVisible} onHide={() => setCreateAfterVisible(false)} rowId={rowId}/>
            <UpdateOneRow show={updateOneVisible} onHide={() => setUpdateOneVisible(false)} rowId={rowId} eldestRowInformation={eldestRowInformation}/>
            <DeleteOneRow show={deleteOneVisible} onHide={() => setDeleteOneVisible(false)} rowId={rowId}/>
        </Container>
    );
});

export default Downloads;