// @flow
import React from 'react';
// $FlowFixMe
import './SectionItem.scss';

type Props = {
    data: {name: string, complete?: boolean}
}

const SectionItem = (props: Props) => {
    console.log(props);
    return (
        <div className={'section-item ' + (props.data.complete ? 'complete' : '')}>
            {props.data.name}
        </div>
    );
}

export default SectionItem;