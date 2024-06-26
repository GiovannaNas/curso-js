function gerarTabuada() {
    let num = document.getElementById('txtn');
    let tab = document.getElementById('seltab');

    tab.innerHTML = '';

    if (num.value.length === 0 || isNaN(num.value)) {
        let option = document.createElement('option');
        option.text = 'Digite um número válido acima';
        tab.appendChild(option);
    } else {
        let n = Number(num.value);

        for (let i = 1; i <= 10; i++) {
            let option = document.createElement('option');
            option.text = `${n} x ${i} = ${n * i}`;
            tab.appendChild(option);
        }
    }
}
