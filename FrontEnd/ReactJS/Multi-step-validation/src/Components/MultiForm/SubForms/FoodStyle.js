import {useRef} from 'react'
import './SubForm.css'


export default function FoodStyle(props) {

    const preventFunc = (e) => {
        e.preventDefault()

        const styleData = {
            foodStyle : []
        }

        allCheckBoxes.current.forEach(checkbox => {
            if(checkbox.checked) {
                styleData.foodStyle.push(checkbox.value)
            }
        })

        props.modifyIndex(4, styleData)
    }

    const allCheckBoxes = useRef([])

    const addCheck = el => {
        if(el && !allCheckBoxes.current.includes(el)) {
            allCheckBoxes.current.push(el)
        }
    }

    const handleReturn = () => {
        props.modifyIndex(2)
    }


  return (
    <form onSubmit={preventFunc} className="checkbox-form">
        <p>Quelles sont tes cuisines favorites ?</p>
        <span>Choix multiple</span>
        <label htmlFor="italian">Italienne</label>
        <input ref={addCheck} type="checkbox" id='italian' value="italian" />
        <label htmlFor="japanese">Japonaise</label>
        <input ref={addCheck} type="checkbox" id='japanese' value="japanese" />
        <label htmlFor="indian">Indiene</label>
        <input ref={addCheck} type="checkbox" id='indian' value="indian" />
        <label htmlFor="thai">Thaïllandaise</label>
        <input ref={addCheck} type="checkbox" id='thai' value="thai" />
        <label htmlFor="french">Française</label>
        <input ref={addCheck} type="checkbox" id='french' value="french" />
        <label htmlFor="chinese">Chinoise</label>
        <input ref={addCheck} type="checkbox" id='chinese' value="chinese" />

        <div className="container-nav-btns">
            <button onClick={handleReturn} type='button' className='prev'>Précédent</button>
            <button>Valider</button>
        </div>
    </form>
  )
}
