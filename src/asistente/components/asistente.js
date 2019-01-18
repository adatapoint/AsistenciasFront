import React, { Component } from 'react';
import { Container, Card, Button, Icon } from 'semantic-ui-react';
import './asistente.css'
import DeletePostButton from './deletePostButton';
import PropTypes from 'prop-types'

export default class Asistente extends Component {
    // Aquí hay mucho para corregir con Redux

    constructor(props){
        super(props)
        this.state = {
            nombre1: props.nombre1,
            apellido1: props.apellido1,
            correo: props.correo,
            id: props.id,       
        }
    }

    handleClick = (event) => {
        this.setState({
            
        })
    }
    render(){
        return (
            <Card className="card" onClick={this.handleClick}>
                <Card.Content >
                    <Card.Header className="header">{this.state.nombre1} {this.state.apellido1}</Card.Header> 
                    <Card.Description>{this.state.correo}</Card.Description>
                    <Card.Description>{this.state.id}</Card.Description>
                </Card.Content>
                <div className="divider"/>
                <Card.Content extra className="buttons">
                    <div className="divider"/>
                    <Button.Group>
                        <Button basic circular color='green' title="Editar asistente">
                            <Icon name="edit outline" />
                        </Button>
                        <Button basic circular color='blue' title="Ver asistencias">
                            <Icon name="eye" />
                        </Button>
                    </Button.Group>
                        <div className="divider"/>
                        <DeletePostButton id={this.state.id} />
                </Card.Content>
            </Card>
        )
    }
}

Asistente.propTypes = {
    nombre: PropTypes.string,
    correo: PropTypes.string,
    id: PropTypes.string,
}