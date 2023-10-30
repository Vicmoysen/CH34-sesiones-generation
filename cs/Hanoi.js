function hanoi(n, or, des, aux) {
    if (n == 1) 
        console.log(or + "->" + des)
    else {
        hanoi(n-1, or, aux, d)
        console.log(or + "->" + des)
        hanoi(n-1, aux, des, or)
    }
}
var d = prompt("Número de discos: ")
hanoi(d, "A", "C", "B")