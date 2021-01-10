import React from "react"
import styled from "styled-components"
import {Link} from "gatsby"

export default function Navbar() {
    return (
        <Wrapper>
            <NavItem to="/">
                <h1>Site name</h1>
            </NavItem>
            <div className="padding" />
            <NavItem to="/">Blog</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/contact">Contact</NavItem>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    max-width: 900px;
    margin: 0 auto;
    & > h1 {}
    & > .padding{
        flex: 1;
    }
`

const NavItem = styled(Link)`
    margin-left: 10px;
    text-decoration: none;
    :first-child {
        margin: 0;
    }
`