import { filmes, series } from "./filmes.js";    
    
    // =========================
    // FUNÇÃO CRIAR CARD
    // =========================
    
    function criarCard(item){
    
        return `
            <div class="card">
    
                <img src="${item.imagem}" alt="${item.titulo}">
    
                <h3>${item.titulo}</h3>
    
                <p>${item.descricao}</p>
    
                <div class="botoes">
    
                    <button onclick="assistir('${item.titulo}')">
                        ▶ Assistir
                    </button>
    
                    <button onclick="favoritar('${item.titulo}')">
                        + Minha Lista
                    </button>
    
                </div>
    
            </div>
        `;
    }
    
    
    // =========================
    // MOSTRAR FILMES E SÉRIES
    // =========================
    
    function mostrar(){
    
        let listaFilmes = document.getElementById("listaFilmes");
        let listaSeries = document.getElementById("listaSeries");
    
        
        listaFilmes.innerHTML = "";
        listaSeries.innerHTML = "";
    
    
        filmes.forEach(function(f){
            listaFilmes.innerHTML += criarCard(f);
        });
    
        series.forEach(function(s){
            listaSeries.innerHTML += criarCard(s);
        });
    
    }
    
    
    // =========================
    // BOTÃO ASSISTIR
    // =========================
    
    function assistir(nome){
    
        alert("▶ Reproduzindo: " + nome);
    
    }
    
    
    // =========================
    // FAVORITOS
    // =========================
    
    function favoritar(nome){
    
        alert("⭐ Adicionado à sua lista: " + nome);
    
    }
    
    
    // INICIAR
    
    mostrar();