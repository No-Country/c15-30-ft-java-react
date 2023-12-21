const express = require('express');
const userRouter = require('./user.routes');
const projectRouter = require('./project.routes');
const loginRouter = require('./login.routes');
const technologyRouter = require('./technology.routes');
const relationsRouter = require('./relaciones.routes');
const paisRouter = require('./pais.routes');
const statusRouter = require('./status.router');
const router = express.Router();

// router.use("/login", loginRouter)
// router.use("/usuarios", userRouter)
router.use("/paises", paisRouter)
// router.use("/status",statusRouter)
// router.use("/projects", projectRouter)
// router.use("/techs", technologyRouter)
// router.use("/asociate", relationsRouter)

module.exports = router;