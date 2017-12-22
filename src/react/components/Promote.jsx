import React, { Component } from 'react';

import logo0 from '../../images/logo1.png';
import logo1 from '../../images/logo2.png';
import logo2 from '../../images/logo3.png';

import '../../styles/promote.scss';

export default class Promote extends Component {
    render () {
        const template = [{
            name: '网易公开课',
            desc: '推出国内外名校公开课，涉及广泛的学科，名校老师认真讲解深度剖析，网易视频公开课频道搭建起强有力的网络视频教学平台。',
            img: logo0,
            url: 'https://open.163.com'
        }, {
            name: '云课堂',
            desc: '网易旗下大型在线学习平台，该平台面向学习者提供海量免费、优质课程,创新的个性化学习体验，自由开放的交流互动环境。',
            img: logo1,
            url: 'https://study.163.com/'
        }, {
            name: '中国MOOC',
            desc: '是爱课程网携手云课堂打造的在线学习平台，每一个有提升愿望的人,都可以在这里学习中国最好的大学课程，学完还能获得认证证书。',
            img: logo2,
            url: 'https://www.icourse163.org/'
        }];

        const promotes = template.map((item, index) => {
            const { name, desc, img, url } = item;
            return (
                <li className="promote" key={index}>
                    <img src={ img } className="logo" width="80" height="80"/>
                    <div className="detail">
                        <h3 className="title">{ name }</h3>
                        <p className="desc">{ desc }</p>
                        <a className="link" href={ url }>了解更多 &gt;</a>
                    </div>
                </li>
            )
        })
        return (
            <ul className="m-promotes">
                { promotes }
            </ul>
        )
    }
}