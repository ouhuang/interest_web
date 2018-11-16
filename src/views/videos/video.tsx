import React, { Component } from 'react'
import flvjs from 'flv.js';

const api = process.env.NODE_ENV === 'development' ? 'emm/' : '';

export default class extends Component {
    constructor(props: any) {
        super(props)
    }

    componentDidMount() {
        if (flvjs.isSupported()) {
            var videoElement = document.getElementById('videoElement');
            var flvPlayer = flvjs.createPlayer({
                type: 'flv',
                isLive: true,
                url: api + 'rtmp/live?port=1935&app=myapp&stream=test'
            });
            flvPlayer.attachMediaElement(videoElement);
            flvPlayer.load();
            flvPlayer.play();
        }
    }

    render() {
        return <video id="videoElement" ></video>
    }
}