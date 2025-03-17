function printNumbers(n) {
    n = String(n)
    let nombre = "1"
    for (let i = 2; i <= n; i++) {
        nombre += " " + i
    }
    return nombre
}

export default printNumbers
