import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EntryForm from './components/EntryForm';
import ViewEntry from './components/ViewEntry';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';
import Register from './pages/Register'; 

function App() {
  return (
  
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      <Route path="/" element={
        <PrivateRoute>
          <EntryForm />
        </PrivateRoute>
      } />
      
      <Route path="/view" element={
        <PrivateRoute>
          <ViewEntry />
        </PrivateRoute>
      } />
    </Routes>
  
  );
}



export default App;
