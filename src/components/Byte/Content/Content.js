// @flow
import React, { Component } from 'react';
import Video from '../VideoComponent/Video';
// $FlowFixMe
import './Content.scss';

import type { VideoType } from '@/types';

// Redux
import { connect } from 'react-redux';

type Props = {
    activeSection: any;
    byte: any;
}

class Content extends Component<Props> {
    // container component
    v: VideoType;

    constructor(p: Props) {
        super(p);
        this.initVideo(this.props.activeSection);
    }

    componentWillReceiveProps(nextProps) {
        this.initVideo(nextProps.activeSection);
    }


    render() {

        return (
            <div className='content'>
                <Video source={this.v} />
            </div>
        );
    }

    initVideo(section) {
        this.v = {
            url: this.props.byte.materials.youtubeVideo,
            start: ''
        };


        let s = this.props.byte.sections.filter(x => x.name === section)[0];
        this.v.start = s.videoIn;
        this.v.stop = s.videoOut;
    }
}

const mapStateToProps = state => ({
    byte: state.consumingByte,
    activeSection: state.consumingByte.activeSection,
});

export default connect(mapStateToProps, {})(Content);