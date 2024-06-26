import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config(); 

const app = express();

app.use(cors());
app.use(express.json());

const connectionString = process.env.DATABASE_URL;

const db = new pg.Pool({ connectionString: connectionString });

app.get("/", (request, response) => {
  response.json("This is the root route");
});

app.get("/players", async (request, response) => {
  const result = await db.query(`SELECT
  players.name,
  players.age,
  ARRAY_AGG(games.item) AS games,
  ARRAY_AGG(games.category) AS category
  FROM players
  JOIN games_junction ON players.id = games_junction.player_id
  JOIN games ON games_junction.game_id = games.id
  GROUP BY players.name, players.age`);
  response.json(result.rows);
});

app.post("/player", async (request, response) => {
  const name = request.body.name;
  const age = request.body.age;
  const game = request.body.game;
  const category = request.body.category;
  const newplayer = await db.query(`INSERT INTO players (name, age) VALUES ($1, $2) RETURNING id`, [name, age]);
  const newplayerid = newplayer.rows[0].id;
  const newgame = await db.query(`INSERT INTO games (item, category) VALUES ($1, $2) RETURNING id`, [game, category]);
  const newgameid = newgame.rows[0].id;
  db.query(`INSERT INTO games_junction (player_id, game_id) VALUES ($1, $2)`, [newplayerid, newgameid]);
  console.log(newplayer.rows)
  console.log(newplayerid)
  response.json({ success: true });
});

app.listen(8080, () => console.log("I am running on 8080"));