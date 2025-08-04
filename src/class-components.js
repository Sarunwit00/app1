import React, { Component } from "react";

export default class Button extends Component {
    showAlert(msg){
        alert(msg)
    }

    onClickHandler = () => {
        this.showAlert('Hello')
    }

    render() {
        return <button onClick={this.onClickHandler}>OK</button>    
    }
}
