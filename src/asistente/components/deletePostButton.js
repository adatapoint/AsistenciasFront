import React, { PureComponent } from 'react';
import { Icon, Button, Confirm } from 'semantic-ui-react';

export default class DeletePostButton extends PureComponent {
    render() {
        return (
            <Button circular basic color='red' title="Eliminar usuario">
                <Icon name="remove user" />
            </Button>
        );
    }
}