import React, { useEffect, useState } from 'react'
import { deleteTodoApi, retrieveAllTodoList } from './api/TodoListApiService';
import { useAuth } from './security/AuthContext';
import { useNavigate } from 'react-router-dom';
export default function ListTodosComponent() {
   
    const [todos, setTodos] = useState([])
    const [message, setMessage] = useState([null])
    const authContext = useAuth()
    const username = authContext.username
    const navigate = useNavigate()

    useEffect(
        () => {
          refreshTodos(todos)  
        },[]
    )
    function refreshTodos() {
        retrieveAllTodoList(username)
            .then(response => { 
                setTodos(response.data)
            })
            .catch(err => console.error(err))
    }

    function deleteTodo(id) {
        deleteTodoApi(username,id)
            .then(
                () => {
                     setMessage(`Delete success !`)
                    refreshTodos() 
                }
            )
            .cath(error => console.log(error))
}

    function updateTodo(id) {
        navigate(`/todo/:${id}`)
    }


    function addNewTodo() {
    navigate(`/todo/-1`)
}



  return (
      <div className="container">
          <div className="btn btn-success m-5" onClick={addNewTodo}>Add new Todo</div>
          <div>
              {message &&  <div className="alert alert-warning">{ message}</div>}
              <table className='table'>
                  <thead>
                      <tr>
                          <th>Description</th>
                          <th>Is done?</th>
                          <th>Target date</th>
                          <th>Delete</th>
                          <th>Update</th>
                  </tr>
                  </thead>
                  <tbody>
                      {todos.map(todo => (
                            <tr key={todo.id}>
                          <td>{todo.id}</td>
                              <td>{todo.description}</td>
                              <td>{todo.done.toString()}</td>
                              {/* <td>{todo.targetDate.toDateString()}</td> */}
                              <td>{todo.targetDate.toString()}</td>
                              <td><button className="btn btn-warning" onClick={() => deleteTodo(todo.id)}>Delete</button></td>
                               <td><button className="btn btn-success" onClick={() =>updateTodo(todo.id)}>Update</button></td>
                      </tr>
                      ))}
                    
                  </tbody>
                  
              </table>
          </div>
      
    </div>
  )
}
