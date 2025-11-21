import {Header} from "./header.tsx";
import {Footer} from "./footer.tsx";
import React from "react";

// always header and footer in every part of my application is fixed and main is dynamic
// for getting dynamic components inside of out main we need to use props like children as input parameters of Layour
// parent element instead of <div> can be <React.Fragment></React.Fragment>  or <></> --> empty is means fragment
export const Layout: React.FC<React.PropsWithChildren> = ({children}) => {

    return (
        <React.Fragment>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </React.Fragment>

    )
}