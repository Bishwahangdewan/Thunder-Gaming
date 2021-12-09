import React from 'react';
import { useParams } from 'react-router-dom';

import { selectCollection } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './category.styles.scss';

const Category = ({ collection }) => {
    const { id } = useParams();

    const { title, items } = collection(id)

    return (
        <div className="category-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {items.map(item => <CollectionItem key={item.id} item={item} />)}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    collection: collectionid => selectCollection(collectionid)(state)
})

export default connect(mapStateToProps)(Category);