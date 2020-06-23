const sequalize = require('sequelize');
const db = require('../config/database');

const Testimonial = db.define('testimoniales', {
	nombre: {
		type: sequalize.STRING
	},
	correo: {
		type: sequalize.STRING
	},
	mensaje: {
		type: sequalize.STRING
	},
});

module.exports = Testimonial;