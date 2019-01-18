import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import React, { Component } from 'react'
import 'react-tabs/style/react-tabs.css'

function Tabtest(props) {
    return (
        <Tabs>
            <TabList>
                <Tab>Administración</Tab>
                <Tab>Asistentes</Tab>
                <Tab>Asistencias</Tab>
                <Tab>Estadísticas</Tab>
            </TabList>
            <TabPanel>Text for Administración</TabPanel>
            <TabPanel>Text for Asistentes</TabPanel>
            <TabPanel>Text for Asistencias</TabPanel>
            <TabPanel>Text for Estadísticas</TabPanel>
        </Tabs>
    )
}

export default Tabtest