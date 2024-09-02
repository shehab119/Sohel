const userController = {};
userController.home = (req, res) => {
  res.render("home");
};
module.exports = { userController };
