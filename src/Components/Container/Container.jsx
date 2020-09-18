import React, { useContext, useEffect } from 'react'

import { PhotoContext } from '../../Context/Context'
import Gallery from '../Gallery/Gallery';
import Loader from '../Loader/Loader';

function Container({ searchTerm }) {

    const { images, loading, fetchImages } = useContext(PhotoContext);

    useEffect(() => {
        if (searchTerm) {
            fetchImages(searchTerm);
        }
        else {
            fetchImages("Mountain");
        }
    }, [searchTerm, fetchImages]);


    if (loading) {
        return <Loader />
    }
    else {
        return <Gallery data={images} />
    }
}

export default Container