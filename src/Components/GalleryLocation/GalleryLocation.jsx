import './GalleryLocation.scss';

export default function GalleryLocation ({location}) {

    return(
        <div className="c-galleryLocation">
            {
                location.map(item =>
                    <div className='c-galleryLocation__card' key={item.id}>
                        <p><span>Planet name:</span> {item.name}</p>
                        <p><span>Type:</span> {item.type}</p>
                        <p><span>Dimension:</span> {item.dimension}</p>                        
                    </div>
                )
            }
        </div>

    )


}