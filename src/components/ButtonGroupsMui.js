/* use of ButtonGroup
properties of ButtonGroup
Orientation of ButtonGroup
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

    return <Button
    // change colour of text
    color={color}
    variant="contained"
    disabled={disableBtn}
    onClick={handleButtonClick}
    startIcon={<Delete />}
    >Click me</Button>
}

export default ButtonMui