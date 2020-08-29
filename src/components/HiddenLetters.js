import React, { Component } from "react";

export default class HiddenLetters extends Component {
    render() {
        return (
            <div className={this.props.letter}>
                {this.props.letter}
            </div>
        );
    }
}
