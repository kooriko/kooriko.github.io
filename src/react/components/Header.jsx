import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { LoginModal } from './modal.jsx';

import '../../styles/header.scss';

export default class Header extends Component {
    constructor () {
        super();
        this.state = {
            hasLogin: false,
            modalIsShow: false,
            hasFollowed: false
        }
    }
    modalShow (flag, status = {}) {
        this.setState({ modalIsShow: flag });
        if (status.type === 'success') {
            this.setState({ hasLogin: true });
            this.follow(true);
        }
    }
    async follow () {
        if (!this.state.hasLogin) {
            this.setState({ modalIsShow: true });
            return ;
        }
        const res = await axios.get(`https://study.163.com/webDev/attention.htm`);

        const { status, data } = res;
        if (status !== 200 || data == undefined) return new Error(`关注失败，请稍后重试`);

        this.setState({ hasFollowed: Boolean(data) });
    }
    render () {
        const app = document.getElementById('app');

        const buttonClass = () => {
            const arr = ['u-head-follow-btn', this.state.hasFollowed ? 'followed' : '' ];
            return arr.join(' ');
        }

        const linkList = [{
            name: '网易公开课',
            url: 'https://open.163.com'
        }, {
            name: '云课堂',
            url: 'https://study.163.com/'
        }, {
            name: '中国大学MOOC',
            url: 'https://www.icourse163.org/'
        }];


        const links = (
            <ul className="m-head-linklist">
                { linkList.map((item, index) => (
                        <li className="u-head-link" key={ index }>
                            <a href={ item.url }>{ item.name }</a>
                        </li>
                    )
                )}
            </ul>)

        return (
            <header className="m-header">
                <hgroup className="m-head-left">
                    <h1 className="u-head-title">
                        <span className="u-head-title-en">
                            EDU
                        </span>
                        <span className="u-head-title-ch">
                            网易教育产品部
                        </span>
                    </h1>
                    <button className={ buttonClass() } onClick={ this.follow.bind(this) }>
                        <i className="u-head-follow-icon" />
                        <span>关注</span>
                    </button>
                    <span className="u-head-follow-text">
                        粉丝 { this.state.hasFollowed ? 46 : 45 }
                    </span>
                </hgroup>

                <nav className="m-head-right">
                    { links }
                    <i className="u-head-search" />
                </nav>

                { this.state.modalIsShow ? 
                    ReactDOM.createPortal(<LoginModal close={ this.modalShow.bind(this, false) }/>, app) : null }
            </header>
        )
    }
}
