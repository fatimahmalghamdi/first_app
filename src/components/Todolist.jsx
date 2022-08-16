import { Component } from "react";

class Todolist extends Component {
    render() {
        return (
            <div className="mydiv">
                <h3>Things I need to do: </h3>
                <ul>
                    <li> Learn React</li>
                    <li> Go to the Gym</li>
                    <li> Eat healthy food</li>
                    <li> Practice programming</li>
                </ul>
            </div>
        );
    }
}

export default Todolist;