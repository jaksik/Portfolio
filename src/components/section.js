import React from "react"
import "./layout.css"

const section = ({ children }) => (
    <div
        style={{
            width: `100%`,
            backgroundColor: ``
        }}>
        <div
            style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0px 1.0875rem 1.45rem`,
                paddingTop: 0,
            }}
        >
            <main>{children}</main>
        </div>
    </div>
)

export default section