const Question = require("../models/questionModel");

module.exports = {
  createQuestion: async (req, res) => {
    try {
      const { questionText, options, answer } = req.body;

      // Check if options array has exactly four elements
      if (!Array.isArray(options) || options.length !== 4) {
        return res
          .status(400)
          .json({
            error: "Options must be an array with exactly four elements.",
          });
      }

      // Additional validation can be added as needed

      const newQuestion = new Question({ questionText, options, answer });
      const savedQuestion = await newQuestion.save();

      res.json(savedQuestion);
    } catch (error) {
      console.error("Error creating question:", error.message);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  getAllQuestions: async (req, res) => {
    try {
      const questions = await Question.find();
      res.json(questions);
    } catch (error) {
      console.error("Error getting questions:", error.message);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  getQuestionById: async (req, res) => {
    try {
      const question = await Question.findById(req.params.id);
      if (!question) {
        return res.status(404).json({ error: "Question not found" });
      }
      res.json(question);
    } catch (error) {
      console.error("Error getting question by ID:", error.message);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  updateQuestion: async (req, res) => {
    try {
      const { questionText, options, answer } = req.body;

      // Check if options array has exactly four elements
      if (!Array.isArray(options) || options.length !== 4) {
        return res
          .status(400)
          .json({
            error: "Options must be an array with exactly four elements.",
          });
      }

      // Additional validation can be added as needed

      const updatedQuestion = await Question.findByIdAndUpdate(
        req.params.id,
        { questionText, options, answer },
        { new: true }
      );

      if (!updatedQuestion) {
        return res.status(404).json({ error: "Question not found" });
      }

      res.json(updatedQuestion);
    } catch (error) {
      console.error("Error updating question:", error.message);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  deleteQuestion: async (req, res) => {
    try {
      const deletedQuestion = await Question.findByIdAndDelete(req.params.id);
      if (!deletedQuestion) {
        return res.status(404).json({ error: "Question not found" });
      }
      res.json(deletedQuestion);
    } catch (error) {
      console.error("Error deleting question:", error.message);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};
