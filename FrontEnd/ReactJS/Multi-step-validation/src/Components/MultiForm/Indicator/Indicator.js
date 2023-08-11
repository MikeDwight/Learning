import React from 'react'
import './Indicator.css'
import healthy from './icons/healthy.svg'
import love from './icons/love.svg'
import diet from './icons/diet.svg'
import allergy from './icons/allergy.svg'
import thumb from './icons/thumb.svg'

export default function Indicator() {
  return (
    <div className='container-indicator'>
        <div className="container-lines">
            <div className="line upper-line"></div>
            <div className="line under-line"></div>
        </div>
        <div className="container-img">
            <div className="bloc-img">
                <img src={healthy}/>
            </div>
            <div className="bloc-img">
                <img src={love}/>
            </div>
            <div className="bloc-img">
                <img src={diet}/>
            </div>
            <div className="bloc-img">
                <img src={allergy}/>
            </div>
            <div className="bloc-img">
                <img src={thumb}/>
            </div>
        </div>
    </div>
  )
}
