import { Provider } from 'react-redux';
import React, { Suspense } from 'react';
import store from './stores/store';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NavBar from './components/navBar';
const DynamicForm = React.lazy(() => import('./pages/dynamicForm'))
const Form = React.lazy(() => import('./pages/form'))
const Table = React.lazy(() => import('./pages/table'))
const Login = React.lazy(() => import('./pages/login'))

function App () {
  const LoadingFallback = () => <div>Loading...</div>; // A loading indicator component

  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/dynamicForm" element={<Suspense fallback={<LoadingFallback />}><DynamicForm /></Suspense>} />
          <Route path="/" element={<Suspense fallback={<LoadingFallback />}><Table /></Suspense>} />
          <Route path="/form" element={<Suspense fallback={<LoadingFallback />}><Form /></Suspense>} />
          <Route path="/login" element={<Suspense fallback={<LoadingFallback />}><Login /></Suspense>} />


        </Routes>

      </Router>

    </Provider>

  );
}

export default App;
