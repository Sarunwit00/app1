import React from "react"

export function Header(){
    const aStyle = {
        display: "inline-block",
        margin: "7px",
        color:'blue',
        textDecoration: 'none',
    }
    return (
        <div style={{backgroundColor: '#ccc', padding: "5px 0"}}>
            <a href="#" style={aStyle}>Home</a> |&nbsp;
            <a href="#" style={aStyle}>React</a> |&nbsp;
            <a href="#" style={aStyle}>React Native</a>
        </div>
    )
}

export function Content(){
    return (
        <div style={{textAlign: 'center', marginTop: '50px'}}>
            <h2>
                Hello<br />
                React &amp; React Native
            </h2>
        </div>
    )
}

export function Footer(){
    return (
        <div style={{textAlign: 'center', marginTop: '40px', color: "#666"}}>
            &copy; 2022 All rights reserved
        </div>
    )
}
