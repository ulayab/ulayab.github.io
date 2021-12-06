import React from "react"
import styled from "styled-components"
import {Link} from "gatsby"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export default function Navbar() {
    const { title } = useSiteMetadata()

    return (
        <Wrapper>
            <div className="center-content row">
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
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: fixed;
    padding: 5px 0px;
    z-index: 10;
    background-color: #ffffff;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05), 0 6px 6px rgba(0, 0, 0, 0.033);
    top: 0px;
    left: 0px;
    width: 100vw;
    height: var(--navbarHeight);
    margin: 0 auto;
    transition: 200ms;
    
    & .padding{
        align-items: center;
        display: flex;
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