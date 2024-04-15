function mostrarsenha(){
    var inputPass = document.getElementById('senha');
    var iconpass = document.getElementById('btn-senha');

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type', 'text');
        iconpass.classList.replace('bi-eye', 'bi-eye-slash');

    }
    else{
        inputPass.setAttribute('type', 'password');
        iconpass.classList.replace('bi-eye-slash','bi-eye');
    }
}

// function trocaimg(){
//     var variavel = document.getElementById("icone");
//     if(variavel.src.match("olho_aberto")){
//         variavel.src="olho_fechado.png";
//     }
//     else{
//         variavel.src="olho_aberto.png";
//     }
// }