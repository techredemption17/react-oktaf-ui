import React from 'react'
import LayoutAdmin from './layouts/admin'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/home'

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route
            path={'/'}
            element={
              <LayoutAdmin>
                <Home />
              </LayoutAdmin>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
