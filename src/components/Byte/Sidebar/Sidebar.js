// @flow
import React, { Component } from 'react';
import Sections from './Sections/Sections';
// $FlowFixMe
import './Sidebar.scss';

// Types
import type { SectionType, SectionItemType } from '@/types';

// Redux
import { byteChangeSection } from '../../../actions';
import { connect } from 'react-redux';

type Props = {
    sections: Map<string, SectionType>;
    creator: string;
    name: string;
    changeSection: Function;
}

class Sidebar extends Component<Props> {

    constructor() {
        super();
    }

    render() {
        return (
            <div className='sidebar'>
               <Sections sections={this.props.sections} user={this.props.creator} title={this.props.name} changeSection={this.props.changeSection} />
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
    changeSection: (id: string) => dispatch(byteChangeSection(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);