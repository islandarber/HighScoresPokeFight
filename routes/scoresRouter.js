import express from "express";
import {retrieveGameScores, saveGameScore} from "../controllers/scoreControllers.js";

const scoresRouter = express.Router();

scoresRouter.get("/leaderboard", retrieveGameScores);
scoresRouter.post("/save", saveGameScore);

export default scoresRouter;