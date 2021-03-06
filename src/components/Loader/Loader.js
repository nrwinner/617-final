// @flow
import React from 'react';
// $FlowFixMe
import './Loader.scss';

type Props = {
    text?: string;
}

export const Loader = (props: Props) => {
    return (
        <div className="loader">
            <div className="spinner" />
            <div className="text">
                { props.text || 'Loading...' }
            </div>
        </div>
    );
}