import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, Modal, ModalHeader, ModalBody, CardTitle, Row, Breadcrumb, BreadcrumbItem, Button, Label, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';




const Goods = (props) => {
    const goods = props.goods.map((good) => {
    if(good.cost !== null){
        return(
            <tr key={good.id} className="col-12 col-md-4 m-1 mx-auto">
               <td>{good.id}</td>
               <td>{good.name}</td>
               <td>{good.cost}</td>
               <td>{good.description}</td>
            </tr>
        );
    } else {
        return (
            <div></div>
        );
        }
    });

    return(
        /*<div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Day Rates and Passes</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3 className="" id="black">Day Rates and Passes</h3>
                    <hr />
                </div>                
            </div>*/ 
        <div className="container projects">
            
            <div className="row">
                {goods}
            </div>
        </div>
    );
}




export default Goods;