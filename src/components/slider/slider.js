import React, {useState} from 'react'
import './slider.css'
import dataSlider from './dataSlider'

export default function Slider() {
    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div className={'slide'}>
                        <img
                            src={process.env.PUBLIC_URL + `./sliderImages/banner${index + 1}.png`}
                        />
                    </div>
                )
            })}
        </div>
    )
}