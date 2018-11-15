import React, { Component } from 'react'
import flvjs from 'flv.js';

export default class extends Component {
    constructor(props: any) {
        super(props)
    }

    componentDidMount() {
        if (flvjs.isSupported()) {
            var videoElement = document.getElementById('videoElement');
            var flvPlayer = flvjs.createPlayer({
                type: 'flv',
                url: 'live/test.flv'
            });
            flvPlayer.attachMediaElement(videoElement);
            flvPlayer.load();
            flvPlayer.play();
        }
    }

    render() {
        return <video id="videoElement"></video>
    }
}