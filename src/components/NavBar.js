import React, {useContext, useEffect} from 'react';
import {
    ACCOUNT_ROUTE, ADMIN_ROUTE,
    CERTIFICATES_ROUTE,
    CONTACTS_ROUTE, DOWNLOAD_ROUTE,
    LOGIN_ROUTE,
    MAIN_ROUTE,
    SERVICES_ROUTE
} from "../utils/consts";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {NavLink, useNavigate} from "react-router-dom";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {fetchItems} from "../http/itemAPI";

const NavBar = observer(() => {
    const {user, item} = useContext(Context)
    const navigate = useNavigate()

    useEffect(() => {
        fetchItems().then(data => item.setItems(data))
    }, [item])

    const logOut = () => {
        localStorage.clear()
        user.setIsAuth(false)
        user.setUser({})
        alert("Вы вышли из аккаунта")
    }

    return (
        <Navbar bg="dark" variant="dark" expand="md">
            <Container>
                <NavLink style={{color: 'white', textDecoration: 'none'}} to={MAIN_ROUTE}>
                    <h4>
                        ФАВИТОР-М
                    </h4>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {user.isAuth
                            ?
                            <Nav className="ms-auto">
                                <Nav.Link
                                    onClick={() => navigate(SERVICES_ROUTE)}
                                >
                                    Услуги
                                </Nav.Link>
                                <NavDropdown title="Скачать" id="basic-nav-dropdown">
                                    {Object(item.items.map(item_ =>
                                        <NavDropdown.Item
                                            key={item_.id}
                                            onClick={() => navigate(DOWNLOAD_ROUTE + '/' + item_.id)}
                                        >
                                            {item_.title}
                                        </NavDropdown.Item>
                                    ))}
                                </NavDropdown>
                                <Nav.Link
                                    onClick={() => navigate(CERTIFICATES_ROUTE)}
                                >
                                    Сертификаты
                                </Nav.Link>
                                <Nav.Link
                                    onClick={() => navigate(CONTACTS_ROUTE)}
                                >
                                    Контакты
                                </Nav.Link>
                                {user.userInfo.userRole === 'ADMIN'
                                    ?
                                    <Nav.Link
                                        onClick={() => navigate(ADMIN_ROUTE)}
                                    >
                                        Панель администратора
                                    </Nav.Link>
                                    :
                                    <Nav.Link
                                        onClick={() => navigate(ACCOUNT_ROUTE)}
                                    >
                                        Личный кабинет
                                    </Nav.Link>
                                }
                                <Nav.Link
                                    onClick={() => logOut()}
                                >
                                    Выйти
                                </Nav.Link>
                            </Nav>
                            :
                            <Nav className="ms-auto">
                                <Nav.Link
                                    onClick={() => navigate(SERVICES_ROUTE)}
                                >
                                    Услуги
                                </Nav.Link>
                                <NavDropdown title="Скачать" id="basic-nav-dropdown">
                                    {Object(item.items.map(item_ =>
                                        <NavDropdown.Item
                                            key={item_.id}
                                            onClick={() => navigate(DOWNLOAD_ROUTE + '/' + item_.id)}
                                        >
                                            {item_.title}
                                        </NavDropdown.Item>
                                    ))}
                                </NavDropdown>
                                <Nav.Link
                                    onClick={() => navigate(CERTIFICATES_ROUTE)}
                                >
                                    Сертификаты
                                </Nav.Link>
                                <Nav.Link
                                    onClick={() => navigate(CONTACTS_ROUTE)}
                                >
                                    Контакты
                                </Nav.Link>
                                <Nav.Link
                                    onClick={() => navigate(LOGIN_ROUTE)}
                                >
                                    Авторизация
                                </Nav.Link>
                            </Nav>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
});

export default NavBar;