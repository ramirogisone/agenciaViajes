exports.infoNosotros =  (req, res) => {
    //pasamos la vista que va a renderizar y otros parametros de configuracion
    res.render('nosotros', {
        pagina: 'Sobre nosotros'
    });
}