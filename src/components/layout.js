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
            <div className="center-content row" style={{marginTop: 30}}>
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
        /* align-items: center; */
    }

    & .post-item {
        margin-bottom: 50px;
    }

    & .post-title {
        display: block;
        font-size: 20px;
        font-weight: 700;
        line-height: 1.1;
        text-decoration: none;
        color: #48525c;
    }

    & .date {
        color: #949ca5;
        font-size: 14px;
    }
`