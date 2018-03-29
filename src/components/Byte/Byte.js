// @flow
import React, { Component } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';
import { Query } from "react-apollo";
import gql from "graphql-tag";

// $FlowFixMe
import './Byte.scss';

// Types
import type { VideoType } from '@/types';

export default class Byte extends Component<{}> {
    query: string;

    constructor() {
        super();
        this.query = `query {
            byte(id: "1") {
              name,
              description,
              date,
              creator {
                name
              },
              materials {
                youtubeVideo
              },
              sections {
                name,
                description,
                videoIn,
                videoOut
              },
            }
          }`;
    }

    render() {
        return <Query query={gql`${this.query}`}>
            {({loading, error, data}) => {
                if (loading) return <p>loading...</p>;
                if (error) return <p>Error :( {error}</p>;

                return (
                    <div className='byte'>
                        <Sidebar sections={data.byte.sections}/>
                        <Content data={data} />
                    </div>
                );
            }}
        </Query>;
    }
}