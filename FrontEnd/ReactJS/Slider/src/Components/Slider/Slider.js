import { useState } from 'react'
import './Slider.css'
import dataSlider from './dataSlider'
import BtnSlider from './BtnSlider'

export default function Slider() {
  // STATES
    const [slideAnim, setSlideAnim] = useState({
        index: 1,
        inProgress: false
    })


  // COMPORTEMENT
    const nextSlide = () => {
        if(slideAnim.index !== dataSlider.length) {
            setSlideAnim({index: slideAnim.index + 1, inProgress: true})
        }
        else if(slideAnim.index === dataSlider.length) {
            setSlideAnim({index: 1, inProgress: true})
        }
    }

    const prevSlide = () => {
        if(slideAnim.index !== 1) {
            setSlideAnim({index: slideAnim.index - 1, inProgress: true})
        }
        else if(slideAnim.index === 1) {
            setSlideAnim({index: dataSlider.length, inProgress: true})
        }
    }

    const moveDot = index => {
        setSlideAnim({index: index, inProgress: false})
    }


  // RENDU
    return (
        <div className='container-slider'>
            {dataSlider.map((obj, index) => {
                return (
                    <div key={obj.id} className={slideAnim.index === index + 1 ? "slide active-anim" : "slide"}>
                        <img src={`/Imgs/img${index + 1}.jpg`} alt=''/>
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"}/>
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className='container-dots'>
                {Array.from({length: dataSlider.length}).map((item, index) => {
                    return <button 
                    className={slideAnim.index === index +1 ? "dot active" : "dot"}
                    onClick={() => moveDot(index + 1)}
                    >

                    </button>
                })}
            </div>
        </div>
    )
}
