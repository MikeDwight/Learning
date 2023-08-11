import { useContext } from 'react'
import './Contenu.css'
import data from '../../assets/data'
import { Context } from '../Context/LangContext'

export default function Contenu() {
    //STATES
    const {lang} = useContext(Context)

    //COMPORTEMENT


    //RENDU
  return (
    <div className='content'>
        <h1 className="title">{data[lang].title}</h1>
        <p className="content-txt">{data[lang].txt}</p>
    </div>
  )
}


