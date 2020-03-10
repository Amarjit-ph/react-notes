/*
======================================
Indecision App Part - 1
======================================
*/
const app = {
    title: "Indecision App",
    options: ['ItemOne', 'ItemTwo']
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        renderApp();
    }
};

const removeAll = () => {
    app.options = [];
    renderApp();
}

const onDecision = () => {
    const Rnum = Math.floor(Math.random() * app.options.length);
    const option1 = app.options[Rnum];
    alert(option1);

}
const renderApp = () => {
    const template = (
        <div>
            <h1> Indecision App </h1>
            <p>Put your life in the hands of Computer</p>
            <p>Here are your options :</p>
            <ol>
                {
                    app.options.map((opns) => <li>{opns}</li>)
                }
            </ol>

            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
            <button onClick={removeAll}>Reset </button>
            <button disabled={app.options.length === 0} onClick={onDecision}>What should i Do ?</button>

        </div>
    );
    ReactDOM.render(template, document.getElementById('root'));
}

renderApp();

