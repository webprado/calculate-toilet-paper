var PapelHigienico = require('../api/controllers/papelhigienico.controller');

module.exports = function(router){

    // Papel Higiênico
    router.post('/PapelHigienico/Calcular', PapelHigienico.calcular);
}