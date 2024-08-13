import React, { useContext } from 'react'
import Card from './Card'
import NoteContext from '../Contexts/NodeContext'
import './Card.css'
function CardList() {

    let context=useContext(NoteContext);
    let {apiData,lastIndex,setLastIndex,setFirstIndex,firstIndex,loading}=context;

    const handleChange=(pageNumber)=>{
           const itemPerpage=6;
           setFirstIndex((pageNumber - 1) * itemPerpage);
           setLastIndex(pageNumber * itemPerpage);
    }

  return (
    <div className='cardlisst'>
       <div className='cardlist'>
          {loading?
          <h1>Loading....</h1>
          :
           (apiData.slice(firstIndex,lastIndex).map((e,i)=>(
              <Card e={e} key={i}/>
           ))) 
           }
            </div>
           {loading?null:
             <div className='btns' >
                <button className='cardListBtn' onClick={()=>handleChange(1)} >1</button>
                <button className='cardListBtn' onClick={()=>handleChange(2)} >2</button>
                <button className='cardListBtn' onClick={()=>handleChange(3)} >3</button>
             </div>
           }
      
       </div>
  )
}

export default CardList