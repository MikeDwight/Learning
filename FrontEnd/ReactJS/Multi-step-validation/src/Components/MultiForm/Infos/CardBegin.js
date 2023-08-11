import React from 'react'
import './Card.css'

export default function CardBegin(props) {
  return (
    <div className='card'>
        <h1>Aide-nous à ravire tes papilles</h1>
        <button onClick={() => props.modifyIndex(2)}>Commencer</button>
    </div>
  )
}
