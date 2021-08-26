/* use of button
add colour to button
add border to button
click on button
change colour on button click
icon with button
button size
 */

import React from 'react';
import {Button} from '@material-ui/core'
import {Delete} from '@material-ui/icons'

const ButtonMui = () =>{

    const [color, setColor] = React.useState('primary')
    const [disableBtn, setDisableBtn] = React.useState(false)

    const handleButtonClick = () =>{
        setDisableBtn(true)
        // setColor('secondary')

    }

    return <div> <Button
    // change colour of text
    color={color}
    variant="contained"
    disabled={disableBtn}
    onClick={handleButtonClick}
    startIcon={<Delete />}
    >Click me</Button>
    
    </div>
}

export default ButtonMui