import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, Modal, ModalHeader, ModalBody, CardTitle, Row, Breadcrumb, BreadcrumbItem, Button, Label, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import Iframe from 'react-iframe';



function RenderProject({project}){

    if(project.link === null){
        return(
            <div className="col-12 col-md-5 m-1 mx-auto">
                <FadeTransform in
                    transformProps={{
                        exitTransform: 'scale(0.5) translateY(-50%)'
                    }}>
                    <Card>
                        <CardImg width="100%" src={(project.image)} alt={project.name}></CardImg>
                        <CardBody>
                            <CardTitle>{project.name}</CardTitle>
                            <CardText>{project.description}</CardText>
                        </CardBody>
                    </Card>
                    <br/>
                </FadeTransform>
            </div>
        );
    }else{
        return(
            <div className="col-12 m-1 mx-auto">
                <FadeTransform in
                    transformProps={{
                        exitTransform: 'scale(0.5) translateY(-50%)'
                    }}>
                    
                        <Card>
                            <CardImg width="100%" src={(project.image)} alt={project.name}></CardImg>
                            <CardBody>
                                <CardTitle>{project.name}</CardTitle>
                                <CardText>{project.description}</CardText>
                            </CardBody>
                        </Card>
                    
                    <br/>
                </FadeTransform>
            </div>
        )
    }
}


const ProjectDetail = (props) => {
    if (props.project != null){
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/projects">Day Rates and Passes</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.project.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.project.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <RenderProject project={props.project} />
                </div>
            </div>
        );
    }
    else{
        return(
            <div></div>
        );
    }
}


export default ProjectDetail;