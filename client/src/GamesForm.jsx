import { useState } from "react";

export default function GamesForm() {
  const [form, setForm] = useState({ name: "", age: 0, game: "", category: "" });

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:8080/player", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  return (
    <section className="entry-box">
    <h3>Register A Player...</h3>
    <div className="entry-form">
    <form onSubmit={handleSubmit}>
      <p>
      </p>
      <input name="name" placeholder="Enter Your Name" onChange={handleChange} />
      <input
        name="age"
        type="number"
        placeholder="Enter Your Age"
        onChange={handleChange}
      />
            <input name="game" placeholder="Game" onChange={handleChange} />
            <input name="category" placeholder="Category" onChange={handleChange} />
            <p>
<button>Register Player</button>
</p>
    </form>
    </div>
  </section>
    );
  }

