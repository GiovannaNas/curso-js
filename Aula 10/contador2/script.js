
document.getElementById('start-counting').addEventListener('click', function () {
    let start = parseInt(document.getElementById('start').value);
    let end = parseInt(document.getElementById('end').value);
    let step = parseInt(document.getElementById('step').value);

    if (isNaN(start) || isNaN(end) || isNaN(step) || step <= 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    let result = '';

    for (let i = start; i <= end; i += step) {
        result += `${i} 😊 `;
    }

    document.getElementById('result').innerHTML = result;
});
