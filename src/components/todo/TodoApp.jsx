import React from 'react'
import LoginComponent from './LoginComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
 import WelcomeComponent from './WelcomeComponent'
import ErrorComponent from './ErrorComponent'
import ListTodosComponent from './ListTodosComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import LogoutComponent from './LogoutComponent'
import './TodoApp.css'
import AuthProvider from './security/AuthContext'
import AuthenticatedRoute from './security/AuthenticatedRoute'
export default function TodoApp() {
  return (
      <div className="TodoApp">
         <AuthProvider>
          <BrowserRouter>
               <HeaderComponent />
              <Routes>
                   <Route path='/' element={<LoginComponent />}></Route>
                  <Route path='/login' element={<LoginComponent />}></Route>
                  <Route path='/welcome/:username' element={<AuthenticatedRoute> <WelcomeComponent /></AuthenticatedRoute>}></Route>
                  <Route path='/todos' element={<AuthenticatedRoute> <ListTodosComponent /></AuthenticatedRoute>}></Route>
                  <Route path="/logout" element={<AuthenticatedRoute> <LogoutComponent /></AuthenticatedRoute>}></Route>
                   <Route path='*' element={<ErrorComponent />}></Route>
              </Routes>
              <FooterComponent />
              </BrowserRouter>
              </AuthProvider>
          
    </div>
  )
}
 