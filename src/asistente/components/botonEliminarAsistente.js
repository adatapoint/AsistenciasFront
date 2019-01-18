import React, { PureComponent } from 'react';
import { Icon, Button, Confirm } from 'semantic-ui-react';

export default class BotonEliminarAsistente extends PureComponent {
    render() {
        return (
            <Button circular compact className="ui red button"  title="Eliminar asistente">
                <Icon name="remove user" />
                {console.log("Esto es el deletePostButton - id " + this.props.id)}
            </Button>
        );
    }
}