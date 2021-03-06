// @flow
import React, { Component } from 'react';
// $FlowFixMe
import './SectionHeader.scss';

type Props = {
    user: any,
    title: string
}

const SectionHeader = (props: Props) => {
    return (
        <div>
            <div className="section-header">
                <div className="byte-image"></div>
            </div>
            <div className="title">{ props.title }</div>
            <div className="user">
                { props.user.name }
            </div>
        </div>
    );
}

export default SectionHeader;