import React, { Component } from 'react';

class AddBar extends Component {
    render() {
        const {currentText, setText, addTodo} = this.props;
        return (
            <div>
                <input 
                   type="text" 
                   value={currentText} 
                   onChange={setText} />
                <button onClick={addTodo}>Add</button>
            </div>
        );
    }
} 

export default AddBar;