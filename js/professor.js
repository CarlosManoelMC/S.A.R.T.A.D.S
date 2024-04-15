function pesquisar() {
    let input = document.getElementById('pesquisar_nome').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('nome_professor');
    let y = document.getElementsByClassName('card_completo');
    let z = document.querySelector('#card_professor_cima');
    
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            y[i].style.display="none";
            
        }
        else {
            y[i].style.display="";
            
                        
        }
    }
}
