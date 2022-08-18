
import {Typography} from "@mui/material";
import '../../fonts/fonts.css'
import {useState} from "react";

export const MyName = () => {
    const [color, setColor] = useState('#ffffff')

    const getRandomColor = () =>  '#'+Math.floor(Math.random()*16777215).toString(16)

    return <Typography
        sx={{
            color: color,
            fontSize:100,
            fontFamily: 'DancingScript'
        }}
        onClick={() => setColor(getRandomColor())}
    >
        Bociasan
    </Typography>
}
export default MyName