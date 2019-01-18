import React, { PureComponent } from 'react';
import { Container, Card, Button, Icon } from 'semantic-ui-react';
import './asistente.css'
import Boton from './boton';
import PropTypes from 'prop-types'

export default class Asistente extends PureComponent {
    // Aquí hay mucho para corregir con Redux

    handleClick = (event) => {

    }

    render(){
        return (
            <Card className="card" onClick={this.handleClick}>
                <Card.Content >
                    <Card.Header className="header">{this.props.nombre1} {this.props.apellido1}</Card.Header> 
                    <Card.Description>{this.props.correo}</Card.Description>
                    <Card.Description>{this.props.id}</Card.Description>
                </Card.Content>
                <Card.Content extra className="buttons">
                    <div className="divider"/>
                    <Button.Group>
                        <Boton id={this.props.id} title="Editar asistente" icon="edit outline" color="green"/>
                        <Boton id={this.props.id} title="Ver asistencias" icon="eye" color="blue"/>
                        <Boton id={this.props.id} title="Eliminar asistente" icon="remove user" color="red" isDelete/>
                    </Button.Group>
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