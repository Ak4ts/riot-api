import { Router } from "express";
import ChampionV3 from "../controllers/Champion-V3";

const routes = Router();

routes.get("/api/v1/freeweek", ChampionV3.v3)

export default routes;
