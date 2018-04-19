// @flow
import React, { Component } from 'react';
import Sections from './Sections/Sections';
// $FlowFixMe
import './Sidebar.scss';

// Types
import type { SectionItemType } from '@/types';

// Redux
import { byteChangeSection } from '../../../actions';
import { connect } from 'react-redux';

type Props = {
    sections: any;
    creator: string;
    name: string;
    changeSection: Function;
}

class Sidebar extends Component<Props> {
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
               <Sections items={this.items} user={this.props.creator} title={this.props.name} changeSection={this.props.changeSection} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    sections: state.consumingByte.sections,
    creator: state.consumingByte.creator,
    name: state.consumingByte.name
})

const mapDispatchToProps = dispatch => ({
    changeSection: (name: string) => dispatch(byteChangeSection(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);