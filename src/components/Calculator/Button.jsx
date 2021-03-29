import React, { Component } from 'react';
//import PropTypes from "prop-types"

class Button extends Component {
    state = { 
        keyMap : {
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            0: "0",
            EQUAL: "=",
            MULTIPLY: "shift+8",
            ADD: "shift+=",
            SUBTRACT: "-",
            DIVIDE: "/",
            AC: "c",
            DOT: ".",
            PERCENT: "shift+5",
            ENTER: "enter",
          },
        handlers : {
           1: () => {
             this.props.onClick("1");
           },
           2: () => {
             this.props.onClick("2");
           },
           3: () => {
             this.props.onClick("3");
           },
           4: () => {
             this.props.onClick("4");
           },
           5: () => {
             this.props.onClick("5");
           },
           6: () => {
             this.props.onClick("6");
           },
           7: () => {
             this.props.onClick("7");
            },
           8: () => {
             this.props.onClick("8");
           },
           9: () => {
            this.props.onClick("9");
           },
           0: () => {
             this.props.onClick("0");
           },
           EQUAL: () => {
             this.props.onClick("=");
           },
           MULTIPLY: () => {
             this.props.onClick("*");
           },
           SUBTRACT: () => {
             this.props.onClick("-");
           },
           ADD: () => {
             this.props.onClick("+");
           },
           DIVIDE: () => {
             this.props.onClick("÷");
           },
           AC: () => {
             this.props.onClick("AC");
           },
           DOT: () => {
             this.props.onClick(".");
           },
           PERCENT: () => {
             this.props.onClick("%");
           },
           ENTER: () => {
             this.props.onClick("=");
           },
         }
     }
     
    render() { 
        return ( 
            <React.Fragment keyMap={this.state.keyMap} handlers={this.state.handlers}>
                <button className={this.props.className} onClick={this.props.onClick.bind(null, this.props.value)}>
                    {this.props.value}
                </button>
            </React.Fragment>
         );
    }
}
 
export default Button;