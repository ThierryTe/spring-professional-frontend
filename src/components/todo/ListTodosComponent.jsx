import React from 'react'

export default function ListTodosComponent() {
    const today = new Date();

    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay())
 
    const todos = [
        { id: 1, description: 'Learn Spring Boot', done:false, targetDate: targetDate},
        { id: 2, description: 'Learn Angular',  done:false, targetDate: targetDate },
        { id: 3, description: 'Learn DevOps', done:false, targetDate: targetDate },
        { id: 4, description: 'Learn Jenkins', done:false, targetDate: targetDate }
    ]
  return (
      <div className="container">
          <div>
              <table className='table'>
                  <thead>
                      <tr>
                      <td>Id</td>
                          <td>Description</td>
                          <td>Is done?</td>
                          <td>Target date</td>
                  </tr>
                  </thead>
                  <tbody>
                      {todos.map(todo => (
                            <tr key={todo.id}>
                          <td>{todo.id}</td>
                              <td>{todo.description}</td>
                              <td>{todo.done.toString()}</td>
                               <td>{todo.targetDate.toDateString()}</td>
                      </tr>
                      ))}
                    
                  </tbody>
                  
              </table>
          </div>
      
    </div>
  )
}
