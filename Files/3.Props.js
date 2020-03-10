
class IndecisionApp extends React.Component {
    render() {
        const title = "Indecision";
        const subtitle = "Put your life in the hands of a computer";
        const options = ["One thing", "Two thing", "Three things"];
        return (
            <div>
                <Header title={title} subtitle={subtitle} />  // PASSED PROPS TO HEADER COMPONNENTS
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
    render() {
        return (
            <div>
                <button> What should i Do? </button>
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
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>{this.props.optionText}</div>
        )
    }
}
