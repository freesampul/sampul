import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './main';
import { CommentsProvider } from './contexts/commentsContext';

function App() {
  return (
    <CommentsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </CommentsProvider>
  );
}

export default App;
