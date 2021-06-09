const models = require("../models");

const commentController = {};

commentController.findAll = async (req, res) => {
  try {
    const allComment = await models.comment.findAll();
    res.json({ allComment });
    console.log(allComment);
  } catch (error) {
    console.log("can not find all city");
    res.status(400).json({ error: error.message });
  }
};

commentController.findCommentforPost = async (req, res) => {
  try {
    const allComment = await models.comment.findAll({
      where: { postId: req.body.postId },
    });
    res.json({ allComment });
    console.log(allComment);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

commentController.findOne = async (req, res) => {
  try {
    const oneComment = await models.comment.findOne({
      where: { userId: req.headers.authorization },
    });
    res.json({ oneComment });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

commentController.create = async (req, res) => {
  try {
    console.log(req.body);
    const user = await models.user.findOne({
      where: { id: req.body.userId },
    });

    const newComment = await models.comment.create({
      description: req.body.description,
      userId: user.id,
      postId: req.body.postId,
    });

    await user.addComment(newComment);
    res.json({ newComment });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = commentController;
