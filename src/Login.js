import React from 'react'

function Login() {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("button clicked");
        if (name === '') {
            return;
        }
        else {
            const userInput = {
                id: Math.random(),
                value: this.state.value,
                status: false,
                isChecked: false,

            };
            console.log("list added");
            const list = [...this.state.list];
            list.push(userInput);

            this.setState({
                list: list,
                value: ""
            });
            console.log("push Operation");
        }
    }
    const updateText = (event) => {
        setName(event.target.value)
        console.log(event.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="todo">
                <input className="todo__input" type="text" value={name} onChange={updateText} />
                <button className="todo__input-button" type="submit" value="Submit">Submit</button>
            </form>
        </div>
    )
}

export default Login
