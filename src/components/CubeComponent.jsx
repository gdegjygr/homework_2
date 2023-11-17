import React, {useState} from "react";


export default function CubeComponent({color, onClick}) {
    return(
        <div
            style = {{
                width: '100px',
                height: '100px',
                backgroundColor: color,
                margin: '10px',
                cursor: 'pointer',
            }}
            onClick = {onClick}
        ></div>
    )
};


export const ToggleColor = () => {
    const [toggleColor1, setToggleColor1] = useState('red')
    const [toggleColor2, setToggleColor2] = useState('blue')


    const setToggleClick1 = () => {
        setToggleColor1(toggleColor2)
        setToggleColor2(toggleColor1)
    }

    const setToggleClick2 = () => {
        setToggleColor1(toggleColor2)
        setToggleColor2(toggleColor1)
    }

    return(
        <div>
            <CubeComponent color={toggleColor1} onClick={setToggleClick1}/>
            <CubeComponent color={toggleColor2} onClick={setToggleClick2}/>
        </div>
    )
}


