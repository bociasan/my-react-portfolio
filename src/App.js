import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Background from "./components/Background/Background";
import MyName from "./components/MyName/MyName";


function App() {
    return (
        <Box
            sx={{
                width: '100vw',
                height: '100vh',
                backgroundColor: 'transparent',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Background/>
            <MyName/>
        </Box>
    );
}

export default App;
