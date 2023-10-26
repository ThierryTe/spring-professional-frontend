import React, { useContext } from 'react'
import './TodoApp.css'
import AuthContext  from './security/AuthContext'

export default function FooterComponent() {
  const authContext = useContext(AuthContext);

  return (
      <footer className="footer">
          <div className="container">
              Your footer
          </div>
          
    </footer>
  )
}
