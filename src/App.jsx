import { render } from '@testing-library/react';
import React from 'react';
import {v4 as uuidv4} from 'uuid';
import TodoItem from './components/TodoItem';

class App extends React.Component {
   constructor(props){
       super(props);
       this.state = {
           task: '',
           todos: []
       }
   }

   componentDidMount(){
       setTimeout(() => {
           this.setState({
               todos: [
                   ...this.state.todos,
                   {id:uuidv4(), task: 'what came first chicken or egg?' },
                   {id: uuidv4(), task: 'How did the chicken cross the road?'},
                   {id: uuidv4(), task: 'Knock Knock?'}
               ]
           })
       }, 1000);
   }

   handleSubmit(e){
       e.preventDefault();
       this.setState({
           task: '',
           todos:[...this.state.todos, { id:uuidv4(), task: this.state.task }]
       })
   }

   render(){
       return (
           <main className='container'>
               <section className='row justify-content-center mt-5'>
                   <div className="col-md-7">
                       <form className="form-group">
                           <label>Task:</label>
                           <input value={this.state.task} onChange={e => this.setState({ task:e.target.value})} className='form-control'/>
                           <button onClick={e => this.handleSubmit(e)} className='btn btn-primary mt-3'>Add Todo Task</button>
                       </form>
                   </div>
               </section>
               <section className='row justify-content-center mt-3'>
                   <div className='col-md-6'>
                       <ul className='list-group'>
                           {this.state.todos.map(todo => (
                               <TodoItem key={`todo-task-${todo.id}`}todo={todo} />
                           ))}
                       </ul>
                   </div>
               </section>
           </main>
       )
   }
}

export default App;