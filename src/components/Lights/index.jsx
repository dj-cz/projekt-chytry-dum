import './style.css'
import { Light } from '../Light'

export const Lights = ({lights}) => {
    return(
        <>
            <div className='lights'>
                {lights.map((light, index) => (
                    <Light key={index} name={light.name} state={light.state}/>
                ))}
            </div>
        </>
    )
}