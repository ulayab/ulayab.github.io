import React from "react"
import styled from "styled-components"
import Navbar from "./navbar"
import Profile from "./profile"

export default function Layout({children}) {
    return(
        <Wrapper>
            <div className="navbar">
                <Navbar />                
            </div>
            <div className="center-content row">
                <Profile/>
                <div style={{flexBasis: 140}}/>
                <div>{children}</div>
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

    p {
        margin: 0px;
    }

    & > .center-content {
        max-width: var(--contentMaxWidth);
        margin: 0 auto;
    }

    & .row {
        display: flex;
    }
`