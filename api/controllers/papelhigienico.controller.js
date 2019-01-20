
exports.calcular = function (req, res) {

    var valorVenda = req.body.valorVenda;
    var qtdeRolosEmb = req.body.qtdeRolosEmb;
    var comprimentoCadaRolo = req.body.comprimentoCadaRolo;
    var resultado = 0;

    valorVenda = valorVenda.replace(',', '.');
    valorVenda = parseFloat(valorVenda);

    resultado = ((valorVenda / qtdeRolosEmb) / comprimentoCadaRolo);
    resultado = resultado.toFixed(2).replace('.',',');

    res.json({
        'Valor': valorVenda,
        'Rolos Embalagem': qtdeRolosEmb,
        'Comp. Cada Rolo': comprimentoCadaRolo,
        'Resultado': resultado
    });

}
