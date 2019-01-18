import React, { PureComponent } from 'react';
import { Container, Card, Button, Icon } from 'semantic-ui-react';
import './asistente.css'
import BotonEliminarAsistente from './botonEliminarAsistente';
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
                        <Button compact className="ui green button" circular title="Editar asistente">
                            <Icon name="edit outline" />
                        </Button>
                        <Button className="ui blue button" compact circular title="Ver asistencias">
                            <Icon name="eye" />
                        </Button>
                        <BotonEliminarAsistente compact="true" id={this.props.id} />
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