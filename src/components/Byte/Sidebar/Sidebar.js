// @flow
import React, { Component } from 'react';
import Sections from './Sections/Sections';
// $FlowFixMe
import './Sidebar.scss';

type SectionItemType = {
    name: string,
    complete?: boolean
}

export default class Sidebar extends Component<{}> {
    items: Array<SectionItemType>;

    constructor() {
        super();

        this.items = [
            {name: 'Section 1', complete: true},
            {name: 'Section 2'},
            {name: 'Section 3'},
            {name: 'Section 4'},
            {name: 'Section 5'},
            {name: 'Section 6'},
        ];
    }

    render() {
        return (
            <div className='sidebar'>
               <Sections items={this.items} />
            </div>
        );
    }
}