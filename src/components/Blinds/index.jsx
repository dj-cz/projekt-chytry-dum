import './style.css'
import { useState } from 'react'

export const Blinds = ({state}) => {
    const [jeOtevreno, setJeOtevreno] = useState(state)

    return(
        <>
            <div className="blinds">
                <div className="blinds__icon">
                    {jeOtevreno === 'open' ? (
                        <img src="./images/blinds-open.svg"/>
                    ) : (
                        <img src="./images/blinds-closed.svg"/>
                    )
                    } 
                </div>
                <div className="blinds__name">
                    Žaluzie
                </div>
                <div className="blinds__controls">
                    <button 
                        className={`button ${jeOtevreno === 'open' ? 'button--active' : ''}`}
                        onClick={() => setJeOtevreno('open')}
                    >Otevřeno</button>
                    <button 
                        className={`button ${jeOtevreno === 'closed' ? 'button--active' : ''}`}
                        onClick={() => setJeOtevreno('closed')}
                    >Zavřeno</button>
                </div>
            </div>
        </>
    )
}