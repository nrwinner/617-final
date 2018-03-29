// @flow
import React, { Component } from 'react';
import Video from '../VideoComponent/Video';
// $FlowFixMe
import './Content.scss';

import type { VideoType } from '@/types';
type Props = {
    data: any
}

export default class Content extends Component<Props> {
    // container component
    v: VideoType;

    componentWillReceiveProps(p: any) {
        console.log('tester', p);
    }


    render() {
        this.v = {
            url: this.props.data.byte.materials.youtubeVideo,
            start: ''
        };

        this.props.data.byte.sections.forEach(s => {
            console.log(s);
            if (s.name === '') {
                this.v.start = s.videoIn;
                this.v.stop = s.videoOut;
                return;
            }
        });
        return (
            <div className='content'>
                <Video source={this.v} />
            </div>
        )
    }
}