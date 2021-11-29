import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const collectionPreview = ({ items, title }) => (
    <div className="collection-preview">
        <h1 className="title">{title}</h1>
        <div className="preview">
            {items.filter((item, idx) => idx < 4).map(({ id, ...otheritemprops }) => (
                <CollectionItem key={id} {...otheritemprops} />
            ))}
        </div>
    </div>
)

export default collectionPreview;