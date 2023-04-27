import React, {useState} from 'react';
import {Alert} from "react-bootstrap";

const Notification = () => {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <Alert className="mt-3" variant="warning" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Уважаемые клиенты!</Alert.Heading>
                <p>
                    Доводим до вашего сведения, что с 25 июля 2017 года, единым электронным
                    адресом для обмена почтовой корреспонденцией служебного характера является <b
                    className="text-danger">support@favitor-m.by</b>. Другие, известные Вам почтовые адреса,
                    зарегистрированны на сотрудников компании и являются личными.
                    Использовать эти адреса для обмена служебной информацией не рекомендуется.
                </p>
            </Alert>
        );
    }
};

export default Notification;