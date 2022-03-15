import axios from "axios";
require("dotenv").config()

export const api = axios.create({
  headers: {
    "X-Riot-Token": process.env.API_KEY,
  }
});

export const regions = ["br1", "eun1", "euw1", "jp1", "kr", "la1", "la2", "na1", "oc1", "ru", "tr1"]