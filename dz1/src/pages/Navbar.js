import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";

export default function NavbarPage(){

    const navigate = useNavigate()

    const back = () => navigate(-1)

    return (
        <>
            <h1>NavBar</h1>
            <Button variant='contained' onClick={back}>back</Button>
        </>
    )
}
