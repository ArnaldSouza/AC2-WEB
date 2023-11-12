var kmCarro;
var eficCarro;
var kmMoto;
var eficMoto;
var kmTransPublico
var pessoasMoram;
var consumoCarne;
var energia;
var carne;
var transporte;
var teste2;

var todasAsPaginas = [document.getElementById("pagina1"), document.getElementById("pagina2"), document
    .getElementById("pagina3"), document.getElementById("pagina4"), document.getElementById("pagina5"), document
        .getElementById("pagina6"),
document.getElementById("pagina7"), document.getElementById("pagina8"), document.getElementById("pagina9")
];
var ref = 0;
console.log(todasAsPaginas);

function next() {
    if (ref == todasAsPaginas.length - 1) {
        document.getElementById("botaoNext").disable;
    } else {
        document.getElementById("botaoNext").enable;
        ref = ref + 1;
        tela();
    }

    const gasCarb = 2.28;
    const energiaNRenovavel = 0.0817;
    const emissaoPerCaipta = 7000;
    const carCarne = 27;
    const consumoEnergiaMensal = 1200;
    const emissaoTransportePublico = 1.28;

    kmCarro = document.getElementById("kmCarro").value;
    eficCarro = document.getElementById("eficCarro").value;
    kmMoto = document.getElementById("kmMoto").value;
    eficMoto = document.getElementById("eficMoto").value;
    kmTransPublico = document.getElementById("kmTransPublico").value;
    pessoasMoram = document.getElementById("pessoasMoram").value;
    consumoCarne = document.getElementById("consumoCarne").value;
    energia = document.getElementById("energia").value;


    transporte = ((kmCarro) * (eficCarro) * (gasCarb)) + ((kmMoto) * (eficMoto) * (gasCarb)) + ((kmTransPublico) * (emissaoTransportePublico));
    carne = (consumoCarne) * (carCarne);
    energia = (consumoEnergiaMensal) * pessoasMoram;

    var kgCarbono = ((kmCarro) * (eficCarro) * (gasCarb)) +
        ((kmMoto) * (eficMoto) * (gasCarb)) +
        ((((consumoEnergiaMensal) / 100) - (energia)) * (energiaNRenovavel)) +
        ((pessoasMoram) * (emissaoPerCaipta)) +
        ((consumoCarne) * (carCarne)) +
        ((kmTransPublico) * (emissaoTransportePublico));

    atualizarGrafico();
}




function back() {
    if (ref == 0) {
        document.getElementById("botaoBack").disable;
    } else {
        document.getElementById("botaoBack").enable;
        ref = ref - 1;
        tela();
    }
    console.log(ref);
}

function tela() {
    todasAsPaginas[ref].style.display = "block";
    for (var i = 0; i < todasAsPaginas.length; i++) {
        if (i === ref) {
            todasAsPaginas[i].style.display = "block";
        } else {
            todasAsPaginas[i].style.display = "none";
        }
    }
}

var ctx = document.getElementById("graficoPizza").getContext("2d");
var myPieChart;

function criarGraficoPizza(dados, cores) {
    myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(dados),
            datasets: [{
                data: Object.values(dados),
                backgroundColor: cores,
            }]
        },
    });
}

function atualizarGraficoPizza(dados) {
    myPieChart.data.datasets[0].data = Object.values(dados);
    myPieChart.update();
}

function atualizarGrafico() {
    // Substitua os valores abaixo pelos seus dados reais
    var dadosAtualizados = {
        'transporte': transporte,
        'energia': energia,
        'carne': carne,
    };

    var coresIniciais = ['rgb(255, 0, 0)', 'rgb(54, 162, 235)', 'rgb(0,255,0)'];
    if (!myPieChart) {
        criarGraficoPizza(dadosAtualizados, coresIniciais);
    } else {
        atualizarGraficoPizza(dadosAtualizados);
    }
}