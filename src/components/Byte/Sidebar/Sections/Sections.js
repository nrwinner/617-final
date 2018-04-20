// @flow
import React, { Component } from 'react';
import SectionItem from './SectionItem/SectionItem'
import SectionHeader from './SectionHeader/SectionHeader';

// Types
import type { SectionType, SectionItemType } from '@/types';

// Redux
import { connect } from 'react-redux';
import { byteChangeSection } from '../../../../actions';

type Props = {
    sections: Map<string, SectionType>;
    user: any;
    title: string;
    active: string;
    changeSection: Function;
}
class Sections extends Component<Props> {
    // container
    
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div className='sections'>
                <SectionHeader user={this.props.user} title={this.props.title} />
                {
                     Array.from(this.props.sections, ([key, value]) => value).map((v, i) => {
                        return <SectionItem data={v} key={i.toString()} active={this.props.active === v.id} changeSection={this.props.changeSection} />
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    active: state.consumingByte.activeSection,
})

export default connect(mapStateToProps, {})(Sections);