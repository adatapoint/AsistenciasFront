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
                        return <Asistente {...item} key={item.id}/>
                    })
                }
            </div>
        )
    }
}