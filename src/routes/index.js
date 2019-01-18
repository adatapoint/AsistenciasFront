import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Asistente from '../asistente/components/asistente.js'
import AsistenteLista from '../asistente/components/asistenteLista'
import data from '../../docs/asistentes.json'

const container = document.getElementById("app")

ReactDOM.render(<AsistenteLista data={data} />,container)
// Qué se va a renderizar, dónde se va a renderizar