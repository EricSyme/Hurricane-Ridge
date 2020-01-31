import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, Modal, ModalHeader, ModalBody, CardTitle, Row, Breadcrumb, BreadcrumbItem, Button, Label, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import Iframe from 'react-iframe';
import GoodsTable from './GoodsComponent';
import Menu from './MenuComponent';

class Table extends Component {
    constructor(props) {
       super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
       this.state = { //state is by default an object
          goods: [
            { id: 0, name: 'ITEM', cost: 'USD', description: 'DESCRIPTION' },
             { id: 1, name: 'The Bunny', cost: 21, description: 'Beginner rope-tow' },
             { id: 2, name: 'The Intermediate', cost: 35, description: 'Intermediate rope-tow' },
             { id: 3, name: 'The Poma', cost: 45, description: 'Our advanced Poma platter tow' },
             { id: 4, name: 'Indy Pass', cost: 173, description: 'Heavy Discounts on local mountains' }
          ]
       }
    }

    renderTableData() {
        return this.state.goods.map((good, index) => {
           const { id, name, cost, description } = good //destructuring
           return (
              <tr key={id}>
                 <td className="tablePadding"><strong>{name}</strong></td>
                 <td className="tablePadding"><strong>{cost}</strong></td>
                 <td className="tablePadding"><strong>{description}</strong></td>
              </tr>
           )
        })
     }
 
    render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
       return (
          <div>
             <h1 id='title'></h1>
             <table id='goods'>
               <tbody>
                  {this.renderTableData()}
               </tbody>
            </table>
          </div>
       )
    }
 }
 


function RenderProject({project}){

    if(project.table === true){
        return(
            <div className="col-12 m-1 mx-auto">
                <FadeTransform in
                    transformProps={{
                        exitTransform: 'scale(0.5) translateY(-50%)'
                    }}>
                        <Card>
                            <CardImg width="100%" src={(project.image)} alt={project.name}></CardImg>
                            <CardBody>
                                <CardText>{project.description}</CardText>
                                <CardTitle>{project.name}</CardTitle>
                                <Table/>
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