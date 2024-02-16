import Score from "../models/Scores.js"

export const retrieveGameScores = async (req, res) => {
  try {
    const scores = await Score.find().sort({ date: -1 })
    if (!scores) {
      res.status(404).json({ message: "No scores found" });
    }
    res.json(scores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const saveGameScore = async (req, res) => {
  try {
    const {winner, loser, scorewinner, scoreloser, rounds} = req.body;

    const score = new Score({winner, loser, scorewinner, scoreloser, rounds, date: new Date()});
    await score.save();
    res.json(score);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}