import React from "react";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

export default function AboutPage(){
    const navigate = useNavigate()

    const back = () => navigate(-1)

    return (
        <>
            <h1>AboutPage</h1>
            <Button variant='contained' onClick={back}>back</Button>
        </>
    )
}