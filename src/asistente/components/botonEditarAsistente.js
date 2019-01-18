import React, { PureComponent } from 'react';
import { Icon, Button, Confirm } from 'semantic-ui-react';

export default class BotonEditarAsistente extends PureComponent {
    render() {
        return (
            <Button circular compact circular className="ui green button"  title="Editar asistente">
                <Icon name="edit outline" />
            </Button>
        );
    }
}