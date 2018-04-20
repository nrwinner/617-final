// @flow
import React, { Component } from 'react';
import Video from '../VideoComponent/Video';
import Quiz from '../../Quiz/Quiz';
// $FlowFixMe
import './Content.scss';

import type { ByteType, VideoType, SectionType, QuestionType } from '@/types';

// Redux
import { connect } from 'react-redux';

type Props = {
    activeSection: string;
    byte: ByteType;
}

class Content extends Component<Props> {
    // container component
    section: SectionType; // active section
    video: VideoType;

    constructor(p: Props) {
        super(p);
        this.initContent(this.props.activeSection);
    }

    componentWillReceiveProps(nextProps) {
        this.initContent(nextProps.activeSection);
    }


    render() {
        return (
            <div className='content'>
                <Video source={this.video} />
                <div className="quiz-wrapper">
                    <Quiz questions={this.section.questions} /> 
                </div>
            </div>
        );
    }

    initContent(section) {
        this.video = {
            url: this.props.byte.materials.youtubeVideo,
            start: ''
        };

        // $FlowFixMe
        this.section = this.props.byte.sections.get(section);
        // $FlowFixMe
        this.video.start = this.section.videoIn;
        // $FlowFixMe
        this.video.stop = this.section.videoOut;
    }
}

const mapStateToProps = state => ({
    byte: state.consumingByte,
    activeSection: state.consumingByte.activeSection,
});

export default connect(mapStateToProps, {})(Content);