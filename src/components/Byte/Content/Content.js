// @flow
import React, { Component } from 'react';
import Video from '../VideoComponent/Video';
// $FlowFixMe
import './Content.scss';

export default class Content extends Component<{}> {
    // container component

    render() {
        return (
            <div className='content'>
                <Video source={'https://www.youtube.com/embed/0fKg7e37bQE'} start={'00:10:12'} end = {'00:12:13'} />
            </div>
        )
    }
}