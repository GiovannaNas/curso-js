let amigo = { nome: 'Giovanna',
    sexo: 'F', peso: 51,
    engordar(p = 0) {
        console.log('Engordou')
        this.peso += p
    }
}
amigo.engordar(10)
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)
