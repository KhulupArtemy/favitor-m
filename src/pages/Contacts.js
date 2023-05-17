import React from 'react';
import {Container} from "react-bootstrap";
import {Telephone} from "react-bootstrap-icons";

const Contacts = () => {
    return (
        <Container>
            <div className="mt-4 text-center">
                <h1 className="fw-normal">Контакты</h1>
            </div>
            <div className="mt-4">
                <h1 className="fw-light">Адрес</h1>
                <p className="lead">Республика Беларусь, г.Минск, ул. Ф.Скорины, 51, офис 126.</p>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2348.897228517876!2d27.696785091525975!3d53.93356966612274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbceae465f46e1%3A0xf516719d4ca6146d!2z0KTQsNCy0LjRgtC-0YAt0Jw!5e0!3m2!1sru!2sby!4v1680774413131!5m2!1sru!2sby"
                    width="600"
                    height="450"
                    style={{maxWidth: "100%"}}
                    loading="lazy"
                    title="Фавитор-М"
                >
                </iframe>
            </div>
            <div className="mt-4">
                <h1 className="fw-light">Время работы</h1>
                <p className="lead">понедельник - пятница с 9-00 до 18-00, суббота, воскресенье - выходной.</p>
            </div>
            <div className="mt-4">
                <h1 className="fw-light">Телефоны</h1>
                <p className="lead">Velcom:</p>
                <ul className="lead p-0" style={{listStyleType: "none"}}>
                    <li><Telephone/> +375 (29) 683-83-31</li>
                </ul>
                <p className="lead">МТС:</p>
                <ul className="lead p-0" style={{listStyleType: "none"}}>
                    <li><Telephone/> +375 (29) 864-48-61</li>
                    <li><Telephone/> +375 (29) 858-96-01</li>
                    <li><Telephone/> +375 (29) 864-40-00</li>
                    <li><Telephone/> +375 (29) 864-52-28</li>
                    <li><Telephone/> +375 (29) 864-12-45</li>
                    <li><Telephone/> +375 (29) 864-57-15</li>
                </ul>
            </div>
            <div className="mt-4">
                <h1 className="fw-light">E-mail</h1>
                <p>
                    <a className="lead" href="mailto:support@favitor-m.by">support@favitor-m.by</a>
                </p>
            </div>
        </Container>
    );
};

export default Contacts;