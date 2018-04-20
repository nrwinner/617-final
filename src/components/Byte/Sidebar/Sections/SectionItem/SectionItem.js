// @flow
import React from 'react';
// $FlowFixMe
import './SectionItem.scss';

import type { SectionItemType } from '@/types';

type Props = {
    data: SectionItemType,
    active: boolean,
    changeSection: Function
}

const SectionItem = (props: Props) => {
    return (
        <div className={'section-item' + (props.data.complete ? ' complete ' : '') + (props.active ? ' active' : '')} onClick={() => props.changeSection(props.data.id)}>
            {props.data.name}
        </div>
    );
}

export default SectionItem;