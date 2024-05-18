import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CoinDetails from './pages/CoinDetails';
import Header from './layout/header';
import { StateProvider } from './state-managment/state';
import WatchList from './layout/watchlist';

function App() {
  return (
    <BrowserRouter>
      <StateProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin-details/:coinId" element={<CoinDetails />} />
        </Routes>
        <WatchList />
      </StateProvider>
    </BrowserRouter>
  );
}

export default App;
