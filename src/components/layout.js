import React from "react"
import styled from "styled-components"
import { MDXProvider } from "@mdx-js/react"
import Navbar from "./navbar"
import Profile from "./profile"
// import * as DesignSystem from "../utils/mdxDesignSystem"
import Highlight, { defaultProps } from "prism-react-renderer";
import github from 'prism-react-renderer/themes/github';
import duotoneLight from 'prism-react-renderer/themes/duotoneLight';

export default function Layout({children}) {
    return(
        <MDXProvider
            components={{
                // Map HTML element tag to React component
                // h1: DesignSystem.H1,
                // h2: DesignSystem.H2,
                // h3: DesignSystem.H3,
                // Or define component inline
                // element names src: https://mdxjs.com/table-of-components/
                inlineCode: props =>
                    <span style={{ backgroundColor: "#eee", color:'#d97796', padding: '2px 6px', marginRight:5, borderRadius: 5,fontWeight: '500', letterSpacing: 0.7 }} {...props} />,
                p: props => <p {...props} style={{ lineHeight: 2 }} />,
                pre: props => <Highlight {...defaultProps} theme={duotoneLight} code={props.children.props.children} language="jsx">
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                  <pre className={className} style={style}>
                    {tokens.map((line, i) => (
                        <Line key={i} {...getLineProps({ line, key: i })}>
                        <LineNo>{i + 1}</LineNo>
                        <LineContent>
                            {line.map((token, key) => (
                            <span key={key} {...getTokenProps({ token, key })} />
                            ))}
                        </LineContent>
                        </Line>
                    ))}
                  </pre>
                )}
              </Highlight>
            }}
            >
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
        </MDXProvider>
    )
}

const Wrapper = styled.div`
    --contentMaxWidth: 900px;
    --navbarHeight: 60px;
    --primaryColor: #24292e;
    --darkerGrey: #48525c;
    --darkGrey: #949ca5;
    --lightGrey: #afafaf;
    --lighterGrey: #cfcfcf;

    a {
        color: #6c7a88;
    }

    p {
        margin: 0px;
    }

    & .center-content {
        max-width: var(--contentMaxWidth);
        margin: 0 auto;
    }

    & .row {
        display: flex;
        /* align-items: center; */
    }

    & .navbar {
       padding-top: var(--navbarHeight);
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
        color: var(--darkerGrey);
    }

    & .date {
        color: var(--darkGrey);
        font-size: 14px;
        letter-spacing: 0.7px;
    }
`

const Line = styled.div`
  display: table-row;
`;

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

const LineContent = styled.span`
  display: table-cell;
`;