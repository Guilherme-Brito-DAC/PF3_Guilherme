document.getElementById("btn_clicar").onclick = () => {

    let resultado = document.getElementById("lbl_resultado")

    let ValorAplicadoMensalmente = parseFloat(document.getElementById("valorAplicado").value)
    let TaxaDeJuros = parseFloat(document.getElementById("taxaJuros").value / 100)
    let NumeroParcelas = parseFloat(document.getElementById("numeroParcelas").value)

    if (ValorAplicadoMensalmente != "" || TaxaDeJuros != "" || NumeroParcelas != "")
     {
        var formatter = new Intl.NumberFormat(undefined, {
            style: 'currency',
            currency: 'BRL',
        });

        let ValorFuturo = (ValorAplicadoMensalmente * ((((1 + TaxaDeJuros) ** NumeroParcelas) - 1) / TaxaDeJuros)).toFixed(2)
        resultado.innerHTML = `Jose da Silva, se voce aplicar ${formatter.format(ValorAplicadoMensalmente)}, à taxa de juros de ${TaxaDeJuros}% ao mês, durante ${NumeroParcelas}, acumulará uma poupança de ${formatter.format(ValorFuturo)}`
    }
    else 
    {
        resultado.innerHTML = "Complete o formulario acima"
    }
}