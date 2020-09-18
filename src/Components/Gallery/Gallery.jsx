import React, { memo } from 'react'
import ClassNames from "./Gallery.module.scss";

const Gallery = props => {
    const results = props.data;
    console.log("The Images", props.data);
    let images;
    // let noImages;
    // map variables to each item in fetched image array and return image component
    if (results.length > 0) {
        images = results.map(image => {
            let farm = image.farm;
            let server = image.server;
            let id = image.id;
            let secret = image.secret;
            let title = image.title;
            let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;

            return <li><img src={url} key={id} alt={title} /></li>;
        });
    } else {
        // noImages = <NoImages />; // return 'not found' component if no images fetched
    }
    return (
        <ul className={ClassNames.ImagesList}>{images}</ul>
    );
};

export default memo(Gallery)