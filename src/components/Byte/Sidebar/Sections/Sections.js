// @flow
import React, { Component } from 'react';
import SectionItem from './SectionItem/SectionItem'
import SectionHeader from './SectionHeader/SectionHeader';
// $FlowFixMe
import './Sections.scss';

type SectionItemType = {
    name: string,
    complete?: boolean
}

type Props = {
    items: Array<SectionItemType>;
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

        (this:any).changeSection = this.changeSection.bind(this);
    }

    changeSection(name: string) {
        this.setState({
            active: name
        })
    }

    render() {
        return (
            <div className='sections'>
                <SectionHeader />
                {
                    this.props.items.map((v, i) => {
                        return <SectionItem data={v} key={i.toString()} active={this.state.active === v.name} changeSection={this.changeSection} />
                    })
                }
            </div>
        );
    }
}