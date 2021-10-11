import React from "react"
import styled from "styled-components"
import {Link} from "gatsby"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export default function Navbar() {
    const { title } = useSiteMetadata()

    return (
        <Wrapper>
            <NavItem to="/">
                <img
                src={require(`../images/profile.jpg`)}
                alt="title profile picture"
                style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    margin: 0,
                    marginRight: 10
                }}
                />
                <h2>{title}</h2>
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

    & > .padding{
        flex: 1;
    }
`

const NavItem = styled(Link)`
    display: flex;
    align-items: center;
    margin-left: 10px;
    text-decoration: none;
    :first-child {
        margin: 0;
    }
    & h2 {
        margin: 0px;
    }

`