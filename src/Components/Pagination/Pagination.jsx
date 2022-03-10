import { useState } from 'react';
import './Pagination.scss';


export default function Pagination ({getData}) {
    const [actualPage, setActualPage] = useState(1);
    const [ error, setError  ] = useState('')
 

    const changePage = (newPage) => {   
        
        let lastPage;       
             
        if(newPage === 1){
            if(actualPage === 42 ){
                lastPage = actualPage
                setActualPage(actualPage);
                setError("max");
                setTimeout(()=>{

                    setError("")

                }, 2000)

            } else {
                console.log("entra en 1")
                lastPage = actualPage + 1
                console.log("lastpage",lastPage)
                setActualPage(lastPage);
                setError('')
            }
            
        } if (newPage === -1){
            console.log("entra en -1")
            if(actualPage > 1){

                lastPage = actualPage + newPage
                setActualPage(lastPage);
                setError('')
            } else {
                setError("min")
                setTimeout(()=>{

                    setError("")

                }, 2000)
            }
        }  
        getData(lastPage);          
    }
   
    return (

        <div className="c-pagination">
            <button className="c-pagination__button" onClick={() => changePage(-1)}>{"<"}</button>
            <span >{actualPage}</span>
            <button className="c-pagination__button" onClick={() => changePage(1)}>{">"}</button>
            <p>
            { error === "min" ? <span>No hay página 0 </span> : error === "max" ? <span>No hay más páginas</span> : '' }
            </p>
            
            
        </div>
    )
}