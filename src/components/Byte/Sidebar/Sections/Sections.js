// @flow
import React, { Component } from 'react';
import SectionItem from './SectionItem/SectionItem'
import SectionHeader from './SectionHeader/SectionHeader';
// $FlowFixMe
import './Sections.scss';

// Types
import type { SectionItemType } from '@/types';
import { byteState } from '../../services/ByteState';

type Props = {
    items: Array<SectionItemType>,
    user: any,
    title: string
}

type State = {
    active?: string
}

export default class Sections extends Component<Props, State> {
    // container
    state: State;
    
    constructor(props: Props) {
        super(props);
        this.state = {
            active: this.props.items.filter(i => !i.complete)[0].name
        };

        byteState.active = this.state.active;

        (this:any).changeSection = this.changeSection.bind(this);
    }

    changeSection(name: string) {
        this.setState({
            active: name
        }, () => {
            byteState.active = this.state.active;
        });

        setTimeout(() => {
            console.log('from section', byteState.active);
        }, 15000);
    }

    render() {
        console.log(this.props.user);
        return (
            <div className='sections'>
                <SectionHeader user={this.props.user} title={this.props.title} />
                {
                    this.props.items.map((v, i) => {
                        return <SectionItem data={v} key={i.toString()} active={this.state.active === v.name} changeSection={this.changeSection} />
                    })
                }
            </div>
        );
    }
}