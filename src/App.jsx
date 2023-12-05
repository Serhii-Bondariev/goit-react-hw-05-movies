import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import Reviews from './pages/Reviews/Reviews';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movies/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./'));

const Layout = ({ children }) => (
  <div className="app">
  <div className="appBacdrop">
    <Header />
    <div className="mainWrapper">
      <main>{children}</main>
    </div>
    </div>
  </div>
);

const App = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      <Route
        path="/"
        element={<Layout><Home /></Layout>}
      />
      <Route
        path="/movies"
        element={<Layout><Movies /></Layout>}
      />
      <Route
        path="/movies/:movieId/*"
        element={<Layout><MovieDetails /></Layout>}
      />
      <Route
        path="/movies/:movieId/cast/*"
        element={<Layout> <Cast /></Layout>}
      />
      <Route
        path="/movies/:movieId.reviews"
        element={<Layout><Reviews /></Layout>}
      />
    </Routes>
    <Footer />
  </Suspense>
  
);

export default App;