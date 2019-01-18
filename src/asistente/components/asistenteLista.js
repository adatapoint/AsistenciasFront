import React from 'react'
import Asistente from './asistente'


export default function AsistenteLista (props) {
    const asistentes = props.data.Asistentes
    return (
        <div>
            <h2><p>Asistentes</p></h2>
            {
                asistentes.map((item) => {
                    return <Asistente {...item} key={item.id}/>
                })
            }
        </div>
    )
    
}