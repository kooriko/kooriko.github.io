import React, { Component } from 'react';

import Navigator from './Navigator.jsx';

import '../../../styles/course.scss';

export default class CourseList extends Component {
    constructor () {
        super();
        this.state = {
            type: 10,
            pageNo: 1,
            psize: 20,
            courseList: null,
            totalPage: 0
        }

        this.getCourseList = (() => {
            let cache = '';
    
            return async () => {
                const { type, pageNo, psize } = this.state;
                const params = { type, pageNo, psize };
                const query = Object.entries(params).map(item => item.join('=')).join('&');
                if (cache === query) return true;
                else cache = query;
                const res = await axios.get(`https://study.163.com/webDev/couresByCategory.htm?${query}`);
    
                const { data, status } = res;
                if (status !== 200 || !data) return new Error(`请求失败，请刷新重试。`);
    
                const { list, totalCount, totalPage } = data;
                if (!totalCount || !totalPage || !Array.isArray(list) || !list.length) return new Error(`请求数据为空，请刷新重试。`);
                const result = list.map(item => {
                    const { name, description, provider, learnerCount, price, categoryName, middlePhotoUrl } = item;
                    return { name, provider, learnerCount, price, categoryName, img: middlePhotoUrl, desc: description };
                });
                this.setState({ courseList: result, totalPage });
                return '!';
            }
        })();
    }

    cardChange (index) {
        this.setState({
            type: index,
            pageNo: 1,
        });
    }
    navChangeHandler (pageNo) {
        pageNo++;
        this.setState({ pageNo });
    }

    componentDidUpdate () {
        try {
            this.getCourseList();
        } catch(e) {
            console.error(e);
        }
    }

    componentDidMount () {
        try {
            this.getCourseList();
        } catch (e) {
            console.error(e);
        }
    }

    render () {
        const activeJudgement = (index) => {
            return this.state.type === index ? 'is-active' : '';
        }
        const cardClass = (index) => {
            const arr = [ 'm-course-list-card-item', activeJudgement(index) ];
            return arr.join(' ');
        }

        const courseList = (
            <ul className="m-course-list">
                {
                    this.state.courseList ? this.state.courseList.map((item, index) => {
                        const { name, provider, learnerCount, price, img, categoryName, desc } = item;
                        return (
                            <li className="m-course-item" key={ index }>
                                <div className="m-course-item-img" style={{backgroundImage: `url(${img})`, backgroundSize: 'cover'}} />
                                <div className="m-course-item-main">
                                    <h5 className="u-course-item-name">{ name }</h5>
                                    <h6 className="u-course-item-provider">{ provider }</h6>
                                    <div className="m-course-item-learn">
                                        <i className="u-course-item-headicon" />
                                        <span className="u-course-item-count">{ learnerCount }</span>
                                    </div>
                                    <em className="u-course-item-price">
                                        { price ? `￥${ price }` : '免费！'}
                                    </em>
                                </div>
                                
                                <div className="hover-container">
                                    <div className="main">
                                        <div className="img" style={{backgroundImage: `url(${img})`, backgroundSize: 'cover'}} />
                                        <div className="right">
                                            <h5 className="name">{ name }</h5>
                                            <p className="learn-count">{ learnerCount } 人在学</p>
                                            <p className="provider">发布者：{ provider }</p>
                                            <p className="category">分类：{ categoryName ? categoryName : '无' }</p>
                                        </div>
                                    </div>
                                    <p className="bottom">
                                        { desc }
                                    </p>
                                </div>
                            </li>
                        );
                    }) : null
                }
            </ul>
        )

        return (
            <div className="m-main-course-list">
                <ul className="m-course-list-card">
                    <li className={ cardClass(10) } onClick={ this.cardChange.bind(this, 10) }><a>产品设计</a></li>
                    <li className={ cardClass(20) } onClick={ this.cardChange.bind(this, 20) }><a>编程语言</a></li>
                </ul>

                { courseList }

                <Navigator totalPage={ this.state.totalPage } pageNo={ this.state.pageNo - 1 } navChangeHandler={ ::this.navChangeHandler }/>
            </div>
        )
    }
}
