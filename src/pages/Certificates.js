import React from 'react';
import {Container} from "react-bootstrap";
import stateRegistrationCertificate from "../img/state-registration-certificate.jpg";
import certificate1 from "../img/certificate1.jpg";
import certificate2 from "../img/certificate2.jpg";
import certificate3 from "../img/certificate3.jpg";
import patent from "../img/patent.jpg";
import letterOfGuarantee from "../img/letter-of-guarantee.jpg";

const Certificates = () => {
    return (
        <Container>
            <div className="mt-4 text-center">
                <h1 className="fw-normal">Сертификаты и лицензии</h1>
            </div>
            <hr className="my-5"/>
            <div className="text-center">
                <h1 className="mb-3 fw-light">Свидетельство о государственной регистрации</h1>
                <img
                    className="my-3 img-fluid"
                    width="342"
                    height="470"
                    src={stateRegistrationCertificate}
                    alt="Свидетельство о государственной регистрации"
                />
            </div>
            <hr className="my-5"/>
            <div className="text-center">
                <h1 className="mb-3 fw-light">Сертификаты</h1>
                <img
                    className="my-3 me-3 img-fluid"
                    width="342"
                    height="470"
                    src={certificate1}
                    alt="Сертификат 1"
                />
                <img
                    className="my-3 me-3 img-fluid"
                    width="342"
                    height="470"
                    src={certificate2}
                    alt="Сертификат 2"
                />
                <img
                    className="my-3 me-3 img-fluid"
                    width="342"
                    height="470"
                    src={certificate3}
                    alt="Сертификат 3"
                />
            </div>
            <hr className="my-5"/>
            <div className="text-center">
                <h1 className="mb-3 fw-light">Патент</h1>
                <img
                    className="my-3 img-fluid"
                    width="342"
                    height="470"
                    src={patent}
                    alt="Патент"
                />
            </div>
            <hr className="my-5"/>
            <div className="text-center">
                <h1 className="mb-3 fw-light">Гарантийное письмо</h1>
                <img
                    className="my-3 img-fluid"
                    width="342"
                    height="470"
                    src={letterOfGuarantee}
                    alt="Гарантийное письмо"
                />
            </div>
            <hr className="mt-5"/>
        </Container>
    );
};

export default Certificates;