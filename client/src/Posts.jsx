import { useState, useEffect } from "react";

export default function PostsPage() {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
      getPlayers();
    }, []);

    async function getPlayers() {
      const response = await fetch("https://week-seven-assignment.onrender.com/players");
      const data = await response.json();
      setPlayers(data);
    }

    
    return (
          <section className="posts-form">
        <h3>Meet The Attendees...</h3>
        <div className="attendees-grid">
        {console.log(players)}
        {players.map((player) => {
        return (
          <div key={player.id}>
            <h2>
              {player.name} age {player.age}
            </h2>
            <p>{player.name} is bringing to the games night:</p>
            <ul>
                <h2>
              {player.games.map((game) => {
                return <li key={game}>{game}</li>;
              })}
              </h2>
                          <p>The category of this game is:</p>
                          <h2>
                            {player.category.map((game) => {
                return <li key={game}>{game}</li>;
              })}
              </h2>
            </ul>
          </div>
        );
    })}
    </div>
  </section>
    );
  }


// import { useState, useEffect } from "react";

// export default function PostsPage() {
//   const [players, setPlayers] = useState([]);

//   useEffect(() => {
//     getPlayers();
//   }, []);

//   async function getPlayers() {
//     try {
//       const response = await fetch("http://localhost:8080/players");
//       const data = await response.json();
//       setPlayers(data);
//     } catch (error) {
//       console.error("Error fetching players:", error);
//     }
//   }

//   // New function to fetch updated players
//   async function fetchUpdatedPlayers() {
//     try {
//       const response = await fetch("http://localhost:8080/players");
//       const data = await response.json();
//       setPlayers(data);
//     } catch (error) {
//       console.error("Error fetching updated players:", error);
//     }
//   }

//   return (
//     <section className="posts-form">
//       <h3>Meet The Attendees...</h3>
//       <div className="attendees-grid">
//         {players.map((player) => (
//           <div key={player.id}>
//             <h2>
//               {player.name} age {player.age}
//             </h2>
//             <p>{player.name} is bringing to the games night:</p>
//             <ul>
//               {player.games.map((game) => (
//                 <li key={game}>{game}</li>
//               ))}
//             </ul>
//             <p>The category of this game is:</p>
//             <ul>
//               {player.category.map((category) => (
//                 <li key={category}>{category}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

