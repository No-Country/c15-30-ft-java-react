const User = require('../models/usuario.model');
const Technology = require('../models/technology.model');

async function asociarTecnologiasAUsuario(userId, technologyIds) {
  try {
    const user = await User.findByPk(userId);
    const technologies = await Technology.findAll({
      where: {
        id: technologyIds,
      },
    });

    if (user && technologies.length > 0) {
      await user.setTechnologies(technologies);
      return { success: true, message: 'Tecnologías asociadas correctamente.' };
    } else {
      return { success: false, message: 'Usuario o tecnologías no encontradas.' };
    }
  } catch (error) {
    return { success: false, message: 'Error al asociar tecnologías a usuario.' };
  }
}

module.exports = {
  asociarTecnologiasAUsuario,
};