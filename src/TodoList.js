import React, {Component} from 'react';

class TodoList extends Component {
    render(){
        const {todos} = this.props;
        //const todos = this.props.todos
        const todoList = todos.map(t => <li key={t}>{t}</li>);
        return(
            <ul>
                {todoList}
            </ul>
        )
    }
}

export default TodoList;