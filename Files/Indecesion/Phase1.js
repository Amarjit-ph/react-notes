/* 
INDECISION APP PHASE I

~COMPONENTS
~STATES
~DATA STREAM BOTH DIRECTION
~ERROR HANDLING
~FORM INPUT
*/

import React from "react";
import ReactDOM from "react-dom";

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: ['one', 'two', 'three']
        }
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }

    handlePick() {
        const random = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[random];
        alert(option);
    }
    handleAddOption(option) {
        //FORM VALIDATION
        if (!option) {
            return "Enter Vaild Value to add Item";
        } else if (this.state.options.indexOf(option) > -1) {
            return "This Item Already Exist";
        }
        this.setState((prevS) => {
            return {
                options: prevS.options.concat(option)
            }
        });
    }
    render() {
        const title = "Indescision";
        const subtitle = "Put your life in the hands of a computer";
        //const options = ["One thing", "Two thing", "Three things"];
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action hasOption={this.state.options.length > 0} handlePick={this.handlePick} />
                <Options options={this.state.options} deleteOptions={this.handleDeleteOptions} />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {

    render() {
        return (
            <div>
                <button
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOption}>
                    What should i Do?
         </button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                {this.props.options.map(option => (
                    <Option key={option} optionText={option} />
                ))}
                <button onClick={this.props.deleteOptions}>RESET</button>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return <div>{this.props.optionText}</div>;
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        //alert(error);
        this.setState(() => {
            return {
                error: error
            };
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.error}</h1>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add option</button>
                </form>
            </div >
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("root"));
