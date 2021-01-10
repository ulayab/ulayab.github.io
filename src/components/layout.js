import React from "react"

export default function Layout({children}) {
    return(
        <div>
            <div className="navbar" style={{ backgroundColor: 'lightblue', display: 'flex'}}>
                <h1>site name</h1>
                <p>navbar</p>
            </div>
            {children}
        </div>
    )
}