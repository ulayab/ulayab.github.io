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
                // pre: props => <pre {...props} style={{backgroundColor: 'blue', color: 'yellow'}}/>, 
                // code: props => <code {...props} style={{backgroundColor: 'red', color: 'pink'}}/>,
                // p: props => <p {...props} style={{ color: "rebeccapurple" }} />,
                pre: props => <Highlight {...defaultProps} theme={duotoneLight} code={props.children.props.children} language="jsx">
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                  <pre className={className} style={style}>
                      {console.log('props----',props)}
                    {tokens.map((line, i) => (
                      <div {...getLineProps({ line, key: i })}>
                        {line.map((token, key) => (
                          <span {...getTokenProps({ token, key })} />
                        ))}
                      </div>
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