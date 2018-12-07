import React, { Component, HtmlHTMLAttributes } from 'react'
import flvjs from 'flv.js';

const api = process.env.NODE_ENV === 'development' ? 'emm/' : '';

export default class extends Component {
    constructor(props: any) {
        super(props)
    }

    test<T>(params: T): T {
        return params
    }

    componentDidMount() {
        if (flvjs.isSupported()) {
            const videoElement = document.getElementById('videoElement') as HTMLMediaElement;
            const flvPlayer = flvjs.createPlayer({
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
        return (
            <div>
                <video id="videoElement"></video>
            </div>
        )
    }
}