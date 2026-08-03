import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppPropDrilling from './propDrilling/AppPropDrilling';

// This top-level switcher just lets you flip between:
//  - the Task 1 "prop drilling" demo (the problem)
//  - the Task 2-5 Context API solution (App.jsx)
// It is not part of the assessment requirements itself.
function Root() {
  const [view, setView] = useState('context');

  return (
    <div>
      <div className="switcher">
        <button
          className={view === 'drilling' ? 'active' : ''}
          onClick={() => setView('drilling')}
        >
          1. Prop Drilling (Problem)
        </button>
        <button
          className={view === 'context' ? 'active' : ''}
          onClick={() => setView('context')}
        >
          2-5. Context API + Hook + Cart (Solution)
        </button>
      </div>

      {view === 'drilling' ? <AppPropDrilling /> : <App />}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
