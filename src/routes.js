import {
    ACCOUNT_ROUTE,
    ADMIN_ROUTE,
    CERTIFICATES_ROUTE,
    CONTACTS_ROUTE,
    DOWNLOAD_ROUTE,
    LOGIN_ROUTE,
    MAIN_ROUTE,
    SERVICES_ROUTE
} from "./utils/consts";
import PersonalAccount from "./pages/PersonalAccount";
import Main from "./pages/Main";
import Services from "./pages/Services";
import Certificates from "./pages/Certificates";
import Contacts from "./pages/Contacts";
import Auth from "./pages/Auth";
import Downloads from "./pages/Downloads";
import AdminPage from "./pages/AdminPage";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: AdminPage
    },
    {
        path: ACCOUNT_ROUTE,
        Component: PersonalAccount
    }
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: SERVICES_ROUTE,
        Component: Services
    },
    {
        path: DOWNLOAD_ROUTE + '/:itemId',
        Component: Downloads
    },
    {
        path: CERTIFICATES_ROUTE,
        Component: Certificates
    },
    {
        path: CONTACTS_ROUTE,
        Component: Contacts
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    }
]