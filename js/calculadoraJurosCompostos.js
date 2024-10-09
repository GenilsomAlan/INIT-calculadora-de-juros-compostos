const calcular = document.getElementById('buttonCalcular');
const limpar = document.getElementById('buttonClear');
const idValorTotal = document.getElementById('idValorTotal');
const idValorInvestido = document.getElementById('idValorInvestido');
const idJurosTotal = document.getElementById('idTotalJuros');

calcular.addEventListener('click', () =>{
    var periodoMesAno = document.getElementById('selectPeriodoId').value;
    var taxaMesAno = document.getElementById('selectMesAnoTaxa').value;
    var valorInicial = parseFloat(document.getElementById("valorInicial").value);
    var valorMensal = parseFloat(document.getElementById('valorMensal').value);
    var taxaJuros = parseFloat(document.getElementById('taxaJuros').value)/100;
    var periodo = parseFloat(document.getElementById('periodo').value);

    if(isNaN(valorInicial) || isNaN(taxaJuros) || isNaN(periodo)){
        alert("Insira valores válidos!");
        return;
    }
    
    if(taxaMesAno == 2){//conversão utilizando taxa afetiva
        taxaJuros = Math.pow(1 + taxaJuros, 1/12) - 1;
    }

    if(periodoMesAno == 2) periodo *= 12;

    // console.log(taxaJuros, periodo);

    var montante = valorInicial * Math.pow((1 + taxaJuros),periodo) + 
                    valorMensal * ((Math.pow((1 + taxaJuros),periodo) - 1) / taxaJuros);

    var valorInvestido = valorInicial + (valorMensal * periodo);
    var jurosTotal = montante - valorInvestido;
    
        
    idValorTotal.innerHTML = `${montante.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`;
    idValorInvestido.innerHTML = `${valorInvestido.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`;
    idJurosTotal.innerHTML = `${jurosTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`
})


limpar.addEventListener('click', () => {
    document.getElementById("valorInicial").value = '';
    document.getElementById('valorMensal').value = '';
    document.getElementById('taxaJuros').value = '';
    document.getElementById('periodo').value = '';
    document.getElementById('selectMesAnoTaxa').value = '1';
    document.getElementById('selectPeriodoId').value = '1';
    idValorTotal.innerHTML = 'R$ 0,00';
    idValorInvestido.innerHTML = 'R$ 0,00';
    idJurosTotal.innerHTML = 'R$ 0,00';
});

 

