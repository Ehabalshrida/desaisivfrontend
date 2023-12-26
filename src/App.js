import { Provider } from 'react-redux';
import React, { Suspense } from 'react';
import store from './stores/store';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NavBar from './components/navBar/navBar';
import Spiner from './components/spinner/spiner';
import './App.scss'
const DynamicForm = React.lazy(() => import('./pages/dynamicForm'))
const Form = React.lazy(() => import('./pages/form'))
const Table = React.lazy(() => import('./pages/table'))
const Login = React.lazy(() => import('./pages/login'))
function App () {
  return (
    <div className='app-wrapper'>
    <Provider store={store}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/dynamicForm" element={<Suspense fallback={<Spiner />}><DynamicForm /></Suspense>} />
          <Route path="/" element={<Suspense fallback={<Spiner />}><Table /></Suspense>} />
          <Route path="/form" element={<Suspense fallback={<Spiner />}><Form /></Suspense>} />
          <Route path="/login" element={<Suspense fallback={<Spiner />}><Login /></Suspense>} />


        </Routes>

      </Router>

    </Provider>
    </div>
  );
}

export default App;
