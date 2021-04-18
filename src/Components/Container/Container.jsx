import React, { useContext, useEffect } from 'react'

import { PhotoContext } from '../../Context/Context'
import Gallery from '../Gallery/Gallery';
import Loader from '../Loader/Loader';

const  Container = ({ searchTerm })=> {

    const { images, loading, fetchImages } = useContext(PhotoContext);

    useEffect(() => {
        fetchImages(searchTerm ? searchTerm : "mountain");
    }, [searchTerm]);
    
    return loading ?  <Loader /> :  <Gallery data={images} />
}

export default Container;