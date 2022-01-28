import './Gallery.scss'
export default function Gallery({list}){

    return(
    <div className='c-gallery'>
    
        {list.map(item => 
            <figure key={item.id}>
        
                <img src={item.image} alt={item.name} />
        
                <figcaption>    
                        {item.name}    
                </figcaption>
        
            </figure>)}
    
    </div>)    
    }