import React, { Component } from 'react';

import banner1 from '../../images/banner1.jpg';
import banner2 from '../../images/banner2.jpg';
import banner3 from '../../images/banner3.jpg';

import '../../styles/banner.scss';

export default class Banner extends Component {
    constructor () {
        super();
        this.state = {
            index: 0,
        }

        this.imgList = [ banner1, banner2, banner3 ];
        this.bannerChange = () => {
            this.setState({
                index: (this.state.index + 1) % this.imgList.length
            });
        }
        this.changeId = setInterval(this.bannerChange, 3000);
    }

    bannerStopChange () {
        clearInterval(this.changeId);
    }

    bannerGetChange () {
        this.changeId = setInterval(this.bannerChange, 3000);
    }
    bannerResetChange () {
        this.bannerStopChange();
        this.changeId = setInterval(this.bannerChange, 3000);
    }

    changeImg (index) {
        this.setState({ index });
        this.bannerResetChange();
    }

    render () {
        const activeJudgement = (index) => {
            return this.state.index === index ? 'is-active' : '';
        }

        const imgClass = (index) => {
            const arr = [ 'u-banner-img', activeJudgement(index) ];
            return arr.join(' ');
        }

        const controllerClass = (index) => {
            const arr = [ 'u-banner-controller-item', activeJudgement(index) ];
            return arr.join(' ');
        }

        const controller = (
            <div className="m-banner-controller">
                { this.imgList.map((item, index) => (
                    <i className={ controllerClass(index) } onClick={ this.changeImg.bind(this, index) } key={ index } />
                )) }
            </div>
        )

        return (
            <section className="m-banner">
                { this.imgList.map((item, index) => <img className={ imgClass(index) } src={ item } key={ index } onMouseEnter={ this.bannerStopChange.bind(this) } onMouseLeave={ this.bannerGetChange.bind(this) } />) }
                { controller }
            </section>
        )
    }
}