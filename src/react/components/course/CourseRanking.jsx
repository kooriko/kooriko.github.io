import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../../../styles/courseRanking.scss';

import { MediaModal } from '../modal.jsx';

export default class CourseRanking extends Component {
    constructor () {
        super();
        this.state = {
            rankList: null,
            active: false,
            modalIsShow: false
        };
        setInterval(() => {
            let { rankList } = this.state;
            if (!rankList) return ;
            this.setState({ active: true });

            setTimeout(() => {
                rankList.push(...rankList.splice(0, 1));
                this.setState({ active: false });
            }, 600);
        }, 3000);
    }

    async getRankList () {
        const res = await axios.get(`https://study.163.com/webDev/hotcouresByCategory.htm`);
        const { data, status } = res;
        if (status !== 200 || !data) return new Error(`请求排行列表数据失败`);
        if (!Array.isArray(data) || !data.length) return new Error(`列表数据为空`);

        const result = data.map(item => {
            const { smallPhotoUrl, name, provider, learnerCount } = item;
            return { name, img: smallPhotoUrl, count: learnerCount };
        });
        this.setState({ rankList: result });
    }

    componentDidMount () {
        try {
            this.getRankList();
        } catch (e) {
            console.error(e);
        }
    }

    modalShow (flag) {
        this.setState({ modalIsShow: flag });
    }

    render () {
        const app = document.getElementById('app');

        const rankList = this.state.rankList ? this.state.rankList.map((item, index) => {
            const { img, name, count } = item;
            return (
                <li className="rank-item" key={ index }>
                    <div className="img" style={{
                        backgroundImage: `url(${img})`, 
                        backgroundSize: 'cover', 
                        backgroundPosition: '50%', 
                        backgroundRepeat: 'no-repeat'
                    }} />
                    <div className="content">
                        <h5 className="name">{ name }</h5>
                        <i className="headicon"/><span className="count">{ count }</span>
                    </div>
                </li>
            )
        }) : null;

        return (
            <aside className="m-main-course-ranking">
                <div className="m-introduct">
                    <h5 className="title">机构介绍</h5>
                    <div className="media">
                        <p>观看下面的视频来了解吧：</p>
                        <div className="video" onClick={ this.modalShow.bind(this, true) } />
                    </div>
                </div>
                <div className="m-ranking">
                    <h5 className="title">最热排行</h5>
                    <div className="viewport">
                        <ul className={ this.state.active ? 'is-active rank-list' : 'rank-list' }>
                            { rankList }
                        </ul>
                    </div>
                </div>
                { this.state.modalIsShow ? 
                    ReactDOM.createPortal(<MediaModal close={ this.modalShow.bind(this, false) } />, app) : null }
            </aside>
        )
    }
}