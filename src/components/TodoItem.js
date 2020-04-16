import React, { Component } from 'react';
import TomoList from './TomoList';

class TodoItem extends Component {
    constructor(props){
        super(props);

        this.state = {
            isEditing:false,
            editTomo:0
        }

        this.onEditClick = this.onEditClick.bind(this);
        this.onSaveClick = this.onSaveClick.bind(this);
        this.setEstimateTomo = this.setEstimateTomo.bind(this);   
    }

    render() {
        const {todo} = this.props;
        const idx = this.props.idx;

        if(this.state.isEditing){
            return (
                <tr>
                    <td><input type="text" data-idx={idx} defaultValue={todo.task} ref="editInput"/></td>
                    <td><TomoList estimateTomo={this.state.estimateTomo} setEstimateTomo={this.setEstimateTomo}/></td>
                    <td>
                    <button onClick={()=>{this.props.archiveTask(idx);this.setState({isEditing:false})}}>Archive</button>
                    <button onClick={this.onSaveClick}>Save</button>
                    </td>
                </tr>
            );
        }

        return (
            <tr>
                <td>{todo.task}</td>
                <td>{todo.estimateTomo}</td>
                <td>
                    <button onClick={this.onEditClick}>Edit</button>
                </td>
            </tr>
        );
    }

    onEditClick(){
        this.setState({isEditing:true,editTomo:this.props.estimateTomo})
    }

    onSaveClick(){
        const editinput = this.refs.editInput;
        const editTomo = this.state.editTomo;
        this.props.saveTask(+editinput.getAttribute('data-idx'),editinput.value,editTomo);   // + 把字串轉成數值
        this.setState({isEditing:false});
    }
    setEstimateTomo(number){
        this.setState({
            editTomo:number
        })
    }
}

export default TodoItem;