import * as React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <React.StrictMode>
          <Link to="/C">C</Link> |<Link to="/R">R</Link> |<Link to="/P">P</Link>{' '}
          |
          <Routes>
            <Route path="/" element={<div>R</div>}>
              <Route index element={<div>R</div>} />
              <Route path="C" element={<div>C</div>} />
              <Route path="R" element={<div>R</div>} />
              <Route path="P" element={<div>P</div>} />
              <Route path="*" element={<div>No Page</div>} />
            </Route>
          </Routes>
        </React.StrictMode>
      </BrowserRouter>
    </React.Fragment>
  );
}
