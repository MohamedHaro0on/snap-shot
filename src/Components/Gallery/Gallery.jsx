import React, { memo } from 'react'
import ClassNames from "./Gallery.module.scss";
import NoImages from './NoImages';

const Gallery = ({ data }) => (
    data.length > 0 ? 
        <ul className={ClassNames.ImagesList}>
            {data.map((image) => {
                const { farm, server, id, secret, title } = image;
                let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;

                return <li key={id}><img src={url} alt={title} /></li>;
            })}
        </ul>: <NoImages />
)

export default memo(Gallery)