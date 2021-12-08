import React from 'react';

import CollectionPreview from '../collection-preview/collection-preview.components';

import './collection-overview.styles.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollection } from '../../redux/shop/shop.selectors';


const CollectionOverview = ({ collections }) => (
    <div className="collection-overview">
        {collections.map(({ id, ...othercollectionprops }) => (
            <CollectionPreview key={id} {...othercollectionprops} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollection
})

export default connect(mapStateToProps)(CollectionOverview)
