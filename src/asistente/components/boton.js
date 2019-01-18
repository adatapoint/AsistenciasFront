import React from 'react';
import { Icon, Button, Confirm } from 'semantic-ui-react';

export default function Boton(props) {
    // {console.log(props.isDelete)}//IsDelete no sirve aquí, pero servirá cuando configure el boton de eliminar asdf
    const {
        icon,
        color,
        title,
    } = props
    return (
        <Button circular compact className={"ui button " + color}  title={title} > 
            <Icon name={icon}/>
        </Button>
    );
}