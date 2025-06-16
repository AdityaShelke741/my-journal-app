import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ViewEntry = () => {
  const { date } = useParams(); // gets the `date` from /view/:date
  const [entry, setEntry] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/v1/entries/${date}`);
        setEntry(res.data);
        setError("");
      } catch (err) {
        setEntry(null);
        setError("No entries found");
      }
    };

    fetchEntry();
  }, [date]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Journal Entry for {date}</h2>
      {entry ? (
        <div>
          <p>{entry.content}</p>
        </div>
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
};

export default ViewEntry;
