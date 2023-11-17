import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/login/login';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Navigation from './pages/navigation/navigation';
import Dashboard from './pages/dashboard/dashboard';

function App() {

  return (
    <div className="app bg-background">
    <Provider store={store}>
    <Navigation />
    <Routes>
      <Route path='/login' element={<Login/>}> </Route>
      <Route path='/dashboard' element={<Dashboard/>}> </Route>
    </Routes>
    </Provider>
    </div>

  )
}

export default App
