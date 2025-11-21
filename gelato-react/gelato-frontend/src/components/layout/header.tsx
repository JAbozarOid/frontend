import React from "react";
import {Button} from "../base/button";

export const Header: React.FC = () => {

    return (
        <header>
            <Button variant={"contained"}>
                contained
            </Button>
            <Button variant={"outlined"}>
                outlined
            </Button>
            <Button variant={"text"}>
                text
            </Button>
        </header>
    )
}