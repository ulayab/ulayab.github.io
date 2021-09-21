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
    --contentMaxWidth: 900px;
    --navbarHeight: 60px;
    --primaryColor: #24292e;

    a {
        color: #6c7a88;
    }
    & > .center-content {
        max-width: var(--contentMaxWidth);
        margin: 0 auto;
    }
`