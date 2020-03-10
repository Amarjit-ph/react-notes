import React from "react";
import ReactDOM from "react-dom";

class IndecisionApp extends React.Component {
    render() {
        const title = "Indescision";
        const subtitle = "Put your life in the hands of a computer";
        const options = ["One thing", "Two thing", "Three things"];
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
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
    handlePick() {
        alert("CLICK");
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}> What should i Do? </button>
            </div>
        );
    }
}

//# PART ONE

//ADD RRMOVE ALL BUTTON
//SETUP HANDLE REOMVE ALL BUTTON
//ONCLICK FIRE THE METHOD

class Options extends React.Component {
    removeAll() {
        alert("All Removed");
    }
    render() {
        return (
            <div>
                {this.props.options.map(option => (
                    <Option key={option} optionText={option} />
                ))}
                <button onClick={this.removeAll}>RESET</button>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return <div>{this.props.optionText}</div>;
    }
}

// #PART TWO

// SETUP FORM WITH TEXT INPUT
// FIRE ON SUBMIT
// HANDLE SUBMIT VALUE

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        if (option) {
            alert(option);
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("root"));
