import React, { Component } from 'react';
import toptip from '../../styles/toptip.scss';

export default class Toptip extends Component {
    constructor () {
        super();
        this.state = {
            show: true
        }
    }
    toptipHidden () {
        this.setState({
            show: false
        });
    }
    render () {
        const mToptipStyle = {
            height: this.state.show ? `36px` : `0`
        }

        return (
            <div className="m-top" style={mToptipStyle}>
                <div className="u-top-left">
                    <span>网易云课堂微专业，帮助你掌握专业技能，令你求职或加薪多一份独特优势</span>
                    <a className="u-top-link">立即查看&gt;</a>
                </div>

                <div className="u-top-right" onClick={this.toptipHidden.bind(this)}>
                    <i className="u-top-close"></i>
                    <span>不再提醒</span>
                </div>
            </div>
        )
    }
}