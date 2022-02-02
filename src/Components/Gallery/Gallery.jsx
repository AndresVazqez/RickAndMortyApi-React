import { useContext } from 'react';
import './Gallery.scss'


export default function Gallery({list}){

    return(
    <div className='c-gallery'>
    
        {list.map(item => 
            <figure className='c-gallery__cards' key={item.id}>
        
                <img src={item.image} alt={item.name} />
        
                <figcaption>    
                        <h3>{item.name} </h3>
                        <p><span>Status: </span>{item.status}</p>                        
                        <p><span>Gender: </span>{item.gender}</p>
                        <p><span>Location: </span>{item.location.name}</p>
                </figcaption>
        
            </figure>)}
    
    </div>)    
    }