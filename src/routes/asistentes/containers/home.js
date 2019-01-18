import React, { Component } from 'react'
import HomeLayout from '../../asistentes/components/home-layout';
import AsistenteLista from '../../../asistente/components/asistenteLista';
import data from '../../../../docs/asistentes'


class Home extends Component {
    render() {
        return (
            <HomeLayout className>
                <AsistenteLista data={data}/>
            </HomeLayout>
        )
    }
}

export default Home