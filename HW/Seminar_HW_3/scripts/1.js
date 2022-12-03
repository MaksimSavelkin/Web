const celcia = Number.parseFloat(prompt("Введите температуру в градусах Цельсия: "))
alert(`Цельсия: ${celcia}, Фаренгейт:${celciaInFarengate(celcia).toFixed(2)}`)
function celciaInFarengate(num) {
    return (9 / 5) * num + 32;
}