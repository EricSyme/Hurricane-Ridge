import React from 'react';
import { Card, CardImg, CardText, CardBody, Modal, ModalHeader, ModalBody, CardTitle, Row, Breadcrumb, BreadcrumbItem, Button, Label, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';




function RenderGoodsTableItem ({good}) {
    return (
        <div>
            <tr key={good.id}>
                <td>{good.id}</td>
                <td>{good.name}</td>
                <td>{good.cost}</td>
                <td>{good.description}</td>
            </tr>
        </div>
    );
}


const GoodsTable = (props) => {
    const table = props.goods.map((good) => {
        if (good.cost !== null) {
            return (
                <div key= {good.id} className="col-12 col-md-4 m-1 mx-auto">
                    <RenderGoodsTableItem good={good} />
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    })
    
        return (
         <div>
            <h1 id='title'>React Dynamic Table</h1>
            <table id='goods'>
               <tbody>
                  {table}
               </tbody>
            </table>
         </div>
        );
 }


export default GoodsTable;