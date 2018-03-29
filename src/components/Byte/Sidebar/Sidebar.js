// @flow
import React, { Component } from 'react';
import Sections from './Sections/Sections';
// $FlowFixMe
import './Sidebar.scss';

// Types
import type { SectionItemType } from '@/types';

type Props = {
    data: any
}

export default class Sidebar extends Component<Props> {
    items: Array<SectionItemType>;

    constructor() {
        super();
    }

    componentWillMount() {
        this.items = this.props.data.byte.sections.map(x => { return {name: x.name}});
        console.log('test', this.items);
    }


    render() {
        return (
            <div className='sidebar'>
               <Sections items={this.items} user={this.props.data.byte.creator} title={this.props.data.byte.name} />
            </div>
        );
    }
}