import React, { Component } from 'react';

import '../../../styles/navigator.scss';

export default class Navigator extends Component {
    constructor () {
        super();
    }
    navChange (flag) {
        const { pageNo, totalPage } = this.props;
        let num;
        if (flag === '-' && pageNo > 0) {
            num = pageNo - 1;
        } else if (flag === '+' && pageNo < totalPage - 1) {
            num = pageNo + 1;
        } else if (typeof flag === 'number') {
            num = flag;
        } else {
            return ;
        }
        this.props.navChangeHandler(num);
    }

    render () {
        const activeJudgement = (index) => {
            return this.props.pageNo === index ? 'is-active' : '';
        }

        const navClass = (index) => {
            const arr = [ 'nav-item', activeJudgement(index) ];
            return arr.join(' ');
        }
        const navigator = Array.apply(null, { length: this.props.totalPage }).map((item, index) => {
            return <a className={ navClass(index) } key={ index } onClick={ this.navChange.bind(this, index) }>{ index + 1 }</a>
        });

        return (
            <nav className="m-course-list-nav">
                <a className="nav-item prev" onClick={ this.navChange.bind(this, '-') }>&lt;</a>
                { navigator }
                <a className="nav-item next" onClick={ this.navChange.bind(this, '+') }>&gt;</a>
            </nav>
        )
    }
}