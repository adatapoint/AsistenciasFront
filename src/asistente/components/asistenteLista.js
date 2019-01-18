import React, { Component } from 'react'
import Asistente from './asistente'


export default class AsistenteLista extends Component {
    render(){
        console.log(this.props.data)
        const asistentes = this.props.data.Asistentes
        return (
            <div>
                {
                    asistentes.map((item) => {
                        return <Asistente key={item.id} nombre1={item.nombre1} apellido1={item.apellido1} id={item.id} correo={item.correo}/>
                    })
                }
            </div>
        )
    }
}