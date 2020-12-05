import React from 'react'
import Cards from './Card'
import {CardData} from './CardData'
import './style.css'
import * as Mat from '@material-ui/icons'

function Main() {
   
    return (
        <>
         <h1>AudioBook Demo Site 
                 <a href='https://www.github.com/ckr-Harsh'>
             <span className='git'>
                 <Mat.GitHub/>
             </span>
             </a>
         </h1>
          <div className='demo'>
           {
               CardData.map(val=>{
                   return(
                       <Cards
                        img={val.img} 
                        name={val.name}
                        data={val.data}
                        audio={val.audio}
                        />
                   );
               })
            
           }
          </div>
          </>
    )
}

export default Main
