import React from 'react';
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";

export default function Footer(){
    const navigate = useNavigate()

    const back = () => navigate(-1)

    return (
        <>
            <h1>FooterPage</h1>
            <Button variant='contained' onClick={back}>back</Button>
        </>
    )
}