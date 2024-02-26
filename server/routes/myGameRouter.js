const myGameRouter = require("express").Router();
const { Theme, Question } = require("../db/models");

myGameRouter.get("/themes", async (req, res) => {
  try {
    // Получаем и сортируем все темы
    const themes = await Theme.findAll({ order: [["id", "ASC"]] });

    for (const theme of themes) {
      const questions = await Question.findAll({
        where: { theme_id: theme.id },
        order: [["id", "ASC"]],
        // attributes: { exclude: ['answer'] },
      });
      theme.setDataValue("Questions", questions);
    }

    res.json(themes);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

myGameRouter.post("/validate/:id", async (req, res) => {
  try {
    const questionId = req.params.id;
    const userAnswer = req.body.answer.trim().toLowerCase();
    // const userAnswer = (req.query.answer || '').trim().toLowerCase();

    const question = await Question.findByPk(questionId);

    if (!question) {
      return res.status(404).send("Вопрос не найден");
    }

    const correctAnswer = question.answer.trim().toLowerCase();
    const isCorrect = userAnswer === correctAnswer;

    res.json({ isCorrect: isCorrect ? 1 : 0 });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = myGameRouter;
