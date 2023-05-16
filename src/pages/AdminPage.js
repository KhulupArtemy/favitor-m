import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateFirstCategory from "../components/modals/CreateFirstCategory";
import CreateLastCategory from "../components/modals/CreateLastCategory";
import CreateAfterCategory from "../components/modals/CreateAfterCategory";
import UpdateOneCategory from "../components/modals/UpdateOneCategory";
import DeleteOneCategory from "../components/modals/DeleteOneCategory";
import CreateUserAccount from "../components/modals/CreateUserAccount";
import CreateCalculationParameters from "../components/modals/CreateCalculationParameters";
import {CALCULATION_PARAMETERS_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router-dom";
import UpdateUserLogin from "../components/modals/UpdateUserLogin";
import DeleteUserAccount from "../components/modals/DeleteUserAccount";

const AdminPage = () => {
    const navigate = useNavigate()

    const [createFirstCategoryVisible, setCreateFirstCategoryVisible] = useState(false)
    const [createLastCategoryVisible, setCreateLastCategoryVisible] = useState(false)
    const [createAfterCategoryVisible, setCreateAfterCategoryVisible] = useState(false)
    const [updateOneCategoryVisible, setUpdateOneCategoryVisible] = useState(false)
    const [deleteOneCategoryVisible, setDeleteOneCategoryVisible] = useState(false)
    const [createAccountVisible, setCreateAccountVisible] = useState(false)
    const [updateUserLoginVisible, setUpdateUserLoginVisible] = useState(false)
    const [deleteUserLoginVisible, setDeleteUserLoginVisible] = useState(false)
    const [createCalculationParametersVisible, setCreateCalculationParametersVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <div className="mt-4 text-center">
                <h1 className="fw-normal">Панель администратора</h1>
            </div>
            <hr className="my-5"/>
            <h1 className="fw-light text-center">Редактирование выпадающего списка с категориями ПО</h1>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setCreateFirstCategoryVisible(true)}
            >
                Добавить категорию в начало выпадающего списка
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setCreateLastCategoryVisible(true)}
            >
                Добавить категорию в конец выпадающего списка
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setCreateAfterCategoryVisible(true)}
            >
                Добавить категорию после выбранной категории выпадающего списка
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setUpdateOneCategoryVisible(true)}
            >
                Изменить категорию в выпадающем списке
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setDeleteOneCategoryVisible(true)}
            >
                Удалить категорию из выпадающего списка
            </Button>
            <hr className="my-5"/>
            <h1 className="fw-light text-center">Редактирование аккаунтов пользователей</h1>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setCreateAccountVisible(true)}
            >
                Создать аккаунт
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setUpdateUserLoginVisible(true)}
            >
                Изменить логин пользователя
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setDeleteUserLoginVisible(true)}
            >
                Удалить аккаунт
            </Button>
            <hr className="my-5"/>
            <h1 className="fw-light text-center">Редактирование расчетных параметров</h1>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setCreateCalculationParametersVisible(true)}
            >
                Добавить расчетные параметры
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => navigate(CALCULATION_PARAMETERS_ROUTE)}
            >
                Редактировать расчетные параметры пользователей
            </Button>
            <hr className="my-5"/>
            <CreateFirstCategory
                show={createFirstCategoryVisible}
                onHide={() => setCreateFirstCategoryVisible(false)}
            />
            <CreateLastCategory
                show={createLastCategoryVisible}
                onHide={() => setCreateLastCategoryVisible(false)}
            />
            <CreateAfterCategory
                show={createAfterCategoryVisible}
                onHide={() => setCreateAfterCategoryVisible(false)}
            />
            <UpdateOneCategory
                show={updateOneCategoryVisible}
                onHide={() => setUpdateOneCategoryVisible(false)}
            />
            <DeleteOneCategory
                show={deleteOneCategoryVisible}
                onHide={() => setDeleteOneCategoryVisible(false)}
            />
            <CreateUserAccount
                show={createAccountVisible}
                onHide={() => setCreateAccountVisible(false)}
            />
            <UpdateUserLogin
                show={updateUserLoginVisible}
                onHide={() => setUpdateUserLoginVisible(false)}
            />
            <DeleteUserAccount
                show={deleteUserLoginVisible}
                onHide={() => setDeleteUserLoginVisible(false)}
            />
            <CreateCalculationParameters
                show={createCalculationParametersVisible}
                onHide={() => setCreateCalculationParametersVisible(false)}
            />
        </Container>
    );
};

export default AdminPage;