import React from "react";
import { userContext } from "./context";

export default class Header2 extends React.Component {
    static contextType = userContext;
    render() {
        let [user , setUser] = this.context;
        const headerStyle = {
            backgroundColor: '#cee',
            padding: 5,
            textAlign: 'center'
        }
        const onClickLogin = (event) => {
            event.preventDefault()
            setUser('Tom jerry')
        }
        const onClickLoginout = (event)  => {
            event.preventDefault()
            setUser('')
        }
        return (
            <div style={headerStyle}>
                <a href = " ">Home</a>&nbsp;-&nbsp;
                <a href = " ">Product</a>&nbsp;-&nbsp;
                <a href = " ">Contact Us</a>&nbsp;-&nbsp;&nbsp;
                {
                    (user) ? <span>[{user}&nbsp;:&nbsp;<a href=" " onClick={onClickLoginout}>Signout</a>]</span>
                    : <span>[<a href=" " onClick={onClickLogin}>Signin</a>]</span>              
                }
            </div>
        )  
    }
}