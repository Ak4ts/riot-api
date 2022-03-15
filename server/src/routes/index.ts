import { Router } from "express";
import Champions from "../controllers/Champion-V3";
import Summoners from "../controllers/Summoner-V4"

const routes = Router();

routes.get("/api/v1/freeweek", Champions.v3)
routes.get("/api/v1/summoner", Summoners.searchByName)
export default routes;
