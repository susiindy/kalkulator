function hitung() {
    var operand1 = parseFloat(document.getElementById('operand1').value);
    var operand2 = parseFloat(document.getElementById('operand2').value);
    var operator = document.getElementById('operator').value;
    var result;

    switch(operator) {
        case 'tambah':
            result = operand1 + operand2;
            break;
        case 'kurang':
            result = operand1 - operand2;
            break;
        default:
            result = "Operasi tidak valid!";
    }

    document.getElementById('result').innerText = "Hasil: " + result;
}
