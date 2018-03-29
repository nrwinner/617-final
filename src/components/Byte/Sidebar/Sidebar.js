// @flow
import React, { Component } from 'react';
import Sections from './Sections/Sections';
// $FlowFixMe
import './Sidebar.scss';

// Types
import type { SectionItemType } from '@/types';

type Props = {
    sections: SectionItemType[]
}

export default class Sidebar extends Component<Props> {
    items: Array<SectionItemType>;

    constructor() {
        super();
    }

    componentWillMount() {
        this.items = this.props.sections.map(x => { return {name: x.name}});
    }


    render() {
        return (
            <div className='sidebar'>
               <Sections items={this.items} />
            </div>
        );
    }
}