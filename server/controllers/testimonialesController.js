const Testimonial = require('../models/Testimoniales');

exports.infoTestimoniales = async (req, res) => {
    const testimoniales = await Testimonial.findAll()
    res.render('testimoniales', {
        pagina: 'Testimoniales',
        testimoniales
    })
}

exports.guardarTestimonial = async (req, res) => {
    let {nombre, correo, mensaje} = req.body;
    let errores = [];
    if(!nombre) {
        errores.push({'mensaje': 'Agrega tu nombre'})
    }
    if(!correo) {
        errores.push({'mensaje': 'Agrega tu correo'})
    }
    if(!mensaje) {
        errores.push({'mensaje': 'Agrega tu mensaje'})
    }
    if(errores.length > 0){
        //renderizamos la vista y mantenemos lo que el usuario habia ingresado
        const testimoniales = await Testimonial.findAll()
        res.render('testimoniales', {
            errores,
            nombre, 
            correo, 
            mensaje,
            pagina: 'Testimoniales',
            testimoniales
        })
    }else{
        //almaceno en la DB
        Testimonial.create({
            nombre,
            correo,
            mensaje
        })
        .then(Testimonial => res.redirect('/testimoniales'))
        .catch(error => console.log(error));
    }
    }