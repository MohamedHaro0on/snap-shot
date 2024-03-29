import apikey from "../Api/Config";
import axios from "axios";

import React, { createContext, useState } from "react";

export const PhotoContext = createContext();

const PhotoContextProvider = props => {

    const [images, setImages] = useState([]);
    const [loading, setLoadting] = useState(true);

    const fetchImages = query => {
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {
            setImages(response?.data?.photos.photo)
        }).catch(error => {
            console.log("THe Error", error);
        }).then(function () {
            setLoadting(false);
        })
    };
    return (
        <PhotoContext.Provider value={{ images, loading, fetchImages }}>
            {props.children}
        </PhotoContext.Provider>
    )
}
export default PhotoContextProvider;