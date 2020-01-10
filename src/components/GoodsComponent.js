import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, Modal, ModalHeader, ModalBody, CardTitle, Row, Breadcrumb, BreadcrumbItem, Button, Label, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';




const Goods = (props) => {
    const goods = props.goods.map((good) => {
    if(good.cost !== null){
        return(
            <tr key={id}>
               <td>{id}</td>
               <td>{name}</td>
               <td>{cost}</td>
               <td>{description}</td>
            </tr>
        );
    }
    })
});


class Goods extends Component {
    constructor(props) {
        super(props)

    }

    renderGoodsData() {
        return this.props.goods.map((good, index) => {
            const { id, name, cost, description } = good //destructuring
            return(
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{cost}</td>
                    <td>{description}</td>
                </tr>
            );
        });
    }

    render(){
        return(
            <div>
                <h1>All-day Lift Prices</h1>
                <table id= 'goods'>
                    <tbody>
                        {this.renderGoodsData()}
                    </tbody>
                </table>
            </div>
        );
    }
}


export default Goods;