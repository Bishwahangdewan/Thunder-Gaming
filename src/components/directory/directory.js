import React from 'react';
import MenuItem from '../menu-item/menu-item';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                { id: 0, title: "Newest", img: "https://oceansofgamess.com/wp-content/uploads/2021/11/InfraSpace-Free-Download-5.jpg", linkto: '/newest' },
                { id: 1, title: "Most Popular", img: "https://oceansofgamess.com/wp-content/uploads/2020/08/Call-Of-Duty-Modern-Warfare-2-Campaign-Remastered-Free-Download-2.jpg", linkto: '/mostpopular' }
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