import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EntryForm from './components/EntryForm';
import ViewEntry from './components/ViewEntry';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EntryForm />} />
        <Route path="/view/:date" element={<ViewEntry />} />
      </Routes>
    </Router>
  );
}

export default App;
