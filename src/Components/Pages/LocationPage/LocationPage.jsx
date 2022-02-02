import { useEffect, useState } from 'react';
import axios from 'axios';
import './LocationPage.scss';
import GalleryLocation from '../../GalleryLocation/GalleryLocation';
import Pagination from '../../Pagination/Pagination';

export default function LocationPage () {

    const [location, setLocation] = useState([]);

    const getLocation = async (newPage = 1) => {

        const res = await axios ("https://rickandmortyapi.com/api/location?page=" + newPage);

        setLocation(res.data.results)
       
    }

    useEffect(()=> {
        getLocation();
    }, [])

    useEffect(getLocation, [])


    return (
        <div>
        <h1>Location</h1>
        <GalleryLocation location={location}/>
        <Pagination getData={getLocation}/>        
        </div>
    )
}