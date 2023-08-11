import { useContext } from 'react'
import FrenchFlag from '../../assets/france.svg'
import SpanishFlag from '../../assets/spain.svg'
import EnglishFlag from '../../assets/united-kingdom.svg'
import './ToggleLangs.css'
import { Context } from '../Context/LangContext'

export default function ToggleLangs() {
    //STATES
    const {toggleLang} = useContext(Context)


    //COMPORTEMENT


    //RENDU
  return (
    <div className='container-langs'>
        <img onClick={() => toggleLang('FR')} src={FrenchFlag} alt="FrenchFlag" />
        <img onClick={() => toggleLang('EN')} src={EnglishFlag} alt="EnglishFlag" />
        <img onClick={() => toggleLang('ES')} src={SpanishFlag} alt="SpanishFlag" />
    </div>
  )
}
