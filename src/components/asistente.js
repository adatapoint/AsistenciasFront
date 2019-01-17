import React, { Component } from 'react';
import { Container, Card, Button, Icon } from 'semantic-ui-react';
import './asistente.css'

export default class Asistente extends Component {
    render(){
        return (
            <Container className="container">
                <Card.Content >
                    <Card.Header className="header">Vincent Restrepo - vincentrestrepo@gmail.com</Card.Header> 
                    <Card.Description>Cc. 1128439028</Card.Description>
                </Card.Content>
                <div className="divider"/>
                <Card.Content extra>
                    <Button basic circular color='grey' title="Editar asistente">
                        <Icon name="edit outline" />
                    </Button>
                    <div className="divider"/>
                    <Button.Group>
                        <Button basic color='green' title="Ver detalle">
                            <Icon name="vcard"/>
                        </Button>
                        <Button basic circular color='blue' title="Ver asistencias">
                            <Icon name="eye" />
                        </Button>
                    </Button.Group>
                        <div className="divider"/>
                        <Button circular basic color='red' title="Eliminar usuario">
                            <Icon name="remove user" />
                        </Button>
                </Card.Content>
            </Container>
        )
    }
}

