const botoes = document.querySelectorAll(".botao");


for(let i=0;1 <botoes.lenght;i++){
    botoes[i].onclick = function(){
        botoes[i].classList.add("ativo");

        for(let j=0;j<botoes.length;j++){
            botoes[j].classlist.remove("ativo");
        }

    }
    

}