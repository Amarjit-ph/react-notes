
import React from "react";
import ReactDOM from "react-dom";

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options
        }
    }

    //LIFE CYCLE METHODS
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            //DO NOTHING
        }
        console.log('Fetching Data');
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('Saving Data');
        }
    }
    componentWillUnmount() {
        console.log('UNMOUNTED');
    }
    // REMOVE ALL
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    }
    // REMOVE INDIVIDUAL ITEM
    handleDeleteOption(opptoRemove) {
        this.setState((prevS) => ({
            options: prevS.options.filter((op) => {
                return opptoRemove !== op;
            })
        }));
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
        this.setState((prevS) => ({ options: prevS.options.concat(option) }))
    }
    render() {
        const subtitle = "Put your life in the hands of a computer";
        //const options = ["One thing", "Two thing", "Three things"];
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action hasOption={this.state.options.length > 0} handlePick={this.handlePick} />
                <Options options={this.state.options}
                    deleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption} />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: ['HELLO ', ' WORLD ']
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOption}>
                What should i Do?
       </button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
            {props.options.length === 0 && <h3>Please Add Task to get started</h3>}
            {props.options.map(option => (<Option key={option} optionText={option} handleDeleteOption={props.handleDeleteOption} />))}
            <button onClick={props.deleteOptions}>RESET</button>
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            <h3>{props.optionText}
                <button onClick={(e) => { props.handleDeleteOption(props.optionText); }}
                > Remove </button>
            </h3>
        </div>
    )
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

        this.setState(() => ({ error: error }))
        if (!error) {
            e.target.elements.option.value = "";
        }
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

