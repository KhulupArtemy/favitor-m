import React from 'react';
import {Container} from "react-bootstrap";
import Notification from "../components/Notification";
import aboutUsPicture from "../img/about-us.jpg";
import experiencePicture from "../img/experience.jpg";
import realizationPicture from "../img/realization.jpg";

const Main = () => {
    return (
        <Container>

            <Notification/>
            <div className="mt-4 text-center">
                <h1 className="fw-normal">ООО "ФАВИТОР-М"</h1>
                <h4 className="fw-light">Более 15 лет на рынке IT-услуг</h4>
            </div>
            <hr className="my-5"/>
            <div className="row">
                <div className="col-md-7">
                    <h1 className="my-5 fw-light">О нас</h1>
                    <p className="mt-5 lead">Компания "ФАВИТОР-М" уже более 15 лет предоставляет услуги по разработке,
                        внедрению и
                        сопровождению специализированных программных решений. За это время мы приобрели репутацию
                        надежного партнера,
                        заботящегося о качестве разрабатываемого продукта и постоянно повышающего уровень оказания
                        услуг. Наши
                        специалисты с радостью помогут Вам решить любые задачи из области компьютерной техники.
                    </p>
                </div>
                <div className="col-md-5">
                    <img
                        className="img-fluid mx-auto"
                        width="500"
                        height="500"
                        src={aboutUsPicture}
                        alt="О нас"
                    />
                </div>
            </div>
            <hr className="my-5"/>
            <div className="row">
                <div className="col-md-7 order-md-2">
                    <h1 className="my-5 fw-light">Что мы предлагаем</h1>
                    <p className="mt-5 lead">Мы предлагаем качественную и своевременную техническую поддержку наших
                        продуктов,
                        а так же разработанного по Вашему заказу программного обеспечения.</p>
                </div>
                <div className="col-md-5 order-md-1">
                    <img
                        className="img-fluid mx-auto"
                        width="500"
                        height="500"
                        src={experiencePicture}
                        alt="Что мы предлагаем"
                    />
                </div>
            </div>
            <hr className="my-5"/>
            <div className="row">
                <div className="col-md-7">
                    <h1 className="my-5 fw-light">Реализация проекта</h1>
                    <p className="mt-5 lead">Чтобы обсудить с нами потенциальный проект, нет необходимости в
                        предоставлении полной проектной документации.
                        Просто позвоните нам, и мы договоримся о личной встрече для обсуждения целей проекта и вариантов
                        их реализации.
                    </p>
                </div>
                <div className="col-md-5">
                    <img
                        className="img-fluid mx-auto"
                        width="500"
                        height="500"
                        src={realizationPicture}
                        alt="Реализация проекта"
                    />
                </div>
            </div>
            <hr className="mt-5"/>
            {/*
            <div className="mt-4">
                <h5>Уважаемые клиенты</h5>
                <p>Доводим до вашего сведения, что с 25 июля 2017 года,
                    единым электронным адресом для обмена почтовой корреспонденцией
                    служебного характера является "support@favitor-m.by". Другие,
                    известные Вам почтовые адреса, зарегистрированные на сотрудников
                    компании и являются личными. Использовать эти адреса для обмена
                    служебной информацией не рекомендуется.
                </p>
                <p style={{color: "red"}}>
                    Впредь всю служебную корреспонденцию отправлять на этот адрес "support@favitor-m.by".
                </p>
            </div>
            <div className="mt-4">
                <h5>О нас</h5>
                <p>Компания "ФАВИТОР-М" уже более 15 лет предоставляет услуги по разработке,
                    внедрению и сопровождению специализированных программных решений. За это
                    время мы приобрели репутацию надежного партнера, заботящегося о качестве
                    разрабатываемого продукта и постоянно повышающего уровень оказания услуг.
                    Наши специалисты с радостью помогут Вам решить любые задачи из области
                    компьютерной техники.
                </p>
                <p>Мы предлагаем качественную и своевременную техническую поддержку наших продуктов,
                    а так же разработанного по Вашему заказу программного обеспечения.
                </p>
                <img
                    className="mb-3 img-fluid"
                    src="https://www.favitor-m.by/gallery_gen/6ea9f83319c9a9830dde9db0bf77d7fe.gif"
                    alt="Картинка"
                />
                <p>Чтобы обсудить с нами потенциальный проект, нет необходимости в предоставлении
                    полной проектной документации. Просто позвоните нам, и мы договоримся о личной
                    встрече для обсуждения целей проекта и вариантов их реализации.
                </p>
            </div>
            */}
        </Container>
    );
};

export default Main;