// @flow
import React from 'react';
// $FlowFixMe
import './SectionItem.scss';

type Props = {
    data: {name: string, complete?: boolean},
    active: boolean,
    changeSection: Function
}

const SectionItem = (props: Props) => {
    return (
        <div className={'section-item' + (props.data.complete ? ' complete ' : '') + (props.active ? ' active' : '')} onClick={() => props.changeSection(props.data.name)}>
            {props.data.name}
        </div>
    );
}

export default SectionItem;