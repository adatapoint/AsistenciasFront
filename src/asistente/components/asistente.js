import React, { Component } from 'react';
import { Container, Card, Button, Icon } from 'semantic-ui-react';
import './asistente.css'
import DeletePostButton from './deletePostButton';

export default class Asistente extends Component {
    render(){
        return (
            <Card className="card">
                <Card.Content >
                    <Card.Header className="header">Vincent Restrepo</Card.Header> 
                    <Card.Description>vincentrestrepo@gmail.com</Card.Description>
                    <Card.Description>1128439028</Card.Description>
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
                        <DeletePostButton />
                </Card.Content>
            </Card>
        )
    }
}

