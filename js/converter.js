function trocarMoeda(value) {

    let btn = document.querySelector('#calcula');
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        let real = document.querySelector('#real');
        let valor = real.value;
        let dolar = real.value * 5.7;
        let euro = real.value * 5.98;
        let libra = real.value * 7.22;
        let pesoMX = real.value * 0.3;
        let pesoAR = real.value * 0.006;
        let iene = real.value * 0.04;

        if (value == "selecionar") {
            document.querySelector('.mostrar-numero').innerHTML = '<p>Selecione uma moeda para converter o valor</p>';
        } else if (value == "dolar") {
            element = document.querySelector('.mostrar-numero').innerHTML = '<p style=color:#235906> $' + valor + ' em Reais é R$' + dolar.toFixed(2) + '</p>';
            if (real.value == 0 || real.value == null) {
                document.querySelector('.mostrar-numero').innerHTML = '<p> $0.00 em Reais é R$0.00</p>';
            } else if (real.value < 0) {
                document.querySelector('.mostrar-numero').innerHTML = '<p style=color:#82113E> -$' + valor * -1 + ' em Reais é -R$' + dolar.toFixed(2) * -1 + '</p>'
            }
        } else if (value == "euro") {
            element = document.querySelector('.mostrar-numero').innerHTML = '<p style=color:#235906> €' + valor + ' em Reais é R$' + euro.toFixed(2) + '</p>';
            if (real.value == 0 || real.value == null) {
                document.querySelector('.mostrar-numero').innerHTML = '<p> €0.00 em Reais é R$0.00</p>';
            } else if (real.value < 0) {
                document.querySelector('.mostrar-numero').innerHTML = '<p style=color:#82113E> -€' + valor * -1 + ' em Reais é -R$' + euro.toFixed(2) * -1 + '</p>'
            }
        } else if (value == "libra") {
            element = document.querySelector('.mostrar-numero').innerHTML = '<p style=color:#235906> £' + valor + ' em Reais é R$' + euro.toFixed(2) + '</p>';
            if (real.value == 0 || real.value == null) {
                document.querySelector('.mostrar-numero').innerHTML = '<p> £0.00 em Reais é R$0.00</p>';
            } else if (real.value < 0) {
                document.querySelector('.mostrar-numero').innerHTML = '<p style=color:#82113E> -£' + valor * -1 + ' em Reais é -R$' + euro.toFixed(2) * -1 + '</p>'
            }
        } else if (value == "pesoMX") {
            element = document.querySelector('.mostrar-numero').innerHTML = '<p style=color:#235906> MX$' + valor + ' em Reais é R$' + pesoMX.toFixed(2) + '</p>';
            if (real.value == 0 || real.value == null) {
                document.querySelector('.mostrar-numero').innerHTML = '<p> MX$0.00 em Reais é R$0.00</p>';
            } else if (real.value < 0) {
                document.querySelector('.mostrar-numero').innerHTML = '<p style=color:#82113E> -MX$' + valor * -1 + ' em Reais é -R$' + pesoMX.toFixed(2) * -1 + '</p>'
            }
        } else if (value == "pesoAR") {
            element = document.querySelector('.mostrar-numero').innerHTML = '<p style=color:#235906> AR$' + valor + ' em Reais é R$' + pesoAR.toFixed(2) + '</p>';
            if (real.value == 0 || real.value == null) {
                document.querySelector('.mostrar-numero').innerHTML = '<p> AR$0.00 em Reais é R$0.00</p>';
            } else if (real.value < 0) {
                document.querySelector('.mostrar-numero').innerHTML = '<p style=color:#82113E> -AR$' + valor * -1 + ' em Reais é -R$' + pesoAR.toFixed(2) * -1 + '</p>'
            }
        } else if (value == "iene") {
            element = document.querySelector('.mostrar-numero').innerHTML = '<p style=color:#235906> ¥' + valor + ' em Reais é R$' + iene.toFixed(2) + '</p>';
            if (real.value == 0 || real.value == null) {
                document.querySelector('.mostrar-numero').innerHTML = '<p> ¥0.00 em Reais é R$0.00</p>';
            } else if (real.value < 0) {
                document.querySelector('.mostrar-numero').innerHTML = '<p style=color:#82113E> -¥' + valor * -1 + ' em Reais é -R$' + iene.toFixed(2) * -1 + '</p>'
            }
        }
    });
};