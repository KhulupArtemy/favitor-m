import React, {useContext, useEffect, useState} from 'react';
import {Button, Container, Table} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {useParams} from "react-router-dom";
import {Context} from "../index";
import CreateFirstProgram from "../components/modals/CreateFirstProgram";
import CreateLastProgram from "../components/modals/CreateLastProgram";
import CreateAfterProgram from "../components/modals/CreateAfterProgram";
import UpdateOneProgram from "../components/modals/UpdateOneProgram";
import DeleteOneProgram from "../components/modals/DeleteOneProgram";
import {fetchProgramsSelectedCategory} from "../http/programAPI";

const Programs = observer(() => {
    const {user, categories} = useContext(Context)
    const {programCategoryId} = useParams()
    const [programs, setPrograms] = useState([])

    const [createFirstProgramVisible, setCreateFirstProgramVisible] = useState(false)
    const [createLastProgramVisible, setCreateLastProgramVisible] = useState(false)
    const [createAfterProgramVisible, setCreateAfterProgramVisible] = useState(false)
    const [updateOneProgramVisible, setUpdateOneProgramVisible] = useState(false)
    const [deleteOneProgramVisible, setDeleteOneProgramVisible] = useState(false)

    const [programId, setProgramId] = useState('')
    const [eldestProgramInformation, setEldestProgramInformation] = useState({})

    useEffect(() => {
        fetchProgramsSelectedCategory(programCategoryId).then(data => setPrograms(data))
    }, [programCategoryId,
        createFirstProgramVisible,
        createLastProgramVisible,
        createAfterProgramVisible,
        updateOneProgramVisible,
        deleteOneProgramVisible
    ])

    return (
        <Container>
            <div className="mt-4 text-center">
                <h1 className="fw-normal">
                    {categories.programCategories.find(category => String(category.id) === programCategoryId)
                        ? categories.programCategories.find(category => String(category.id) === programCategoryId).nameCategory
                        : 'Категория не найдена'
                    }
                </h1>
            </div>
            {user.isAuth
                ? user.userInfo.userRole === 'ADMIN'
                    ?
                    <div className="d-flex flex-column">
                        <Button
                            variant={"outline-dark"}
                            className="mt-4 p-2"
                            onClick={() => setCreateFirstProgramVisible(true)}
                        >
                            Добавить строку в начало
                        </Button>
                        <Button
                            variant={"outline-dark"}
                            className="mt-4 p-2"
                            onClick={() => setCreateLastProgramVisible(true)}
                        >
                            Добавить строку в конец
                        </Button>
                    </div>
                    : ''
                :
                <div className="mt-4 lead">Авторизуйтесь на сайте чтобы скачивать программы в личном кабинете</div>
            }
            <Table className="mt-4 lead" responsive striped bordered>
                <thead>
                {user.isAuth && user.userInfo.userRole === 'ADMIN' && programs.length
                    ?
                    <tr>
                        <th>№</th>
                        <th>Наименование программного продукта</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    : programs.length
                        ?
                        <tr>
                            <th>№</th>
                            <th>Наименование программного продукта</th>
                        </tr>
                        :
                        <tr>
                            <th>Программы по выбранной категории отсутствуют</th>
                        </tr>
                }
                </thead>
                <tbody>
                {user.isAuth && user.userInfo.userRole === 'ADMIN' && programs.length
                    ?
                    programs.map(program =>
                        <tr key={program.id}>
                            <td>{program.programPosition}</td>
                            <td>{program.softwareName}</td>
                            <td>
                                <div
                                    style={{cursor: "pointer"}}
                                    onClick={() => {
                                        setProgramId(program.id)
                                        setCreateAfterProgramVisible(true)
                                    }}
                                >
                                    Добавить после
                                </div>
                            </td>
                            <td>
                                <div
                                    style={{cursor: "pointer"}}
                                    onClick={() => {
                                        setProgramId(program.id)
                                        setEldestProgramInformation({
                                            softwareName: program.softwareName,
                                        })
                                        setUpdateOneProgramVisible(true)
                                    }}
                                >
                                    Изменить
                                </div>
                            </td>
                            <td>
                                <div
                                    style={{cursor: "pointer"}}
                                    onClick={() => {
                                        setProgramId(program.id)
                                        setDeleteOneProgramVisible(true)
                                    }}
                                >
                                    Удалить
                                </div>
                            </td>
                        </tr>
                    )
                    : programs.length
                        ?
                        programs.map(program =>
                            <tr key={program.id}>
                                <td>{program.programPosition}</td>
                                <td>{program.softwareName}</td>
                            </tr>
                        )
                        :
                        <tr></tr>
                }
                </tbody>
            </Table>
            <CreateFirstProgram
                show={createFirstProgramVisible}
                onHide={() => setCreateFirstProgramVisible(false)}
            />
            <CreateLastProgram
                show={createLastProgramVisible}
                onHide={() => setCreateLastProgramVisible(false)}
            />
            <CreateAfterProgram
                show={createAfterProgramVisible}
                onHide={() => setCreateAfterProgramVisible(false)}
                id={programId}
            />
            <UpdateOneProgram
                show={updateOneProgramVisible}
                onHide={() => setUpdateOneProgramVisible(false)}
                id={programId}
                eldestProgramInformation={eldestProgramInformation}
            />
            <DeleteOneProgram
                show={deleteOneProgramVisible}
                onHide={() => setDeleteOneProgramVisible(false)}
                id={programId}
            />
        </Container>
    );
});

export default Programs;