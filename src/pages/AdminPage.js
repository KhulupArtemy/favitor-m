import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateFirstCategory from "../components/modals/CreateFirstCategory";
import CreateLastCategory from "../components/modals/CreateLastCategory";
import CreateAfterCategory from "../components/modals/CreateAfterCategory";
import UpdateOneCategory from "../components/modals/UpdateOneCategory";
import DeleteOneCategory from "../components/modals/DeleteOneCategory";
import CreateAccount from "../components/modals/CreateAccount";
import CreateCalculationParameters from "../components/modals/CreateCalculationParameters";

const AdminPage = () => {
    const [createFirstCategoryVisible, setCreateFirstCategoryVisible] = useState(false)
    const [createLastCategoryVisible, setCreateLastCategoryVisible] = useState(false)
    const [createAfterCategoryVisible, setCreateAfterCategoryVisible] = useState(false)
    const [updateOneCategoryVisible, setUpdateOneCategoryVisible] = useState(false)
    const [deleteOneCategoryVisible, setDeleteOneCategoryVisible] = useState(false)
    const [createAccountVisible, setCreateAccountVisible] = useState(false)
    const [createCalculationParametersVisible, setCreateCalculationParametersVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
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
                onClick={() => setCreateCalculationParametersVisible(true)}
            >
                Добавить расчетные параметры
            </Button>
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
            <CreateAccount 
                show={createAccountVisible}
                onHide={() => setCreateAccountVisible(false)}
            />
            <CreateCalculationParameters
                show={createCalculationParametersVisible}
                onHide={() => setCreateCalculationParametersVisible(false)}
            />
        </Container>
    );
};

export default AdminPage;