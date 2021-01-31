function Verificar(){
    
    var data = new Date();7
    var ano = data.getFullYear();

    var anoNasc = document.getElementById("txtano");
    

    var resultado = document.querySelector("div#res");

    if(anoNasc.value.length == 0 || anoNasc > ano){

        alert("ERRO! Verifique os dados e tente novamente!");

    }else {

        var sex = document.getElementsByName("radsex")
        var idade = ano - anoNasc.value;
        var genero = "";
        var img = document.createElement("img");

        //Cria uma imagem apartir do JavaScript e seta o atributo id do img
        img.setAttribute("id", "foto");

        if(sex[0].checked){
            genero = "Homem";

            if(idade < 10){
                img.setAttribute("src", "img/bebe-homem.jpg");
            }else if(idade >= 10 && idade <18){
                img.setAttribute("src", "img/jovem-homem.jpg");
            }else if(idade >= 18 && idade <55){
                img.setAttribute("src", "img/homem-adulto.jpg")
            }else if(idade >= 55){
                img.setAttribute("src", "img/idoso-homem.jpg")
            }
        }else if(sex[1].checked){
            genero = "Mulher";

            if(idade < 10){
                img.setAttribute("src", "img/bebe-mulher.jpg");
            }else if(idade >= 10 && idade < 18){
                img.setAttribute("src", "img/jovem-mulher.jpg");
            }else if(idade >= 18 && idade < 55){
                img.setAttribute("src", "img/mulher-adulta.jpg");
            }else if(idade >= 55){
                img.setAttribute("src", "img/idoso-mulher.jpg")
            }
        }

        resultado.style.textAlign = "center";
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`;

        //Cria dinâmicamente uma imagem dentro da div resultado
        resultado.appendChild(img);
    }
    

}