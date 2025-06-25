import { Routes, Route } from 'react-router-dom';
import EntryForm from './components/EntryForm';
import ViewEntry from './components/ViewEntry';
import PrivateRoute from './components/PrivateRoute';
import LandingPage from './pages/LandingPage'; // now the main home page

function App() {
  return (
    <Routes>
      {/* Public Landing Page with Login + Register Forms embedded */}
      <Route path="/" element={<LandingPage />} />

      {/* Protected Routes */}
      <Route
        path="/journal"
        element={
          <PrivateRoute>
            <EntryForm />
          </PrivateRoute>
        }
      />

      <Route
        path="/view"
        element={
          <PrivateRoute>
            <ViewEntry />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
