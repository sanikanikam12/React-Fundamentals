import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setMessage("Registration Successful!");
  }

  return (
    <div>
      <h1>Student Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <label>Student Name:</label>
        <br />
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <br /><br />

        <label>Course:</label>
        <br />
        <input
          type="text"
          value={course}
          onChange={(event) => setCourse(event.target.value)}
        />

        <br /><br />

        <button type="submit">Submit</button>
      </form>

      <h2>{message}</h2>

      {message && (
        <div>
          <p>Name: {name}</p>
          <p>Course: {course}</p>
        </div>
      )}
    </div>
  );
}

export default App;
