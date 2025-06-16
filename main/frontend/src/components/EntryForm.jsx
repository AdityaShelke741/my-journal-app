import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function EntryForm() {
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/v1/entries/date', {
        date,
        content
      });
      navigate(`/view/${date}`);
    } catch (error) {
      console.error('Error submitting entry:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Write Your Journal</h2>
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Entry:
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default EntryForm;
