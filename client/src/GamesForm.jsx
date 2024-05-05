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

// import { useState } from "react";

// export default function GamesForm({ updatePlayers }) {
//   const [form, setForm] = useState({ name: "", age: 0, game: "", category: "" });

//   async function handleSubmit(event) {
//     event.preventDefault();
//     try {
//       const response = await fetch("http://localhost:8080/player", {
//         method: "POST",
//         body: JSON.stringify(form),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       if (response.ok) {
//         // Successfully submitted, now update the player data
//         updatePlayers(); // Call a function to fetch updated data
//         // Optionally, reset the form fields
//         setForm({ name: "", age: 0, game: "", category: "" });
//       } else {
//         console.error("Error submitting form data");
//       }
//       await onFormSubmit(form);
//     } catch (error) {
//       console.error("Error submitting form data:", error);
//     }
//   }



//   function handleChange(event) {
//     setForm({ ...form, [event.target.name]: event.target.value });
//   }

//   return (
//     <section className="entry-box">
//       <h3>Register A Player...</h3>
//       <div className="entry-form">
//         <form onSubmit={handleSubmit}>
//           <input name="name" placeholder="Enter Your Name" onChange={handleChange} />
//           <input name="age" type="number" placeholder="Enter Your Age" onChange={handleChange} />
//           <input name="game" placeholder="Game" onChange={handleChange} />
//           <input name="category" placeholder="Category" onChange={handleChange} />
//           <button type="submit">Register Player</button>
//         </form>
//       </div>
//     </section>
//   );
// }