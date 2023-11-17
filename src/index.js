import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TodoList from './App';
import {ToggleColor} from './components/CubeComponent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoList />
    <ToggleColor/>
  </React.StrictMode>
);
