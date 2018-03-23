// @flow
import React, { Component } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

// $FlowFixMe
import './Byte.scss';

export default class Bute extends Component<{}> {
    render() {
        return (
            <div className='byte'>
                <Sidebar />
                <Content />
            </div>
        );
    }
}