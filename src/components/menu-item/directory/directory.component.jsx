import React from "react";
import MenuItem from "../menu-item.component";
import './directory.style.scss';

export class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            section: [
                {
                    title: 'hats',
                    imgUrl: 'https://wallsdesk.com/wp-content/uploads/2017/01/Ljubljana-HD-Wallpaper.jpg',
                    id: '1',
                    linkUrl: '/hats'
                },
                {
                    title: 'hats',
                    imgUrl: 'https://wallsdesk.com/wp-content/uploads/2017/01/Ljubljana-Wallpapers.jpg',
                    id: '2',
                    linkUrl: ''
                },
                {
                    title: 'hats',
                    imgUrl: 'https://wallsdesk.com/wp-content/uploads/2018/04/Fir-Background.jpg',
                    id: '3',
                    linkUrl: ''
                },
                {
                    title: 'hats',
                    imgUrl: 'https://wallsdesk.com/wp-content/uploads/2018/02/Pictures-of-Fisker-Karma.jpg',
                    id: '4',
                    size: 'large',
                    linkUrl: ''
                },
                {
                    title: 'hats',
                    imgUrl: 'https://wallsdesk.com/wp-content/uploads/2017/01/Ljubljana-Wallpapers-HQ.jpg',
                    id: '5',
                    size: 'large',
                    linkUrl: ''
                }
            ]
        }
    };
    render() {
        return (
           <div className="directory-menu">
                { this.state.section.map(({id, ...sectionProps}) => (
                 <MenuItem key={id} {...sectionProps} />
            ))}
           </div>
        )
    }
}