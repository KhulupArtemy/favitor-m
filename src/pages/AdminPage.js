import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateFirstItem from "../components/modals/CreateFirstItem";
import CreateLastItem from "../components/modals/CreateLastItem";
import CreateAfterItem from "../components/modals/CreateAfterItem";
import UpdateOneItem from "../components/modals/UpdateOneItem";
import DeleteOneItem from "../components/modals/DeleteOneItem";
import CreateAccount from "../components/modals/CreateAccount";

const AdminPage = () => {
    const [createFirstVisible, setCreateFirstVisible] = useState(false)
    const [createLastVisible, setCreateLastVisible] = useState(false)
    const [createAfterVisible, setCreateAfterVisible] = useState(false)
    const [updateOneVisible, setUpdateOneVisible] = useState(false)
    const [deleteOneVisible, setDeleteOneVisible] = useState(false)
    const [createAccountVisible, setCreateAccountVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setCreateFirstVisible(true)}
            >
                Добавить элемент списка в начало
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setCreateLastVisible(true)}
            >
                Добавить элемент списка в конец
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setCreateAfterVisible(true)}
            >
                Добавить элемент списка после выбранного элемента
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setUpdateOneVisible(true)}
            >
                Изменить элемент списка
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setDeleteOneVisible(true)}
            >
                Удалить элемент списка
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setCreateAccountVisible(true)}
            >
                Создать аккаунт
            </Button>
            <CreateFirstItem show={createFirstVisible} onHide={() => setCreateFirstVisible(false)}/>
            <CreateLastItem show={createLastVisible} onHide={() => setCreateLastVisible(false)}/>
            <CreateAfterItem show={createAfterVisible} onHide={() => setCreateAfterVisible(false)}/>
            <UpdateOneItem show={updateOneVisible} onHide={() => setUpdateOneVisible(false)}/>
            <DeleteOneItem show={deleteOneVisible} onHide={() => setDeleteOneVisible(false)}/>
            <CreateAccount show={createAccountVisible} onHide={() => setCreateAccountVisible(false)}/>
        </Container>
    );
};

export default AdminPage;