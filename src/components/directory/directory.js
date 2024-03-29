import React from 'react';
import MenuItem from '../menu-item/menu-item';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import './directory.styles.scss';

const Directory = ({ sections }) => (
    <div className="directory-menu">
        {sections.map(({ id, ...othersectionprops }) => (
            <MenuItem key={id} {...othersectionprops} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);