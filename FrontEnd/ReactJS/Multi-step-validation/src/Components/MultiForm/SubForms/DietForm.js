import { useState } from 'react'
import './SubForm.css'

export default function DietForm(props) {

    const [formData, setFormData] = useState({
        dietForm : 'nodiet',

    })

    const handleRadio = e => {
        setFormData({
            dietForm : e.target.value
        })
    }

    const preventFunc = e => e.preventDefault()

  return (
    <form onSubmit={preventFunc} className="diet-form">
        <p>Quel est ton régime alimentaire ?</p>
        <label htmlFor="nodiet">Pas de régime en particulier</label>
        <input onChange={handleRadio} type="radio" name='diet' id='nodiet' value='nodiet' />
        <label htmlFor="nodiet">Homnivore</label>
        <input onChange={handleRadio} type="radio" name='diet' id='homnivorus' value='homnivorus' />
        <label htmlFor="nodiet">Végétarien</label>
        <input onChange={handleRadio} type="radio" name='diet' id='vegetarian' value='vegetarian' />
        <label htmlFor="nodiet">Vegan</label>
        <input onChange={handleRadio} type="radio" name='diet' id='vegan' value='vegan' />
        <button onClick={() => props.modifyIndex(3, formData)}>Valider</button>
    </form>
  )
}
