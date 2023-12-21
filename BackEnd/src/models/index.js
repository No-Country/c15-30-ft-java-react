const Project = require("./project.model");
const Technology = require("./technology.model");
const User = require("./usuario.model");

/* User.hasMany(Project, {
  foreignKey: "userId",
}); */
/* Project.belongsTo(User, {
  foreignKey: "userId",
});
 */
/* Technology.belongsToMany(User, {
  through: "user_technology",
});
User.belongsToMany(Technology, {
  through: "user_technology",
}) */