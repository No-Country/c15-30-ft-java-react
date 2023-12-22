const Proyecto = require('../models/proyecto.model.js');
const Tarea = require('../models/tarea.model.js');
const Colaborador = require('./colaborador.model.js');

Proyecto.hasMany(Tarea, {foreignKey: 'id'});
Tarea.belongsTo(Proyecto, {foreignKey: 'id'});

Proyecto.belongsToMany(Colaborador, {through: "proyectos_colaboradores", })
Colaborador.belongsToMany(Proyecto, {through: "proyectos_colaboradores", })


//has many belongs to 
//belongsToMany x2