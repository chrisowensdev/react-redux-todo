import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  _updateInput = input => {
    this.setState({ input });
  };

  _handleAddTodo = () => {
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <input
          onChange={e => this._updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-todo" onClick={this._handleAddTodo}>
          Add Todo
        </button>
      </div>
    );
  }
}

export default connect(null, { addTodo })(AddTodo);
