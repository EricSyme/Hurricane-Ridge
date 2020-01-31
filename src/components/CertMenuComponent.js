import React from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderCertMenuItem ({certificate}) {
    return (
        <Card>
            <CardTitle id="black">{certificate.name}</CardTitle>
                <CardImg width="100%" src={certificate.webcam} alt={certificate.name} />
        </Card>
    );
}

const CertMenu = (props) => {

    const certMenu = props.certificates.map((certificate) => {
        if (certificate.featured !== true) {
            return (
                <div key={certificate.id} className="col-12 col-md-5 m-1 mx-auto">
                    <RenderCertMenuItem certificate={certificate} />
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    });

    return (
        <div className="container certificates">
            <div className="row ">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Cameras</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Cameras</h3>
                        <hr />
                    </div>                
                </div>
            <div className="row ">
                {certMenu}
            </div>
        </div>
    );
}


export default CertMenu;