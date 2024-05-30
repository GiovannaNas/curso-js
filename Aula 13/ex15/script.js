function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verificar os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement ('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if ( idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'assets/bb-menino.png')
            } else if (idade < 30){
                //jovem
                img.setAttribute('src', 'assets/menino.png')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'assets/homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'assets/idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if ( idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'assets/bb-menina.png')
            } else if (idade < 30){
                //jovem
                img.setAttribute('src', 'assets/menina.png')
            }else if (idade <50 ) {
                //adulto
                img.setAttribute('src', 'assets/mulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'assets/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild (img)
    }
}
