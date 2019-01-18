import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from '../commons/app'
import AsistenteLista from '../asistente/components/asistenteLista'
import Tabtest from './secciones/containers/tabtest';
import data from '../../docs/asistentes.json'

const container = document.getElementById("app")

ReactDOM.render(<App data={data}/>, container)
// Qué se va a renderizar, dónde se va a renderizar