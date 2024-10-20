import './style.css'
import { useState } from 'react'

export const Climate = ({ temperature, humidity }) => {
    const [teplota, setTeplota] = useState(temperature)

    return(
        <>
            <div className="climate">
                <div className="climate__icon">
                    <img src="./images/temp.svg"/>
                </div>
                <div className="climate__content">
                    <div className="climate__temperature">{teplota}&deg;C</div>
                    <div className="climate__humidity">Vlhost vzduchu {humidity}&nbsp;%</div>
                </div>
                <div className="climate__controls">
                    <button onClick={() => setTeplota(teplota + 1)} className="button">+</button>
                    <button onClick={() => setTeplota(teplota - 1)} className="button">-</button>
                </div>
		    </div>
        </>
    )
}