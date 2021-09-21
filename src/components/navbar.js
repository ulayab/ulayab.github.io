import React from "react"
import styled from "styled-components"
import {Link} from "gatsby"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export default function Navbar() {
    const { title } = useSiteMetadata()

    return (
        <Wrapper>
            <NavItem to="/">
                <h1>Welcome to {title}</h1>
            </NavItem>
            <div className="padding" />
            <NavItem to="/">Blog</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/contact">Contact</NavItem>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: var(--navbarHeight);
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