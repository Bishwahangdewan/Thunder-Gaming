import React from 'react';

import CollectionPreview from '../../components/collection-preview/collection-preview.components';

import shopData from './shop.data';

import './shop.styles.scss';

class Shop extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: shopData
        }

    }

    render() {
        const { collections } = this.state;
        return (
            <div className="shop">
                {collections.map(({ id, ...othercollectionprops }) => (
                    <CollectionPreview key={id} {...othercollectionprops} />
                ))}
            </div>
        )
    }
}

export default Shop;