function mudaTema (){
    let html = document.documentElement; //pegando o elemento HTML

    html.classList.toggle('ligth'); // se nao tiver adiciona, se tiver remove

    //pegar imagens
     const img = document.querySelector('#profile img');

    //trocando as imagens
    if(html.classList.contains('ligth')){
        // se tiver light
        img.setAttribute('src', 'ligth.png');
    }else{
        // se tiver dark
        img.setAttribute('src', 'dark.png');
    }   
}
function portifolio (){
    alert('Em Breve!');
}