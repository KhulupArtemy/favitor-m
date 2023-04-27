import React from 'react';
import {Container} from "react-bootstrap";

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
                    src="https://www.favitor-m.by/gallery_gen/e7444e9bad0095e037711c6c36d859fc_342x470.jpg"
                    alt="Свидетельство о государственной регистрации"
                    style={{width: 342, height: 470}}
                />
            </div>
            <hr className="my-5"/>
            <div className="text-center">
                <h1 className="mb-3 fw-light">Сертификаты</h1>
                <img
                    className="my-3 me-3 img-fluid"
                    src="https://www.favitor-m.by/gallery/attachments-Image-IMG_170725_172408.jpg"
                    alt="Сертификат 1"
                    style={{width: 342, height: 470}}
                />
                <img
                    className="my-3 me-3 img-fluid"
                    src="https://www.favitor-m.by/gallery_gen/a8de408fd2f2b54d248598b4dccba839_342x456.jpg"
                    alt="Сертификат 2"
                    style={{width: 342, height: 470}}
                />
                <img
                    className="my-3 me-3 img-fluid"
                    src="https://www.favitor-m.by/gallery_gen/18997ee33c2866656ea42cca04b774e5_342x456.jpg"
                    alt="Сертификат 3"
                    style={{width: 342, height: 470}}
                />
            </div>
            <hr className="my-5"/>
            <div className="text-center">
                <h1 className="mb-3 fw-light">Патент</h1>
                <img
                    className="my-3 img-fluid"
                    src="https://www.favitor-m.by/gallery_gen/5daf5a71fe331f21647c8bd8710bdb4a_342x467_0x0_342x488.jpg"
                    alt="Патент"
                    style={{width: 342, height: 470}}
                />
            </div>
            <hr className="my-5"/>
            <div className="text-center">
                <h1 className="mb-3 fw-light">Гарантийное письмо</h1>
                <img
                    className="my-3 img-fluid"
                    src="https://www.favitor-m.by/gallery_gen/43d01c80cebbf575a00dcc3d877ea317_334x492.jpg"
                    alt="Гарантийное письмо"
                    style={{width: 342, height: 470}}
                />
            </div>
            <hr className="mt-5"/>
        </Container>
    );
};

export default Certificates;