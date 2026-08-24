const botoes = document.querySelectorALL("button");

    botoes.forEach(function (botao) {
        let curtiu = false;
        botao.addEventLister("click", botaoClicado);
        function botaoClicado() {
            console.log("fui clicado");
            let texto = botao.querySelector("span");
            if (curtiu === false){
                texto.textContent++;
                curtiu = true;
            } else{
                texto.textContent--;
                curtiu = false;
            }
        }
    })


</script>

</html>
