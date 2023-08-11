import {useRef} from 'react'
import './SubForm.css'


export default function Allergies(props) {

    const preventFunc = (e) => {
        e.preventDefault()

        const styleData = {
            allergies : []
        }

        allCheckBoxes.current.forEach(checkbox => {
            if(checkbox.checked) {
                styleData.allergies.push(checkbox.value)
            }
        })

        props.modifyIndex(5, styleData)
    }

    const allCheckBoxes = useRef([])

    const addCheck = el => {
        if(el && !allCheckBoxes.current.includes(el)) {
            allCheckBoxes.current.push(el)
        }
    }

    const handleReturn = () => {
        props.modifyIndex(3)
    }


  return (
    <form onSubmit={preventFunc} className="checkbox-form">
        <p>Quelles sont tes cuisines favorites ?</p>
        <span>Choix multiple</span>
        <label htmlFor="milk">Lait</label>
        <input ref={addCheck} type="checkbox" id='milk' value="milk" />
        <label htmlFor="pollen">Pollen</label>
        <input ref={addCheck} type="checkbox" id='pollen' value="pollen" />
        <label htmlFor="nuts">Noix</label>
        <input ref={addCheck} type="checkbox" id='nuts' value="nuts" />
        <label htmlFor="eggs">Oeuf</label>
        <input ref={addCheck} type="checkbox" id='eggs' value="eggs" />
        <label htmlFor="shellfish">Fruits de mer</label>
        <input ref={addCheck} type="checkbox" id='shellfish' value="shellfish" />


        <div className="container-nav-btns">
            <button onClick={handleReturn} type='button' className='prev'>Précédent</button>
            <button>Valider</button>
        </div>
    </form>
  )
}
