import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Gallery from '../../Gallery/Gallery';
import './CharactersPage.scss';
import Pagination from '../../Pagination/Pagination';

export default function CharactersPage () { 

    const [characters, setCharacters] = useState([]);
    
    
    const getCharacters = async (newPage = 1) => {       
        
        const res = await axios("https://rickandmortyapi.com/api/character?page=" + newPage);
        setCharacters(res.data.results)            

    }
    
    useEffect(() => {
        getCharacters();
    }, [])


    useEffect(getCharacters,[])


    return (
        <div className='c-charactersPage' >
        <h1>Characters</h1>
        <Gallery list={characters}/>
        <Pagination getData={getCharacters}/>
        </div>
    )
}

