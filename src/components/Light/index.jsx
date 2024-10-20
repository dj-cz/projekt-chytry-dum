import React, { useState } from 'react'
import onSource from '../../images/light-on.svg'
import offSource from '../../images/light-off.svg'


export const Light = ({ name, state }) => {
    const [jeZapnuta, setJeZapnuta] = useState(state)
    
    const toggleLight = () => {
        setJeZapnuta((previousState) => (previousState === 'on' ? 'off' : 'on'))
    }

    return(
        <>
            <div className='light' onClick={toggleLight} >
                <div className="light__icon">
                    <img src={jeZapnuta === 'on' ? onSource : offSource}/>
                </div>
                <div className="light__name">
                    {name}
                </div>
            </div>
        </>
    )
}