import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

import Toptip from './react/components/Toptip.jsx';
import Header from './react/components/Header.jsx';
import Banner from './react/components/Banner.jsx';
import Promote from './react/components/Promote.jsx';
import Course from './react/components/Course.jsx';
import Footer from './react/components/Footer.jsx';

class App extends Component {
    render () {
        return (
            <div>
                <Toptip />
                <Header />
                <Banner />
                <Promote />
                <Course />
                <Footer />
            </div>

        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));