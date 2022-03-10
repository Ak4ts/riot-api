import axios from "axios";
require("dotenv").config()

export const api = axios.create({
  headers: {
    "X-Riot-Token": process.env.API_KEY,
  },
  baseURL: "https://br1.api.riotgames.com",
});
