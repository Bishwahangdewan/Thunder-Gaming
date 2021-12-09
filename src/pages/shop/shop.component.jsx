import React from 'react';

import './shop.styles.scss';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';

const Shop = (props) => {
    console.log(props)
    return (
        <div className="shop">
            <CollectionOverview />
        </div>
    )
}


export default Shop;