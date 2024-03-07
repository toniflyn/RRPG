document.addEventListener('DOMContentLoaded', (event) => {
    let cartasReveladas = []; // Array para armazenar as cartas reveladas em uma jogada

    document.getElementById('botao-leitura').addEventListener('click', function() {
        cartasReveladas = []; // Reseta as cartas reveladas para a nova jogada
        resetarCartas();
        // Revelar as cartas com intervalos de tempo
        setTimeout(() => revelarCarta('carta1'), 500); // Espera 0.5 segundos para revelar a primeira
        setTimeout(() => revelarCarta('carta2'), 1500); // Espera 1.5 segundos para revelar a segunda
        setTimeout(() => revelarCarta('carta3'), 2500); // Espera 2.5 segundos para revelar a terceira
    });
    
    function revelarCarta(idCarta) {
        var caminhoBase = './img/'; // Caminho base para a pasta das imagens das cartas
        var cartaViradaParaBaixo = `${caminhoBase}back.jfif`; // Caminho para a imagem da carta virada para baixo

        var numeroCarta;
        do {
            numeroCarta = Math.floor(Math.random() * 22) + 1; // Gera um número de 1 a 22
        } while (cartasReveladas.includes(numeroCarta)); // Verifica se a carta já foi revelada

        cartasReveladas.push(numeroCarta); // Adiciona o número da carta ao array de cartas reveladas

        var imagemCarta = `${caminhoBase}${numeroCarta}.jpg`;

        var carta = document.getElementById(idCarta);
        carta.style.backgroundImage = `url('${imagemCarta}')`;

        // Atualiza o texto do status da carta
        var statusId = "status-" + idCarta;
        var statusCarta = document.getElementById(statusId);
        var cartaInvertida = Math.random() < 0.5; // 50% de chance de estar virada para cima ou para baixo
        if (cartaInvertida) {
            statusCarta.innerText = "Invertida";
        } else {
            statusCarta.innerText = "Não Invertida";
        }
    }
    
    function resetarCartas() {
        // Remove a imagem de fundo das cartas para "resetá-las"
        document.querySelectorAll('.carta').forEach(function(carta) {
            carta.style.backgroundImage = '';
        });
        // Limpa o texto do status das cartas
        document.querySelectorAll('.status-carta').forEach(function(status) {
            status.innerText = '';
        });
    }
});
