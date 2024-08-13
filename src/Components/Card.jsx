import React, { useContext } from 'react'
import NoteContext from '../Contexts/NodeContext'
import './Card.css'

function Card({e}) {

    let {removeCard} = useContext(NoteContext);
  return (
    <div className='card'>
        <button className='cardBtn' onClick={()=>removeCard(e.id)}>❌</button>
        <h3>{e.title}</h3>
        <p>{e.body}</p>
        <img src="https://images.unsplash.com/photo-1719937206158-cad5e6775044?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
    </div>
  )
}

export default Card