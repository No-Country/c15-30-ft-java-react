const Proyecto = require('../models/proyecto.model.js');
const Tarea = require('../models/tarea.model.js');
const Usuario = require('./Usuario.model.js');
const Colaborador = require('./colaborador.model.js');
const Dificultad = require('./dificultad.model.js');
const Pais = require('./pais.model.js');
const Status = require('./status.model.js');

Proyecto.hasMany(Tarea, {foreignKey: 'id'});
Tarea.belongsTo(Proyecto, {foreignKey: 'id'});

Proyecto.belongsToMany(Colaborador, {through: "proyectos_colaboradores", })
Colaborador.belongsToMany(Proyecto, {through: "proyectos_colaboradores", })

Dificultad.hasMany(Proyecto, {foreignKey: 'dificultad_id'});
Proyecto.belongsTo(Dificultad, {foreignKey: 'dificultad_id'});

/* Colaborador.belongsToMany(Tarea, {through: "colaboradores_tareas"});
Tarea.belongsToMany(Colaborador, {through: "colaboradores_tareas"});

Status.hasMany(Tarea, {foreignKey: 'status_id'});
Tarea.belongsTo(Status, {foreignKey: 'status_id'});

Pais.hasMany(Usuario, {foreignKey: 'pais_id'});
Usuario.belongsTo(Pais, {foreignKey: 'pais_id'}); */