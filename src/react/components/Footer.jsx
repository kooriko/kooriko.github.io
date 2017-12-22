import React, { Component } from 'react';

import '../../styles/footer.scss';

export default class Footer extends Component {
    constructor () {
        super();
    }

    render () {
        return (
            <footer className="m-footer">
                <div className="m-foot-left">
                    <h2 className="m-foot-title">
                        <span className="en">EDU</span>
                        <span className="ch">网易教育产品部</span>
                    </h2>
                    <address>&copy;2014 icourse163.org 浙ICP备08114786号-1</address>
                    <address>icourses.cn 京ICP备12020869号-2 京公网安备110102000459-2</address>
                </div>
                <div className="m-foot-right">
                    <ul className="link-list">
                        友情链接：
                        <li className="link"><a href="https://open.163.com">网易公开课</a></li>
                        <li className="link"><a href="https://study.163.com/">网易云课堂</a></li>
                        <li className="link"><a href="https://www.icourse163.org/">中国大学MOOC</a></li>
                    </ul>
                    <ul className="link-list">
                        我们：
                        <li className="link"><a>关于</a></li>
                        <li className="link"><a>联系</a></li>
                        <li className="link"><a>关注</a></li>
                    </ul>
                    <ul className="link-list">
                        更多：
                        <li className="link"><a>常见问题</a></li>
                        <li className="link"><a>意见反馈</a></li>
                    </ul>
                </div>
            </footer>
        )
    }
}