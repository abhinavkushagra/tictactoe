import './InnerBox.css'
import Button from './Button'
import { useEffect, useState} from 'react'

const InnerBox = ({setWinner}) => {
    const [current, setCurrent] = useState();
    const [counter, setCounter] = useState(0);
    const [location, setLocation] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0])
    const [isCross, setCross] = useState(false)
    

    const check = {
        0: [[1, 2], [3, 6], [4, 8]],
        1: [[0, 2], [4, 7]],
        2: [[0, 1], [5, 8], [4, 6]],
        3: [[0, 6], [4, 5]],
        4: [[3, 5], [1, 7], [0, 8], [2, 6]],
        5: [[3, 4], [2, 8]],
        6: [[7, 8], [2, 4], [0, 3]],
        7: [[1, 4], [6, 8]],
        8: [[6, 7], [2, 5], [0, 4]]
    }


    useEffect(()=> {
        if(counter > 3){
            for (let i = 0; i < check[current - 1].length ; i++){
                if(location[current - 1] === location[check[current - 1][i][0]]  && location[current - 1] === location[check[current - 1][i][1]]){
                    setCross(true)
                    location[current - 1] === 1 ? setWinner('X') : setWinner('O')
                }
            }
        }
    }, [location, counter])
    
    
    const clickHandler = (e, id, setValue) => {
        e.preventDefault();
        setCurrent(id);
        let updated_location = location.slice()
        if(counter % 2 === 0){
            setValue('X')
            updated_location[id - 1] = 1   
        }else{
            setValue('O')
            updated_location[id - 1] = 2
        }
        setLocation(updated_location)
        setCounter(counter + 1)
    }

    const buttons = []

    for(let i = 1; i <= 9; i++){
        buttons.push(<Button key={i} id={i} onclick={clickHandler} isCross={isCross}/>)
    }
    
    
    return( 
        <div className="innerbox"> 
            <div className="lineClass">
                <div className="horizontal"></div>
                <div className="vertical"></div>
            </div>
            <div className="btnClass">
                {buttons}
            </div>
        </div>
    )
}

export default InnerBox;