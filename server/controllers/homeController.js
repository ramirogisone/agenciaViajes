const Viaje = require('../models/Viajes');
const Testimonial = require('../models/Testimoniales');

exports.consultasHomePage = async (req, res) => {
	

	const viajes = Viaje.findAll({ limit: 3 })
	const testimoniales = Testimonial.findAll({ limit: 3 })

	res.render('index', {
		pagina: 'Próximos Viajes',
		clase: 'home',
		viajes,
		testimoniales
	})
}