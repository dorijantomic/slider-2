import React, { Component } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import './AppContainer.scss'
import Slider from '../../components/Slider/Slider'
export default class AppContainer extends Component {
    render() {
        return (
            <div className="container">
                <Navigation className="navigation-top"/>
                <Slider />
                <Navigation className="navigation-bottom"/>
            </div>
        )
    }
}
