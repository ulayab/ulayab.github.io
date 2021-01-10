import React from "react"
import styled from "styled-components"
import Navbar from "./navbar"

export default function Layout({children}) {
    return(
        <Wrapper>
            <div className="navbar">
                <Navbar />                
            </div>
            <div className="center-content">
                {children}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    & > .center-content {
        max-width: 900px;
        margin: 0 auto;
    }
`