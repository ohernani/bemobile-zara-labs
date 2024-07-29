import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { CharacterListpage } from './pages/CharacterListpage';
import { FavoritesPage } from './pages/FavoritesPage';
import { CharacterDetail } from './pages/CharacterDetail';

export const App = () => {
  return (
    <div data-testid="app-container">
      <Router basename="/">
        <Header />
        <Routes>
          <Route path="/" element={<CharacterListpage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/detail/:id" element={<CharacterDetail />} />
        </Routes>
      </Router>
    </div>
  );
};
