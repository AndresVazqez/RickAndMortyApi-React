import { useState } from 'react/cjs/react.development';
import './SearchCharactersPage.scss';
import Axios from 'axios';
import Gallery from '../../Gallery/Gallery';



export default function SearchCharactersPage () {
    
    const [ character, setCharacter ] = useState([])
    const [ characterName, setCharacterName ] = useState('')


    const search = () => {

        Axios.get(`https://rickandmortyapi.com/api/character/?name=${characterName}`)
        .then((res) => {
            setCharacter(res.data.results)
        })
    }

    console.log(character);


    return (

        <div className='c-searchcharacter'>
            <div className="c-searchcharacter__in">

                { !character.length  ? <h1>look for your favorite character!</h1> : '' }
                <div className="c-searchcharacter__in-bar">
                    <input placeholder='Look Characters' type="text" onChange={(event) => {setCharacterName(event.target.value)}} />
                    <button onClick={search}><img src="./Images/lupa.png" alt="" /></button>
                </div>
                
            </div>
            <Gallery list={character}/>           
        </div>
    )
}