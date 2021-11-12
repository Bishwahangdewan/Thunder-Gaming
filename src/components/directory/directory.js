import React from 'react';
import MenuItem from '../menu-item/menu-item';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                { id: 0, title: "Newest", img: "http://localhost:3000/static/media/game1.de8fcacc.jpg", linkto: '/newest' },
                { id: 1, title: "Most Popular", img: "http://localhost:3000/static/media/game2.a8258650.jpg", linkto: '/mostpopular' }
            ]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({ id, ...othersectionprops }) => (
                    <MenuItem key={id} {...othersectionprops} />
                ))}
            </div>
        )
    }

}

export default Directory;