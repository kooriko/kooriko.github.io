import React, { Component } from 'react';

import '../../styles/modal.scss';

import md5 from 'md5';

export class LoginModal extends Component {
    constructor () {
        super();
        this.state = {
            userName: '',
            password: ''
        }
    }
    async submit () {
        let { userName, password }  = this.state;
        if (!userName || !password) return new Error(`请输入账号和密码`);

        password = md5(password);
        const originQuery = { userName, password };
        const query = Object.entries(originQuery).map(item => item.join(`=`)).join('&');

        const res = await axios.get(`https://study.163.com/webDev/login.htm?${query}`);
        console.log(res);
        const { status, data } = res;
        if (status !== 200 || data == undefined) return new Error(`登录失败，请稍后重试`);

        // if (!data) return new Error(`登录失败，密码错误，请检查后重试`);

        this.props.close({ type: 'success' });
    }
    input (input, event) {
        this.state[input] = event.target.value;
        this.setState(this.state);
    }

    render () {
        return (
            <div className="m-modal">
                <form className="modal-container">
                    <div className="btn-close" onClick={ this.props.close } />
                    <legend className="title">登陆网易云课堂</legend>
                    <input className="ipt-name" type="text" onChange={ this.input.bind(this, 'userName') } value={ this.state.name } placeholder="账号" />
                    <input className="ipt-pwd" type="password" onChange={ this.input.bind(this, 'password') } value={ this.state.password } placeholder="密码" />
                    <input className="btn-submit-hidden" id="submit" type="button" />
                    <label htmlFor="submit" onClick={ this.submit.bind(this) }>
                        <div className="btn-submit" />
                    </label>
                </form>
            </div>
        )
    }
}


export class MediaModal extends Component {
    constructor () {
        super();
        this.state = {}
    }
    render () {
        const videoSrc = `https://mov.bn.netease.com/open-movie/nos/mp4/2014/12/30/SADQ86F5S_shd.mp4`;
        const videoType = `video/mp4; codecs='avc1.42E01E, mp4a.40.2'`;
        return (
            <div className="m-modal">
                <div className="modal-container">
                    <div className="btn-close" onClick={ this.props.close } />
                    <video id="video" type={ videoType } width="900" controls autoPlay preload="metadata">
                        <source src={ videoSrc }/>
                        抱歉，您的浏览器不支持内嵌视频，不过不用担心，你可以 <a href={videoSrc}>下载</a>并用你喜欢的播放器观看!
                    </video>
                </div>
            </div>
        )
    }
}