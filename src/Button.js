import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import './Button.css'

const Button = ({onclick, id, isCross}) => {
    const [value, setValue] = useState('')
    const [isDisabled, setIsDisabled] = useState(false)    
    
    const winner = useSelector(state => state)

    let btn_class = useRef(['button'])

    useEffect(() => {
        if(value !== ''){
            setIsDisabled(true)
            if(value === 'X'){
                btn_class.current.push('sky')
            }
            else
                btn_class.current.push('pink')
        }
    },[value])
    console.log(isDisabled + " | " + isCross)
    return(
        <button className={btn_class.current.join(' ')} onClick={(e) =>  onclick(e, id, setValue)} disabled={isDisabled || isCross}> {value} </button>
    )
}

export default Button;