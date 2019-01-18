import React, { PureComponent } from 'react';
import { Icon, Button, Confirm } from 'semantic-ui-react';

export default class BotonVerAsistencias extends PureComponent {
    render() {
        return (
            <Button circular compact circular className="ui blue button"  title="Ver asistencias">
                <Icon name="eye" />
            </Button>
        );
    }
}