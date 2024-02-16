import mongoose from "mongoose";

const scoreSchema = new mongoose.Schema({
  winner: String,
  loser: String,
  scorewinner: Number,
  scoreloser: Number,
  rounds: Number,
  date: Date,
});

export const Score = mongoose.model("Score", scoreSchema);

export default Score;