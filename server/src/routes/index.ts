import { Router } from "express";
import Champions from "../controllers/Champion-V3";
import Summoners from "../controllers/Summoner-V4"
import Mastery from "../controllers/Champion-Mastery-V4"

const routes = Router();

routes.get("/api/v1/freeweek", Champions.v3)
routes.get("/api/v1/summoner", Summoners.searchByName) 
routes.get("/api/v1/mastery/:summoner", Mastery.bySummoner);
export default routes;
