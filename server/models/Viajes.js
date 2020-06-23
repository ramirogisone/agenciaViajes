const sequalize = require('sequelize');
const db = require('../config/database');

const Viaje = db.define('viaje', {
	titulo: {
		type: sequalize.STRING
	},
	precio: {
		type: sequalize.STRING
	},
	fecha_ida: {
		type: sequalize.DATE
	},
	fecha_vuelta: {
		type: sequalize.DATE
	},
	imagen: {
		type: sequalize.STRING
	},
	descripcion: {
		type: sequalize.STRING
	},
	disponibles: {
		type: sequalize.STRING
	}
});

module.exports = Viaje;
