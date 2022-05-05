import './style/index.scss';
import React from 'react';
import {createRoot} from 'react-dom/client';

/**
 * @return {JSX.IntrinsicElements} a custom htmml element by React
 */
function App() {
  return <div>Hello</div>;
};

document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.body);
  root.render(<App />);
});
