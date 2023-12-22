const app = require("./app");
const sequelize = require("./utils/connection");
require("./models/index");

const PORT = process.env.PORT || 8080;

const main = async () => {
  try {
    sequelize.sync({logging:false});
    console.log("DB connected");
    app.listen(PORT);
    console.log(`Server running on port ${PORT}`);
  } catch (error) {
    console.log(error);
  }
};

main();
