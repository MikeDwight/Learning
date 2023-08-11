import {useState} from 'react'
import './SubForm.css'

export default function HateLove(props) {

    const [formData, SetFormData] = useState({
        prefs : {
            love : "",
            hate : ""
        }
    })
    
    const handleTxtArea = (e, pref) => {
        if(pref === "love") {
            SetFormData({
                prefs : {
                    ...formData.prefs,
                    love : e.target.value
                }
            })
        }
        else if(pref === "hate") {
            SetFormData({
                prefs : {
                    ...formData.prefs,
                    hate : e.target.value
                }
            })
        }
    }

    const preventFunc = (e) => {
        e.preventDefault()
    }

    const handleReturn = () => {
        props.modifyIndex(4)
    }

  return (
    <form onSubmit={preventFunc} className="preferences-form">
        <p>Parle-nous des aliments que tu préfères et que tu detestes !</p>
        <label htmlFor="prefered">Tes aliments préférés :</label>
        <textarea onChange={e => handleTxtArea(e, "love")} id="prefered"></textarea>
        <label htmlFor="hated">Tes aliments détestés :</label>
        <textarea onChange={e => handleTxtArea(e, "hate")} id="hated"></textarea>

        <div className="container-nav-btns">
            <button type='button' onClick={handleReturn} className='prev'>Précédent</button>
            <button onClick={() => props.modifyIndex(6, formData)}>Valider</button>
        </div>
    </form>
  )
}
